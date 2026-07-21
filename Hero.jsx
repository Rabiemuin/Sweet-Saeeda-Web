import React, { useState, useEffect } from 'react'
import { ArrowRight, Star, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [stats, setStats] = useState({ total: 0, average: 0 })

  useEffect(() => {
    fetch('/api/ratings')
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(console.error)
  }, [])

  const submitRating = (stars) => {
    setRating(stars)
    fetch('/api/ratings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stars })
    })
      .then(r => r.json())
      .then(data => {
        setStats({ total: data.total, average: data.average })
        setSubmitted(true)
      })
      .catch(console.error)
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-tunisian-blue/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-med-blue/5 -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-tunisian-blue/10 text-tunisian-blue px-4 py-2 rounded-full font-bold text-sm mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Leeds' #1 Hidden Gem</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-dark-slate">
              The <span className="text-tunisian-blue">Hidden Gem</span> Everyone In Leeds Keeps Talking About
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Inspired by his mother's home cooking, Chef Mokhles discovered his passion for food at a young age. He later refined his skills in France, learning from experienced Tunisian chefs and mastering authentic techniques. Today, he brings that experience to England, creating traditional dishes with quality ingredients, passion, and a deep respect for his heritage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-tunisian-blue text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-xl shadow-tunisian-blue/20 hover:bg-dark-navy transition-all flex items-center justify-center space-x-2 group">
                <span>View The Menu</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#location" className="bg-soft-white text-dark-slate border-2 border-gray-200 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-dark-navy hover:text-white transition-all flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Find Us Today</span>
              </a>
            </div>

            {/* Star Rating */}
            <div className="mt-10">
              {stats.total > 0 && (
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`w-4 h-4 ${i <= Math.round(stats.average) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-dark-slate">{stats.average} ({stats.total} reviews)</span>
                </div>
              )}
              <p className="text-sm font-bold text-dark-slate mb-3">{submitted ? 'Thanks for your rating!' : 'Rate your experience'}</p>
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <button
                    key={star}
                    onClick={() => submitRating(star)}
                    onMouseEnter={() => !submitted && setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    disabled={submitted}
                    className={`transition-all hover:scale-110 ${submitted ? 'cursor-default' : ''}`}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hovered || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/assets/images/mokhles.jpeg"
                alt="Chef Mokhles"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-pure-white p-6 rounded-3xl shadow-2xl max-w-[240px] animate-bounce-slow">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-med-blue/20 rounded-full flex items-center justify-center">
                  <Utensils className="text-med-blue w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-dark-slate">Fresh Everyday</span>
              </div>
              <p className="text-xs text-gray-500">Our legendary bread is baked fresh every single morning in the market.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Utensils = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
)

export default Hero