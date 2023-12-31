import Animater from '@/app/components/Animater'
import FleetSidebar from '@/app/components/FleetSidebar'
import HeroAbout from '@/app/components/HeroAbout'
import MercedesEitem from '@/app/components/MercedesEitem'
import React from 'react'

const page = () => {
  return (
    <Animater>
<section>
      <HeroAbout title="Mercedes E Class" />
      <main className="md:grid md:grid-cols-3 md:gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
        <aside className="md:col-span-2"><MercedesEitem/></aside>
        <aside className="md:col-span-1">
          <FleetSidebar />
        </aside>
      </main>
    </section>
    </Animater>
  )
}

export default page