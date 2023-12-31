import Animater from '@/app/components/Animater'
import Bmw7Item from '@/app/components/Bmw7Item'
import Bmw7iItem from '@/app/components/Bmw7iItem'
import FleetSidebar from '@/app/components/FleetSidebar'
import HeroAbout from '@/app/components/HeroAbout'
import React from 'react'

const page = () => {
  return (
    <Animater>
    <section>
    <HeroAbout title="BMW 7 Series" />
    <main className="md:grid md:grid-cols-3 md:gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <aside className="md:col-span-2"><Bmw7Item/></aside>
      <aside className="md:col-span-1">
        <FleetSidebar />
      </aside>
    </main>
  </section>
  </Animater>
  )
}

export default page