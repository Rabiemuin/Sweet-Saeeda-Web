import React from 'react'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: "Jasmine Pearson",
    role: "Local Guide · 28 reviews",
    text: "Probably my fav place to eat in Leeds. Consistently delicious, really friendly service, excellent menu & great value for money.",
    rating: 5
  },
  {
    name: "Paul Elam",
    role: "Local Guide · 26 reviews",
    text: "Excellent spot in Kirkgate Market, everything is super tasty and fresh and the homemade Tunisian bread is delicious. Strongly recommend the Tunisian plate.",
    rating: 5
  },
  {
    name: "Suzy Bee",
    role: "Local Guide · 27 reviews · 40 photos",
    text: "An absolute hidden gem in Kirkgate market, worth a search for. The food is fresh and delicious and generous portions.",
    rating: 5
  }
]

const Reviews = () => {
  return (
    <section className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">What Our <span className="text-tunisian-blue">Community</span> Says</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it. We've served thousands of happy customers in Leeds Kirkgate Market.</p>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-pure-white p-4 rounded-2xl border border-gray-100">
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-dark-slate">4.9/5 on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pure-white p-8 rounded-[40px] relative border border-gray-100 shadow-sm"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-tunisian-blue/10" />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-tunisian-blue/20 flex items-center justify-center font-bold text-tunisian-blue">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-dark-slate">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
