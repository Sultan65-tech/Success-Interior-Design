import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Award, Check, ChevronLeft, ChevronRight, Clock3, Lightbulb, Ruler, ShieldCheck, Star } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import {TrustStrip} from "../components/TrustStrip.jsx"
import  {SelectionIntro}    from '../components/SelectionIntro.jsx'
import { SelectedField }  from '../components/SelectedField.jsx'
import Card from "../components/Card.jsx"
import  {BenefitCard } from '../components/BenefitCard'
import  {StatCard}  from '../components/StatCard'
import  { ProductModal }  from '../components/ProductModal'
import  { BookingModal }  from '../components/BookingModal'

import { fetchCategories, fetchTestimonials, fetchEstimate } from '../API.js'


export function Home({ openBooking, setSelectedProduct }) {
  const [category, setCategory] = useState('Kitchen')
  const [windows, setWindows] = useState(4)
  const [room, setRoom] = useState('Kitchen')
  const [style, setStyle] = useState('Roller')
  const [size, setSize] = useState('Medium')
  const [review, setReview] = useState(0)

  // Fetch collections
  const { data: categories = {}, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })

  // Fetch testimonials
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials
  })

  // Fetch estimate from TanStack Query (No frontend mathematical calculations)
  const { data: estimate, isLoading: isLoadingEstimate } = useQuery({
    queryKey: ['estimate', { room, style, windows, size }],
    queryFn: () => fetchEstimate({ room, style, windows, size })
  })

  const categoryKeys = Object.keys(categories)
  const activeCategoryList = categories[category] || []

  return (
    <main>
      <TrustStrip />

      <section id="categories" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SelectionIntro eyebrow="THE COLLECTION" title="Shades designed around how you live." text="Every treatment is measured, fabricated and installed to your exact window. Explore by room, then request a tailored quote." />
        
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categoryKeys.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition ${category === c ? 'border-[#c5a46d] bg-[#c5a46d] text-[#171817]' : 'border-white/10 bg-white/[.03] text-white/65 hover:border-white/20 hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>

        {isLoadingCategories ? (
          <div className="py-20 text-center text-white/40">Loading collection...</div>
        ) : (
          <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activeCategoryList.map((item, i) => (
              <Card
                key={item.title}
                item={item}
                i={i}
                onOpen={() => setSelectedProduct(item)}
                onQuote={() => openBooking({ service: 'Custom Design Consultation', notes: `Interested in ${item.title} — ${category}.` })}
              />
            ))}
          </motion.div>
        )}
      </section>

      <section id="calculator" className="border-y border-white/5 bg-[#171a19]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[.28em] text-[#c5a46d]">INSTANT ESTIMATE</p>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">Know the ballpark before we visit.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">Use the quick estimator to explore a realistic starting range. Your final quote is confirmed after precise measurement and fabric selection.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"><Ruler className="mr-2 inline h-4 w-4" />Precision measured</span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"><ShieldCheck className="mr-2 inline h-4 w-4" />5-year guarantee</span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#101211] p-6 shadow-2xl md:p-8">
            <div className="grid gap-6">
              <SelectedField label="Room type" value={room} onChange={setRoom} options={categoryKeys.length ? categoryKeys : ['Kitchen', 'Office', 'Living Room', 'Bedroom']} />
              <SelectedField label="Blind style" value={style} onChange={setStyle} options={['Roller', 'Venetian', 'Roman', 'Vertical', 'Motorized']} />
              <div>
                <div className="mb-3 flex justify-between text-sm"><span className="text-white/55">Estimated windows</span><b>{windows}</b></div>
                <input className="range" type="range" min="1" max="12" value={windows} onChange={(e) => setWindows(+e.target.value)} />
              </div>
              <div>
                <p className="mb-3 text-sm text-white/55">Window size</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Small', 'Medium', 'Large'].map((s) => (
                    <button key={s} onClick={() => setSize(s)} className={`rounded-xl border px-3 py-3 text-sm ${size === s ? 'border-[#c5a46d] bg-[#c5a46d]/10 text-[#e4c994]' : 'border-white/10 text-white/55'}`}>{s}</button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#c5a46d]/20 bg-[#c5a46d]/5 p-5">
                <p className="text-xs uppercase tracking-[.2em] text-[#c5a46d]">Estimated range</p>
                <p className="mt-2 font-display text-4xl">
                  {isLoadingEstimate ? (
                    <span className="text-sm text-white/40">Calculating query...</span>
                  ) : (
                    <>${estimate?.low?.toLocaleString()} <span className="text-white/30">–</span> ${estimate?.high?.toLocaleString()}</>
                  )}
                </p>
                <p className="mt-2 text-xs text-white/40">Indicative only · installation included</p>
              </div>

              <button
                onClick={() => openBooking({ notes: `Estimate: ${room}, ${style}, ${windows} windows, ${size} size. Range $${estimate?.low}–$${estimate?.high}.` })}
                className="gold-gradient flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold text-[#151615] transition hover:scale-[1.01]"
              >
                Book installation for this estimate <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <SelectionIntro eyebrow="THE APEX DIFFERENCE" title="Craftsmanship you can feel." text="We combine designer-level finish with the practical discipline of a specialist installation team." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <BenefitCard icon={<Ruler />} title="Laser precision" text="Exact measurements down to the millimetre." />
          <BenefitCard icon={<Clock3 />} title="Same-day quote" text="Clear pricing without the waiting game." />
          <BenefitCard icon={<Award />} title="5-year guarantee" text="Confidence backed by our workmanship promise." />
          <BenefitCard icon={<Lightbulb />} title="Smart integration" text="Motorized shades ready for modern homes." />
        </div>
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#171a19]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[380px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85" alt="Park Row Project" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/60" />
              <div className="absolute bottom-6 left-6 rounded-full bg-black/50 px-4 py-2 text-xs font-bold backdrop-blur">PROJECT 014 · PARK ROW</div>
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs font-bold tracking-[.25em] text-[#c5a46d]">PORTFOLIO NOTE</p>
              <h3 className="mt-4 font-display text-4xl">A quiet room with a smarter rhythm.</h3>
              <p className="mt-5 leading-8 text-white/55">A layered combination of blackout Roman shades and motorized sheer panels. Morning scenes open the sheers automatically; evening scenes close both layers for privacy.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 p-4"><b>2 layers</b><p className="mt-1 text-white/40">light control</p></div>
                <div className="rounded-xl border border-white/10 p-4"><b>4 scenes</b><p className="mt-1 text-white/40">automated</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#0d0f0f] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.28em] text-[#c5a46d]">BUILT AROUND DETAIL</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Beautiful at first glance. Better every day.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/50">Apex Blinds & Shades is a specialist installation studio focused on custom window treatments. We make the process simple: understand your room, measure precisely, recommend honestly, install cleanly.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <StatCard n="01" title="Measure" text="We assess light, privacy, recesses and how you use the room." />
            <StatCard n="02" title="Design" text="You choose from curated fabrics, finishes and control options." />
            <StatCard n="03" title="Install" text="Our fitters install cleanly, test every mechanism and walk you through it." />
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex items-end justify-between gap-5">
          <SelectionIntro eyebrow="CLIENT NOTES" title="The details our clients remember." text="Real-world feedback from recent installations." />
          <div className="hidden gap-2 md:flex">
            <button onClick={() => setReview(Math.max(0, review - 1))} className="rounded-full border border-white/10 p-3"><ChevronLeft /></button>
            <button onClick={() => setReview(Math.min(testimonials.length - 1, review + 1))} className="rounded-full border border-white/10 p-3"><ChevronRight /></button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} animate={{ opacity: 1 }} className={`rounded-3xl border p-7 ${i === review ? 'border-[#c5a46d]/40 bg-[#1a1c1b]' : 'border-white/8 bg-white/[.02]'}`}>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div><b>{t.name}</b><p className="text-xs text-white/35">{t.role}</p></div>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300"><Check className="mr-1 inline h-3 w-3" />Verified</span>
              </div>
              <div className="mt-6 flex gap-1 text-[#d7b66e]">
                {Array.from({ length: 5 }).map((_, x) => (<Star key={x} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-5 leading-7 text-white/60">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#c5a46d]/20 bg-[radial-gradient(circle_at_80%_20%,rgba(197,166,109,.15),transparent_35%),#171a19] p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.28em] text-[#c5a46d]">READY WHEN YOU ARE</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">Let's make your windows the best part of the room.</h2>
              <p className="mt-5 max-w-2xl text-white/50">Book a free in-home measurement and we'll bring samples, ideas and a clear next step.</p>
            </div>
            <button onClick={() => openBooking({})} className="gold-gradient inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-[#151615]">
              Book installation <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}