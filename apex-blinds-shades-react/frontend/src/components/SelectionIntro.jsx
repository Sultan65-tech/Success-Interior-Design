import React from 'react'

export function SelectionIntro({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[.28em] text-[#c5a46d]">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">{title}</h2>
      {text && <p className="mt-5 max-w-2xl leading-7 text-white/50">{text}</p>}
    </div>
  )
}