'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
const Animater = ({children}) => {
  return (
    <AnimatePresence mode="wait">
        
    <motion.div
      initial={{  y:200 }}
      animate={{ y:0 }}
      exit={{ y:0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
  )
}

export default Animater