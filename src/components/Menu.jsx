import React from 'react'
import { motion } from 'framer-motion'

const dishes = [
  {
    title: "The Tunisian Plate",
    description: "Our signature Tunisian chicken plate, served with perfectly seasoned grilled chicken, fresh salad, chips and drink.",
    price: "£9.50",
    image: "/assets/images/chicken-plate.jpeg",
    tag: "Most Popular"
  },
  {
    title: "Makloub",
    description: "A Tunisian street food classic, freshly baked with seasoned chicken, melted cheese, fresh salad, chips and drink.",
    price: "£9.00",
    image: "/assets/images/makloub.jpeg",
    tag: "Fresh Catch"
  },
  {
    title: "Tunisian Brik",
    description: "Crispy golden pastry filled with egg, tuna, capers, and parsley. A must-try street food classic.",
    price: "£5.00",
    image: "/assets/images/brik.jpeg",
    tag: "Authentic"
  },
  {
    title: "Merguez",
    description: "Authentic spicy merguez sausage served in warm bread with fresh salad and house sauce.",
    price: "£6.00",
    image: "/assets/images/merguez.jpeg",
    tag: "Baked Daily"
  }
]

const Menu = () => {
  return (
    <section className="py-24 bg-soft-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-slate">Our Signature <span className="text-tunisian-blue">Dishes</span></h2>
          <p className="text-lg text-gray-600">Discover the fresh flavors of Tunisia through our most loved recipes, prepared fresh every morning with market-sourced ingredients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-pure-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-pure-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-tunisian-blue">
                  {dish.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-dark-slate">{dish.title}</h3>
                  <span className="text-tunisian-blue font-black text-lg">{dish.price}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-dark-slate font-bold text-lg mb-4 italic">"The freshest Mediterranean lunch in the market."</p>
          <div className="inline-block h-1 w-24 bg-tunisian-blue rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Menu
