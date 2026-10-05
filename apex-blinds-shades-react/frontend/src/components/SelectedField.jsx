import React from 'react'
import { ChevronDown } from 'lucide-react'

export function SelectedField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/55">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 text-sm outline-none"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#171918]">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
      </div>
    </label>
  )
}