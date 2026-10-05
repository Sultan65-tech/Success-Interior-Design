import React from 'react'
import { ArrowRight, ArrowUpRight, Award, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Crosshair, DoorOpen, Facebook, Home, Instagram, Lightbulb, Mail, MapPin, Menu, Minus, Phone, Plus, Ruler, ShieldCheck, Sparkles, Star, Sun, X, Zap } from 'lucide-react'

function Footer(){
    return(
         <footer className="border-t border-white/5 bg-[#0b0d0d]">
            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2"><div className="flex items-center gap-3">
                        <span className="grid  place-items-center  gold-gradient text-[#ffffff]">
                                               <img src='../logo.png' className='w-30 h-30'/></span>
                                                </div>
                                <p className="mt-5 max-w-md text-sm leading-7 text-white/35">Custom window treatments, precision measurement and professional installation for homes and workspaces.</p>
                                <div className="mt-6 flex gap-2">
                                    <a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/8">
                                    <Instagram className="h-4 w-4"/></a>
                                    <a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/8">
                                    <Facebook className="h-4 w-4"/>
                                    </a>
                                    </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">Contact</h4>
                                        <div className="mt-5 space-y-4 text-sm text-white/40">
                                        <p><Phone className="mr-2 inline h-4 w-4"/>+1 (555) 014-2846</p>
                                        <p><Mail className="mr-2 inline h-4 w-4"/>hello@apexblinds.example</p>
                                        <p><MapPin className="mr-2 inline h-4 w-4"/>Service area · Metro & surrounding suburbs</p>
                                        </div>
                                        </div>
                                        <div><h4 className="text-sm font-semibold">Hours</h4>
                                        <div className="mt-5 space-y-3 text-sm text-white/40"><p>Mon–Fri · 8:00–18:00</p>
                                        <p>Saturday · 9:00–14:00</p><p>Sunday · By appointment</p>
                                        </div></div></div>
                                        <div className="mt-12 border-t border-white/5 pt-6 text-xs text-white/25">© 2026 Apex Blinds & Shades. Demo website concept.</div>
                                        </div>
                                        </footer>
)
}


export default Footer