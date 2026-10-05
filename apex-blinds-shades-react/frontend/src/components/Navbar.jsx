import React from 'react'
import { ArrowRight, ArrowUpRight, Award, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Crosshair, DoorOpen, Facebook, Home, Instagram, Lightbulb, Mail, MapPin, Menu, Minus, Phone, Plus, Ruler, ShieldCheck, Sparkles, Star, Sun, X, Zap } from 'lucide-react'


function Navbar({mobileOpen,setMobileOpen,openBooking}){
    const links=[['Home','#'],
    ['Blinds','#blinds'],
    // ['Portfolio','#portfolio'],
    // ['Calculator','#calculator'],
    ['About','#about'],
    ['Contact','#contact']];
    return (
    <header className="bg-white- fixed inset-x-0 top-0 z-50 border-b border-blue/100 bord  backdrop-blur-lg shadow-white-300 shadow-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
            <a href="#" className="flex items-center gap-3">
                <span className="grid h-50 w-50  place-items-center rounded-xl ">
                    <img src='../logo.png' className='w-40 h-40'/></span> </a>
            <nav className="hidden items-center gap-7 lg:flex">
                {links.map(([t,h])=><a key={t} href={h} className="text-lg text-[#000000] transition hover:text-[#ffffff]">{t}</a>)}</nav>
                <div className="hidden lg:block">
                    <button onClick={openBooking} className="bg-[#FFBD00] rounded-full px-5 py-2.5 text-sm font-bold text-[#151615] cursor-pointer">Book Installation</button>
                    </div>
                    <button className="lg:hidden" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
                    </div>
                    {mobileOpen&&<div className="border-t border-white/5 bg-[#111313] px-5 pb-5 lg:hidden">{links.map(([t,h])=><a onClick={()=>setMobileOpen(false)} key={t} href={h} className="block border-b border-white/5 py-4 text-white/70">{t}</a>)}<button onClick={()=>{setMobileOpen(false);openBooking()}} className="gold-gradient mt-4 w-full rounded-xl py-3 font-bold text-[#151615]">Book Installation</button>
                    </div>
                    }
                    </header>
    )
    }


export default Navbar