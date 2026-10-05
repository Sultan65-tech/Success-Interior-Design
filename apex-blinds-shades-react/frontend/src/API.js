import { mockCategories, mockTestimonials } from './Data'

export const fetchCategories = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockCategories), 300))
}

export const fetchTestimonials = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(mockTestimonials), 300))
}

// Replaces local mathematical calculation with an API request
export const fetchEstimate = async ({ room, style, windows, size }) => {
  // Replace this mock with your actual API endpoint:
  // const response = await fetch(`/api/estimate?room=${room}&style=${style}&windows=${windows}&size=${size}`)
  // return response.json()
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const roomBase = { Kitchen: 105, Office: 120, Bedroom: 135, 'Living Room': 155 }[room] || 110
      const styleAdd = { Roller: 0, Venetian: 20, Roman: 55, Vertical: 35, Motorized: 110 }[style] || 0
      const sizeMult = { Small: 0.8, Medium: 1, Large: 1.45 }[size] || 1
      
      const low = Math.round(windows * (roomBase + styleAdd) * sizeMult)
      const high = Math.round(low * 1.28)
      resolve({ low, high })
    }, 200)
  })
}

export const submitBookingRequest = async (bookingData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        referenceId: `APX-${Math.floor(100000 + Math.random() * 900000)}`
      })
    }, 500)
  })
}