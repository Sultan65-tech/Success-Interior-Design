import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Background Video */}
      <video
        src="../vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* 2. Dark Overlay (Ensures white/gold text stays crisp and readable) */}
      <div className="absolute inset-0 bg-black/0 bg-gradient-to-t from-[#031853]/80 via-black/40 to-black/60 top-20" />

      {/* 3. Text & Content Layer (Positioned on top of video) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Badge Tagline */}
        <span className="inline-block bg-[#FFBD00] text-[#031853] text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase shadow-lg">
          ✨ Custom Fit & Smart Motorization Guarantee
        </span>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
          Transform Your Space With <span className="text-[#FFBD00]">Precision-Fitted Blinds</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow">
          Elevate your living room, office, or kitchen with luxury custom window blinds. Measured, crafted, and installed by certified local specialists.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#FFBD00] text-[#031853] hover:bg-yellow-400 font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
            Book Free Consultation
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer">
            Explore Blind Styles
          </button>   
        </div>
      </div>
    </section>
  )
}

export default Hero