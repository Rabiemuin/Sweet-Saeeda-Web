import React, { useState, useEffect } from 'react'
import { Menu, X, Utensils } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-pure-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-tunisian-blue p-1.5 rounded-lg shadow-lg shadow-tunisian-blue/20">
            <Utensils className="text-white w-6 h-6" />
          </div>
          <span className="font-playfair text-2xl font-bold tracking-tight text-dark-slate">
            Sweet <span className="text-tunisian-blue">Saeeda</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-dark-slate hover:text-med-blue transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#location" className="bg-tunisian-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-dark-navy transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Visit Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pure-white absolute top-full left-0 w-full border-t border-gray-100 shadow-xl py-6 px-4 space-y-4 flex flex-col animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-semibold text-dark-slate py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#location" className="bg-tunisian-blue text-white py-3 rounded-xl font-bold text-center shadow-lg" onClick={() => setIsOpen(false)}>
            Find Us Today
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
