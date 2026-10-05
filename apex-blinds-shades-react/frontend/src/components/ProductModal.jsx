import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'

export function ProductModal({ item, close, quote }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem] border border-white/10 bg-[#171918] shadow-2xl"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
            <button onClick={close} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 backdrop-blur">
              <X />
            </button>
          </div>
          <div className="p-7 md:p-10">
            <span className="text-xs font-bold tracking-[.2em] text-[#c5a46d]">DETAILS · {item.price}</span>
            <h2 className="mt-3 font-display text-4xl">{item.title}</h2>
            <p className="mt-4 leading-7 text-white/50">{item.desc} Designed and finished to suit your window dimensions, hardware and room conditions.</p>
            <div className="mt-7 space-y-3">
              {item.tags.map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-white/60">
                  <Check className="h-4 w-4 text-[#c5a46d]" />
                  {t}
                </div>
              ))}
            </div>
            <button onClick={quote} className="gold-gradient mt-9 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold text-[#151615]">
              Request a tailored quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}