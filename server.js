import express from 'express';
import cors from 'cors';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';

const { Pool } = pg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Create ratings table if not exists
await pool.query(`
  CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    stars INTEGER NOT NULL CHECK (stars >= 1 AND stars <= 5),
    created_at TIMESTAMP DEFAULT NOW()
  )
`);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// GET average rating
app.get('/api/ratings', async (req, res) => {
  try {
    const result = await pool.query('SELECT COUNT(*) as total, ROUND(AVG(stars)::numeric, 1) as average FROM ratings');
    res.json({
      total: parseInt(result.rows[0].total),
      average: parseFloat(result.rows[0].average) || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new rating
app.post('/api/ratings', async (req, res) => {
  const { stars } = req.body;
  if (!stars || stars < 1 || stars > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5' });
  }
  try {
    await pool.query('INSERT INTO ratings (stars) VALUES ($1)', [stars]);
    const result = await pool.query('SELECT COUNT(*) as total, ROUND(AVG(stars)::numeric, 1) as average FROM ratings');
    res.json({
      success: true,
      total: parseInt(result.rows[0].total),
      average: parseFloat(result.rows[0].average) || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fallback to index.html for SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Sweet Saeeda server running on port 3000');
});
