import React from 'react'
import { Star } from 'lucide-react'
const FloatingBadge = () => {
  return (
        <div className="fixed bottom-24 right-4 z-40 block transform rotate-12 hover:rotate-0 transition-transform duration-500">      <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-med-blue flex flex-col items-center text-center max-w-[120px]">
        <div className="flex text-yellow-500 mb-1">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
        </div>
        <p className="text-[10px] font-black uppercase tracking-tighter text-dark-navy leading-none mb-1">Leeds' Ultimate</p>
        <p className="text-sm font-black text-med-blue leading-none uppercase">Hidden Gem</p>
      </div>
    </div>
  )
}
export default FloatingBadge
