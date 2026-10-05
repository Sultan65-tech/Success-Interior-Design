import React from 'react'
import { motion } from 'framer-motion'


const logos = [
    {name:"repo",src:"/public/ikea-svgrepo-com.svg"},
    {name:"Dougas",src:"/public/Hunter_Douglas_wordmark.png"},
    {name:"levolor",src:"/public/image.svg"},
    {name:"lutron",src:"/public/lutron-com-wordmark.svg"},
    {name:"lutron",src:"/public/lutron-com-wordmark.svg"}
]

// Duplicate Array
const duplicatelogo = [...logos,...logos,...logos,...logos]

const Brands = () => {
  return (
    <>
    {/* <div className="flex justify-around">
        {
            duplicatelogo.map((logo,index)=>{
                return(
                <img src={logo.src} className='w-40 h-auto' alt="" />
                )
            })
        }
    </div> */}
      {/* Left & Right gradient fade masks for high-end polish */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#031853] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#031853] to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity
          }}
        >
          {duplicatelogo.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="w-28 sm:w-36 h-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition duration-300 mt-20"
            />
          ))}
        </motion.div>
        </div>
    </>
  )
}

export default Brands