import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const Thankyou = () => {

  return (
    //<motion.div style={{ x: 0 }} animate={{ x: 100 }} />
    <div className="flex items-center justify-center h-screen ">
  <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 2 }}
>
    <div className="mx-7 p-4 py-7 rounded shadow-lg ring ring-green-900/50">
      <div className="flex flex-col items-center space-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold">Thank You !</h1>
        <p className='animate-pulse'>Email has been sent successfully </p>
        <Link
        href={'/'}
          className="inline-flex items-center px-4 py-2 text-white bg-green-900 border border-green-900  rounded-full cursor-pointer hover:bg-green-700 focus:outline-none focus:ring">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm font-medium">
            Home
          </span>
        </Link>
      </div>
    </div>
    </motion.div>
  </div>
  )
}

export default Thankyou