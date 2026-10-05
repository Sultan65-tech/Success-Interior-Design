import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Check, DoorOpen, X } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { submitBookingRequest } from '../API'

export function BookingModal({ data, setData, step, setStep, close }) {
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }))
  const valid = step === 1 || step === 2 || (data.name && data.phone && data.address)

  const bookingMutation = useMutation({
    mutationFn: submitBookingRequest,
    onSuccess: () => {
      setStep(4)
    }
  })

  const handleContinue = () => {
    if (step === 3) {
      bookingMutation.mutate(data)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] grid place-items-center bg-black/80 p-4 backdrop-blur-md">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-h-[92vh] w-full max-w-xl overflow-auto rounded-[2rem] border border-white/10 bg-[#171918] p-6 shadow-2xl md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[#c5a46d]">BOOK A VISIT</p>
            <h2 className="mt-2 font-display text-3xl">{step === 4 ? "You're on the list." : "Let's plan your installation."}</h2>
          </div>
          <button onClick={close} className="rounded-full p-2 hover:bg-white/5"><X /></button>
        </div>

        {step < 4 && (
          <div className="mt-6 flex gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className={`h-1 flex-1 rounded-full ${n <= step ? 'bg-[#c5a46d]' : 'bg-white/10'}`} />
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 space-y-3">
            {['Free In-Home Measurement', 'Installation Only', 'Repair / Maintenance', 'Custom Design Consultation'].map((s) => (
              <button key={s} onClick={() => set('service', s)} className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left ${data.service === s ? 'border-[#c5a46d]/50 bg-[#c5a46d]/10' : 'border-white/8 bg-white/[.02]'}`}>
                <span>{s}</span>
                {data.service === s && <Check className="h-4 w-4 text-[#d7b66e]" />}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 space-y-5">
            <label className="block text-sm text-white/55">Preferred date
              <input type="date" value={data.date} onChange={(e) => set('date', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 text-white" />
            </label>
            <label className="block text-sm text-white/55">Preferred time slot
              <select value={data.time} onChange={(e) => set('time', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-[#171918] px-4 py-3.5">
                <option>Morning (9am–12pm)</option>
                <option>Afternoon (12pm–3pm)</option>
                <option>Late afternoon (3pm–6pm)</option>
              </select>
            </label>
            <div className="rounded-xl border border-white/8 bg-white/[.02] p-4 text-sm text-white/40">
              <CalendarDays className="mr-2 inline h-4 w-4" />We’ll confirm the exact appointment by phone after your request.
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-8 grid gap-4">
            <input placeholder="Full name" value={data.name} onChange={(e) => set('name', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none" />
            <input placeholder="Phone number" value={data.phone} onChange={(e) => set('phone', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none" />
            <input type="email" placeholder="Email address" value={data.email} onChange={(e) => set('email', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none" />
            <input placeholder="Installation address" value={data.address} onChange={(e) => set('address', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none" />
            <textarea placeholder="Notes / photo details (optional)" rows={3} value={data.notes} onChange={(e) => set('notes', e.target.value)} className="rounded-xl border border-white/10 bg-white/[.03] px-4 py-3.5 outline-none" />
            <div className="rounded-xl border border-dashed border-white/15 p-4 text-center text-sm text-white/35">
              <DoorOpen className="mx-auto mb-2 h-5 w-5" />Photo upload placeholder
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="py-12 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
              <Check className="h-9 w-9" />
            </motion.div>
            <p className="mt-6 text-white/45">Thanks, {data.name || 'there'}. Your consultation request has been received.</p>
            <p className="mt-3 font-mono text-sm text-[#d7b66e]">{bookingMutation.data?.referenceId || 'APX-CONFIRMED'}</p>
            <p className="mt-3 text-xs text-white/30">We’ll contact you to confirm the date and time.</p>
          </div>
        )}

        {step < 4 && (
          <div className="mt-8 flex gap-3">
            {step > 1 && <button onClick={() => setStep(step - 1)} className="rounded-xl border border-white/10 px-5 py-3">Back</button>}
            <button disabled={!valid || bookingMutation.isPending} onClick={handleContinue} className="gold-gradient ml-auto rounded-xl px-6 py-3 font-bold text-[#151615] disabled:cursor-not-allowed disabled:opacity-40">
              {bookingMutation.isPending ? 'Submitting...' : step === 3 ? 'Confirm request' : 'Continue'} <ArrowRight className="ml-1 inline h-4 w-4" />
            </button>
          </div>
        )}

        {step === 4 && <button onClick={close} className="mt-2 w-full rounded-xl border border-white/10 py-3">Done</button>}
      </motion.div>
    </motion.div>
  )
}