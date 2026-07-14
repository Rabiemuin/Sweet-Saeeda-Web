import React from 'react'
import { Utensils, MapPin } from 'lucide-react'

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:hidden">
      <div className="bg-deep-sea rounded-2xl shadow-2xl flex items-center p-2 border border-white/10 backdrop-blur-md">
        <a href="#menu" className="flex-1 flex items-center justify-center space-x-2 py-3 text-white font-bold border-r border-white/10">
          <Utensils size={18} className="text-med-blue" />
          <span>View Menu</span>
        </a>
        <a href="#location" className="flex-1 flex items-center justify-center space-x-2 py-3 text-white font-bold">
          <MapPin size={18} className="text-golden-sand" />
          <span>Find Us</span>
        </a>
      </div>
    </div>
  )
}

export default MobileCTA
