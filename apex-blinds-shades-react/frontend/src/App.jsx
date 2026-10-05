// import React, { useState } from 'react'
// import { AnimatePresence } from 'framer-motion'
import Home from "./pages/Home"
// import Navbar from './components/Navbar.jsx'

// // import Navbar from '../src/component/Navbar.jsx'
// import Footer from '../src/components/Footer.jsx'
// import  Home from './pages/Home.jsx'
// import { ProductModal } from './components/ProductModal.jsx'
// import { BookingModal } from './components/BookingModal.jsx'

export default function App() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [bookingOpen, setBookingOpen] = useState(false)
//   const [bookStep, setBookStep] = useState(1)
//   const [bookData, setBookData] = useState({
//     service: 'Free In-Home Measurement',
//     date: '',
//     time: 'Morning (9am–12pm)',
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     notes: ''
//   })

//   const openBooking = (prefill = {}) => {
//     setBookData((d) => ({ ...d, ...prefill }))
//     setBookStep(1)
//     setBookingOpen(true)
//   }

//   const resetBooking = () => {
//     setBookingOpen(false)
//     setBookStep(1)
//     setBookData({
//       service: 'Free In-Home Measurement',
//       date: '',
//       time: 'Morning (9am–12pm)',
//       name: '',
//       phone: '',
//       email: '',
//       address: '',
//       notes: ''
//     })
//   }

  return (
    // <div className="min-h-screen overflow-x-hidden bg-[#111313] text-[#f7f5ef]">
    //   <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} openBooking={() => openBooking({})} />

    // <Home openBooking={openBooking} setSelectedProduct={setSelectedProduct} />

    //   <Footer />

    //   <AnimatePresence>
    //     {selectedProduct && (
    //       <ProductModal
    //         item={selectedProduct}
    //         close={() => setSelectedProduct(null)}
    //         quote={() => {
    //           const itemTitle = selectedProduct.title
    //           setSelectedProduct(null)
    //           openBooking({ service: 'Custom Design Consultation', notes: `Interested in ${itemTitle}.` })
    //         }}
    //       />
    //     )}
    //   </AnimatePresence>

    //   <AnimatePresence>
    //     {bookingOpen && (
    //       <BookingModal
    //         data={bookData}
    //         setData={setBookData}
    //         step={bookStep}
    //         setStep={setBookStep}
    //         close={resetBooking}
    //       />
    //     )}
    //   </AnimatePresence>
    // </div>
    <Home/>
  )
}