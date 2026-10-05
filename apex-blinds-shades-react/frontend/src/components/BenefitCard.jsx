import React from 'react'

export function BenefitCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[.02] p-6">
      <div className="mb-7 grid h-11 w-11 place-items-center rounded-2xl bg-[#c5a46d]/10 text-[#d7b66e]">
        {React.cloneElement(icon, { className: 'h-5 w-5' })}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/40">{text}</p>
    </div>
  )
}