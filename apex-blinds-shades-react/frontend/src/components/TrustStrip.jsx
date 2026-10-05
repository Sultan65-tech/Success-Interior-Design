import React from 'react'

export function TrustStrip() {
  return (
    <div className="border-y border-white/5 bg-[#151817]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/5 px-5 py-7 text-center sm:grid-cols-4 md:px-8">
        <div><b className="block text-lg">500+</b><span className="text-xs text-white/35">installations</span></div>
        <div><b className="block text-lg">5.0/5</b><span className="text-xs text-white/35">client rating</span></div>
        <div><b className="block text-lg">24h</b><span className="text-xs text-white/35">quote turnaround</span></div>
        <div><b className="block text-lg">5 yr</b><span className="text-xs text-white/35">guarantee</span></div>
      </div>
    </div>
  )
}