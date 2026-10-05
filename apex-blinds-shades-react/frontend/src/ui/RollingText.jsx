import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const RollingText = ({ 
  words = ["Motorized Shades", "Custom Blinds", "Solar Screens", "Roman Blinds"], 
  interval = 2500 
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span className="inline-block relative overflow-hidden h-[1.25em] align-bottom text-[#FFBD00]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="block whitespace-nowrap font-extrabold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}