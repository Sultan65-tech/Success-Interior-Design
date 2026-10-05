import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah & David Jenkins',
    role: 'Homeowners · Oakridge Estates',
    service: 'Motorized Roller Shades Installation',
    rating: 5,
    quote:
      'We bought Lutron motorized shades online and were nervous about mounting them onto our double-height windows. The installer arrived with laser levels, mounted 8 shades in a single afternoon, and paired everything to our Apple HomeKit before leaving. Absolutely zero mess left behind.',
    verified: 'Verified Home Installation',
    brand: 'Lutron Shades'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Facility Manager · Nexus Tech Hub',
    service: 'Commercial Solar Screen Mounting',
    rating: 5,
    quote:
      'Fitted 35 commercial solar screens across our entire 3rd-floor office space. They worked around our office hours without disrupting team meetings. Precision measurement ensured every shade lined up perfectly down to the millimeter.',
    verified: 'Verified Commercial Client',
    brand: 'Hunter Douglas'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Interior Designer · Studio Rostova',
    service: 'Custom Roman & Venetian Fitting',
    rating: 5,
    quote:
      'I recommend this team to all my interior design clients. Custom window treatments require exact bracket placement, and these installers never miss. They handle delicate linen Roman shades with white gloves and total precision.',
    verified: 'Partner Designer',
    brand: 'The Shade Store'
  }
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  setInterval(handleNext,5000)

  const active = testimonials[activeIndex]

  return (
    <section className="bg-[#EAEAEA] py-24 px-6 text-[#031853] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-[#FFBD00] text-[#031853] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Verified Client Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#031853] tracking-tight">
              Flawless Fitting. Real Results.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-2xl border border-[#031853]/20 bg-white flex items-center justify-center text-[#031853] hover:bg-[#031853] hover:text-white transition duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-2xl border border-[#031853]/20 bg-white flex items-center justify-center text-[#031853] hover:bg-[#031853] hover:text-white transition duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
          <Quote className="absolute -top-4 -right-4 h-36 w-36 text-[#FFBD00]/15 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Quote & Rating */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6 text-[#FFBD00]">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-[#031853] bg-[#FFBD00]/20 px-2.5 py-1 rounded-md">
                      5.0 Rating
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-lg sm:text-2xl font-medium text-[#031853] leading-relaxed italic mb-8">
                    "{active.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div>
                    <h4 className="font-extrabold text-xl text-[#031853]">{active.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{active.role}</p>
                  </div>

                  <div className="flex items-center gap-2 bg-[#031853]/5 border border-[#031853]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#031853]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{active.verified}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Service Metadata Box */}
              <div className="lg:col-span-4 bg-[#031853] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFBD00]">
                    Project Overview
                  </span>
                  <h5 className="mt-2 text-lg font-bold text-white">
                    {active.service}
                  </h5>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-100/60">Brand Fitted:</span>
                    <span className="font-bold text-[#FFBD00]">{active.brand}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-100/60">Quality Guarantee:</span>
                    <span className="font-bold text-white">Laser-Fit Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#031853]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials