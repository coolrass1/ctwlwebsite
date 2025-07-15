import React from 'react'
import SwiperFleetItem from './SwiperFleetItem'
import CarsOptions from './CarsOptions'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import { bmw5cars } from './Data'

const Bmw5Item = () => {
  return (
    <main className="mx-6">
      <article>
        <div className="w-full py-7">
          <Image
            src="/images/cars/bmw5series/main.jpeg"
            alt="BMW 5 Series luxury sedan - exterior view"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            priority={true} // Important for LCP (Largest Contentful Paint)
            aria-labelledby="bmw5-heading"
          />
        </div>
        
        <header className="pt-7 flex flex-col gap-7">
          <h1 id="bmw5-heading" className="text-2xl font-bold text-gray-900">BMW 5 Series Overview</h1>
          <div className="w-24 h-[3px] bg-green-900" aria-hidden="true"></div>
          <p className="text-gray-700">
            Combining BMW's world-renowned engineering with an unprecedented
            commitment to comfort, the 5 Series has earned a reputation as the
            luxury car of choice. The BMW 5 Series is a line of executive luxury
            cars perfect for your professional and personal travel needs.
          </p>
          <p className="text-gray-700">
            Available with premium leather interior and optional long wheelbase,
            passengers enjoy ample leg room to sit back and relax while being
            chauffeured to their destination. The BMW 5 Series comes
            equipped with the following standard features:
          </p>
        </header>
        
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">BMW 5 Series Features</h2>
          <ul className="mt-12 list-none">
            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                Extended rear leg room
              </span>
            </li>

            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                Climate controlled air conditioning
              </span>
            </li>
            
            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                Electric rear reclining seats
              </span>
            </li>
            
            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                Heated rear seats
              </span>
            </li>
            
            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                On-Board Wi-Fi
              </span>
            </li>
            
            <li className="flex items-center gap-1 py-2">
              <div className="flex justify-center items-center text-green-900" aria-hidden="true">
                <FaArrowRight />
              </div>
              <span className="text-sm font-normal text-neutral-600">
                Smartphone rear chargers
              </span>
            </li>
          </ul>
        </section>
        
        <div className="px-2 mt-7">
          <SwiperFleetItem listcars={bmw5cars} />
          <CarsOptions />
        </div>
      </article>
    </main>
  )
}

export default Bmw5Item