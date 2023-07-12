import Link from 'next/link'
import React from 'react'

const FleetHeader = () => {
  return (
<>
                <ul className={`hidden pr-36 z-30 text-black top-[230px]   flex-col gap-2 bg-neutral-100 shadow-2xl py-2`}>
                  <li className=' hover:bg-teal-500  py-1 pl-2 pr-28'>
                    <Link href="/" >BMW 7i Series </Link>
                  </li>
                  <li className=' hover:bg-teal-500 py-1 pl-2 pr-28'>
                    <Link href="/">BMW 7 Series </Link>
                  </li>
                  <li className=' hover:bg-teal-500  py-1 pl-2 pr-28'>
                    <Link href="/">Mercedes S Class </Link>
                  </li>
                  <li className=' hover:bg-teal-500  py-1 pl-2 pr-28'>
                    <Link href="/">Mercedes E Class </Link>
                  </li>
                  <li className=' hover:bg-teal-500 py-1 pl-2 pr-28'>
                    <Link href="/">BMW 5 Series </Link>
                  </li>
                  <li className=' hover:bg-teal-500  py-1 pl-2 pr-28'>
                    <Link href="/">Mercedes Viano </Link>
                  </li>
                  <li className=' hover:bg-teal-500  py-1 pl-2 pr-28'>
                    <Link href="/">Rolls Royce Phantom </Link>
                  </li>
                  <li className=' hover:bg-teal-500 py-1 pl-2 pr-28'>
                    <Link href="/">Coaches </Link>
                  </li>
                </ul></>
            
  )
}

export default FleetHeader