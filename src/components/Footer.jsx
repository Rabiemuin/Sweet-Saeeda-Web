import React from 'react'
import { Camera, MessageCircle, Utensils } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-deep-sea text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-med-blue p-1.5 rounded-lg">
                <Utensils className="text-white w-6 h-6" />
              </div>
              <span className="font-playfair text-3xl font-bold tracking-tight">
                Sweet <span className="text-med-blue">Saeeda</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Bringing the fresh Mediterranean soul of Tunisian street food to Leeds Kirkgate Market. Family-owned, freshly prepared, and always served with a smile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-med-blue transition-colors duration-300">
                <Camera size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-med-blue transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#menu" className="hover:text-white transition-colors">View Menu</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Find Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Our Location</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Unit 411, Row F, Hall 1981</li>
              <li>Kirkgate Market</li>
              <li>Leeds LS2 7JJ</li>
              <li>sweet.saeeda.ltd@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 Sweet Saeeda Tunisian Street Food. All rights reserved.</p>
          <div className="flex space-x-8 font-medium">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
