import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const Card = ({ item, i, onOpen, onQuote }) => {
  if (!item) return null
// ICon Props  
  return (  
    <motion.article 
      layout 
      initial={{ opacity: 0, y: 18 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: i * 0.05 }} 
      className="card-glow group overflow-hidden rounded-3xl border border-white/10 bg-[#031853] text-white shadow-xl transition duration-300 hover:border-white/25 hover:-translate-y-1"
    >
      <button onClick={onOpen} className="block w-full text-left focus:outline-none">
        <div className="relative aspect-[1.35] overflow-hidden">
          <img 
            src={item.img} 
            alt={item.title} 
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031853] via-transparent to-transparent opacity-80" />
          
          {/* Price Tag in Gold */}
          <span className="absolute left-4 top-4 rounded-full bg-[#FFBD00] text-[#031853] px-3 py-1.5 text-xs font-bold shadow-md">
            {item.price}
          </span>

          {/* Hover Arrow Badge */}
          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#FFBD00] text-[#031853] opacity-0 transition duration-300 group-hover:opacity-100 shadow-lg">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-100/70">{item.desc}</p>
          
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags?.map((t) => (
              <span 
                key={t} 
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-blue-100/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      {/* Quote Request CTA */}
      <div className="border-t border-white/10 p-4 bg-black/20">
        <button 
          onClick={onQuote} 
          className=" cursor-pointer flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-bold text-[#FFBD00] transition hover:bg-white/10"
        >
          <span>Book Installation</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  )
}

export default Card