import React from 'react'
import { motion } from 'framer-motion'

const Story = () => {
  return (
    <section id="story" className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h4 className="text-tunisian-blue font-black uppercase tracking-widest text-sm mb-4">Our Heritage</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark-slate leading-tight">From the Sea of <span className="text-med-blue">Sfax</span> to the Heart of Leeds</h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Sweet Saeeda was born from a love of authentic Tunisian cuisine and a passion for sharing the rich flavours of the Mediterranean with the people of Leeds.
              </p>
              <p>
                Inspired by the coastal city of Sfax, where fresh seafood, vibrant spices, and family recipes are part of everyday life, every dish we serve celebrates Tunisia's culinary heritage. Our menu brings together traditional flavours, quality ingredients, and recipes that have been cherished and perfected through generations.
              </p>
              <p>
                Today, from our home in the historic Kirkgate Market, Sweet Saeeda proudly serves freshly prepared Tunisian food, homemade desserts, and warm hospitality. Whether you're discovering Tunisian cuisine for the first time or enjoying a taste of home, we invite you to experience the authentic flavours that make every visit special.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 max-w-xl mx-auto">
              <div>
                <span className="block text-4xl font-bold text-tunisian-blue mb-1">100%</span>
                <span className="text-sm font-bold text-dark-slate uppercase tracking-tighter">Traditional Recipes</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-med-blue mb-1">DAILY</span>
                <span className="text-sm font-bold text-dark-slate uppercase tracking-tighter">Fresh Market Sourcing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story