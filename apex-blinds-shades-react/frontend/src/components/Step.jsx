import React from 'react'
import { ArrowRight, ArrowUpRight, Award, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Crosshair, DoorOpen, Facebook, Home, Instagram, Lightbulb, Mail, MapPin, Menu, Minus, Phone, Plus, Ruler, ShieldCheck, Sparkles, Star, Sun, X, Zap } from 'lucide-react'

const Step = ({number,img,title,desc,Icon}) => {
  return (
    <>
    <div className="w-100 h-120 bg-white/20 rounded-md mt-5 mb-5">
        <div className="flex justify-between pl-5 pr-5 pt-5">
            
       <Icon className='rounded-4xl bg-[#FFBD00] p-2 font-bold' size={40}/>
   <p className='rounded-4xl bg-[#FFBD00] text-center px-2 py-1 text-xl font-bold'>{number}</p>
        </div>
        <img src={img} className='w-90 h-70  object-cover mx-5 mt-5 rounded-lg' alt="" />
           <h2 className='text-2xl pt-3 pl-2 text-white font-extrabold'>{title}</h2>
    <p className='pl-2 text-white/60 font-boldp-3'>{desc}</p>
    </div>

    </>
  )
}

export default Step