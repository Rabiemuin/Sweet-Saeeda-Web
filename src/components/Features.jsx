import React from 'react'
import { CheckCircle2, Clock, Leaf, Users } from 'lucide-react'

const features = [
  {
    icon: <Clock className="w-8 h-8 text-tunisian-blue" />,
    title: "Fresh Everyday",
    description: "We bake our bread and prep our ingredients every single morning before the market opens."
  },
  {
    icon: <Leaf className="w-8 h-8 text-med-blue" />,
    title: "Mediterranean Ingredients",
    description: "Cold-pressed olive oil, fresh herbs, and traditional recipes from the heart of Sidi Bou Said."
  },
  {
    icon: <Users className="w-8 h-8 text-med-blue" />,
    title: "Warm Hospitality",
    description: "We treat every customer like a guest in our own Tunisian home. Friendly, breezy, and welcoming."
  }
]

const Features = () => {
  return (
    <section className="py-24 bg-dark-navy text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-2xl bg-white/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center text-tunisian-blue font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                <span>Market Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
