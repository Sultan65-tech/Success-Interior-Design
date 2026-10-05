import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Card from "../components/Card"
import { Data } from '../Data'


const Home = () => {
  return (
<>
<Navbar/>
<Hero/>
<div className="products">
  <h1 className='text-[40px] font-extrabold text-center py-20'>Get your Amazing window blind Installed</h1>
   
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
     {
    Data.map((value)=>{
      return(
    <Card item={value}/>
      )
    })
   }
</div>
</div>
</>
)
}

export default Home