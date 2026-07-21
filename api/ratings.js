import pg from 'pg'

const { Pool } = pg

let pool

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured')
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 1,
    })
  }

  return pool
}

async function ensureTable(db) {
  await db.query(`
    CREATE TABLE IF NOT EXISTS ratings (
      id SERIAL PRIMARY KEY,
      stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)
}

async function getSummary(db) {
  const result = await db.query(`
    SELECT
      COUNT(*)::int AS total,
      COALESCE(ROUND(AVG(stars)::numeric, 1), 0) AS average
    FROM ratings
  `)

  return {
    total: Number(result.rows[0].total),
    average: Number(result.rows[0].average),
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')

  try {
    const db = getPool()
    await ensureTable(db)

    if (req.method === 'GET') {
      return res.status(200).json(await getSummary(db))
    }

    if (req.method === 'POST') {
      const stars = Number(req.body?.stars)

      if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
        return res.status(400).json({
          error: 'Rating must be a whole number between 1 and 5',
        })
      }

      await db.query('INSERT INTO ratings (stars) VALUES ($1)', [stars])

      return res.status(201).json({
        success: true,
        ...(await getSummary(db)),
      })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    console.error('Ratings API error:', error)
    return res.status(500).json({ error: 'Unable to load or save ratings' })
  }
}
