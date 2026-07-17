import React from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

const Location = () => {
  return (
    <section id="location" className="py-24 bg-pure-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-soft-white rounded-[60px] overflow-hidden shadow-2xl border border-gray-100 grid lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="p-12 md:p-20">
            <h4 className="text-tunisian-blue font-black uppercase tracking-widest text-sm mb-4">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-dark-slate">Find Us In <span className="text-med-blue">Leeds Kirkgate Market</span></h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="bg-pure-white p-4 rounded-2xl shadow-sm text-tunisian-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-slate mb-1">Our Location</h4>
                  <p className="text-gray-600">Unit 411, Row F, Hall 1981, Kirkgate Market, Leeds LS2 7JJ</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-pure-white p-4 rounded-2xl shadow-sm text-med-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-slate mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Monday – Saturday: 10:00 AM – 5:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-pure-white p-4 rounded-2xl shadow-sm text-tunisian-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-slate mb-1">Call Us</h4>
                  <a href="tel:+447527843447" className="text-gray-600 hover:text-tunisian-blue transition-colors">+44 7527 843447</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-pure-white p-4 rounded-2xl shadow-sm text-med-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-dark-slate mb-1">Follow Us</h4>
                  <a href="https://www.instagram.com/sweet_saeeda?igsh=OXpreTltZmk5YzY5" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-tunisian-blue transition-colors">@sweet_saeeda</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://maps.google.com/?q=Unit+411+Row+F+Hall+1981+Kirkgate+Market+Leeds+LS2+7JJ" target="_blank" rel="noopener noreferrer" className="bg-tunisian-blue text-white px-8 py-4 rounded-full font-extrabold flex items-center justify-center space-x-2 hover:bg-dark-navy transition-all">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
              <a href="tel:+447527843447" className="bg-pure-white text-dark-slate border-2 border-dark-slate/10 px-8 py-4 rounded-full font-extrabold hover:bg-dark-slate hover:text-white transition-all inline-block text-center">
                Call Now
              </a>
            </div>
          </div>

          {/* Map Side (Stylized Placeholder) */}
          <div className="relative bg-gray-200 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.350616143048!2d-1.5414846!3d53.7972041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c192931405b%3A0xc07a38a7c1b5a5b!2sLeeds%20Kirkgate%20Market!5e0!3m2!1sen!2suk!4v1718800000000!5m2!1sen!2suk" 
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay tag */}
            <div className="absolute top-8 right-8 bg-tunisian-blue text-white p-4 rounded-3xl shadow-2xl font-bold flex flex-col items-center">
              <span className="text-sm">WE ARE</span>
              <span className="text-2xl">HERE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
