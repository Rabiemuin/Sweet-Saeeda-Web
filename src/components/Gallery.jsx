import React from 'react'
import { motion } from 'framer-motion'
const images = [
  { url: "/assets/images/nine.jpeg" },
  { url: "/assets/images/two.jpeg" },
  { url: "/assets/images/three.jpeg" },
  { url: "/assets/images/four.jpeg" },
  { url: "/assets/images/five.jpeg" },
  { url: "/assets/images/six.jpeg" },
  { url: "/assets/images/eight.jpeg" },
  { url: "/assets/images/one.jpeg" },
  { url: "/assets/images/ten.jpeg" },
  { url: "/assets/images/york.jpeg" },
  { url: "/assets/images/cert.jpeg" },
  { url: "/assets/images/bbc.jpeg" },
]
const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-dark-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery Of <span className="text-med-blue">Flavors</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">A glimpse into our kitchen, our food, and the vibrant atmosphere of Leeds Kirkgate Market.</p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid overflow-hidden rounded-[32px] group relative"
            >
              <img
                src={img.url}
                alt="Gallery"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 pointer-events-none">
                <span className="text-white font-bold tracking-widest uppercase text-sm">Sweet Saeeda Fresh</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Gallery