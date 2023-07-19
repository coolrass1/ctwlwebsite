import FleetSidebar from '@/app/components/FleetSidebar'
import HeroAbout from '@/app/components/HeroAbout'
import MercedesSitem from '@/app/components/MercedesSitem'
import React from 'react'

const page = () => {
  return (
    <section>
    <HeroAbout title="Mercedes S Class" />
    <main className="md:grid md:grid-cols-3 md:gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <aside className="md:col-span-2"><MercedesSitem/></aside>
      <aside className="md:col-span-1">
        <FleetSidebar />
      </aside>
    </main>
  </section>
  )
}

export default page