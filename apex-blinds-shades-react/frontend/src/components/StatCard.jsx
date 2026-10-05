import React from 'react'

export function StatCard({ n, title, text }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#171918] p-7">
      <span className="text-xs text-[#c5a46d]">{n}</span>
      <h3 className="mt-10 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
    </div>
  )
}