'use client'
import Image from 'next/image'
import React from 'react'

const GalleryItem = ({item}) => {
  return (
    <div className="cursor-pointer relative">
              <Image
                src={item?.gurl}
                alt="pic"
                width={370}
                height={370}
                style={{ objectFit: "cover" }}
              />
            </div>
  )
}

export default GalleryItem