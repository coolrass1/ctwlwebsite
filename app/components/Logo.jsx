import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
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
  </div>
  )
}

export default Logo