import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from "../components/Card"
import Footer from "../components/Footer"
import { Data } from '../Data'
import Step from '../components/Step'

import { Ruler, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Measure & Consult',
    img:"../blind.jpeg",
    icon: Ruler,
    description:
      'We bring fabric samples directly to your home, assess your lighting needs, and take laser-precise window measurements for a guaranteed fit.',
    badge: 'Free In-Home Visit'
  },
  {
    number: '02',
    title: 'Custom Crafting',
    img:"../fixer.jpeg",
    icon: Sparkles,
    description:
      'Your window coverings are custom-tailored to your exact specifications using high-grade light-filtering, blackout, or thermal fabrics.',
    badge: 'Precision Made'
  },
  {
    number: '03',
    title: 'Expert Installation',
    img:"../room.jpeg",
    icon: ShieldCheck,
    description:
      'Our certified installation specialists handle complete mounting, motorization pairing, and smart home synchronization in just one visit.',
    badge: '5-Year Warranty'
  }
]


const Home = () => {
  return (
<>
<Navbar/>
<Hero/>
<div className="products">
  <h1 className='text-[40px] font-extrabold text-center py-20'>Get your Amazing window blind Installed</h1>
   
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
     {
    Data.map((value,id)=>{
      return(
    <Card key={id} item={value}/>
      )
    })
   }
</div>
<center>
<button className='px-15 py-3 bg-[#031853] rounded-sm text-white text-xl my-10  cursor-pointer'>See More</button>
</center>
</div>

<div className="bg-[#031853] h-180">
<h1 className='text-center text-white   sm:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md  pt-2'>How it Works</h1>
<p className='text-center text-white '>We handle every detail of your custom window blinds so you can enjoy effortless light control and privacy.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-7xl mx-auto ox-4 sm:px-6">
  {
    steps.map((step)=>{
      return(
        <Step key={step.number} number={step.number} img={step.img} title={step.title} desc={step.description} Icon={step.icon}/>
      )
    })
  }
</div>
<center><button className='bg-[#FFBD00] px-5 py-3 rounded-md font-bold cursor-pointer'>Book Our Service</button></center>
</div>
<Footer/>
</>
)
}

export default Home