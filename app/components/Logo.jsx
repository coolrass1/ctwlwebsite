'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
    <Image
      src="/images/logo.png"
      width={300}
      height={300}
      alt="logo"
      // width={300}
      // height={200}
      // quality={70}
      // alt="logo "
    />
  </Link>
  )
}

export default Logo