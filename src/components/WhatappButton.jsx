import React from 'react'
import whatapp from '../assets/whatapp.gif'

const WhatappButton = () => {
  return (
    <a
    href="https://wa.me/+94758988061" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed flex items-center justify-center p-4 transition-all duration-300 rounded-full shadow-2xl cursor-pointer bottom-5 right-5"
    >
        <img src={whatapp} className='w-12 h-12' alt="" />
    </a>
  )
}

export default WhatappButton