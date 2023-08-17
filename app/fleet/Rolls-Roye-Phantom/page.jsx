import Animater from '@/app/components/Animater'
import FleetSidebar from '@/app/components/FleetSidebar'
import HeroAbout from '@/app/components/HeroAbout'
import MercedesVianoItem from '@/app/components/MercedesVianoItem'
import RollsRoyceItem from '@/app/components/RollsRoyceItem'
import React from 'react'

const page = () => {
  return (
    <Animater>
    <section>
      <HeroAbout title="Roll Royce Phantom" />
      <main className="md:grid md:grid-cols-3 md:gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
        <aside className="md:col-span-2"><RollsRoyceItem/></aside>
        <aside className="md:col-span-1">
          <FleetSidebar />
        </aside>
      </main>
    </section>
    </Animater>
  )
}

export default page