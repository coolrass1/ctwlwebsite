import React from 'react'
import HeroAbout from '../components/HeroAbout'
import FleetSidebar from '../components/FleetSidebar'

import ConciergeItem from '../components/ConciergeItem'
import Animater from '../components/Animater'

const page = () => {
  return (
    <Animater>
<section>
    <HeroAbout title="Concierge services" />
    <main className="md:grid md:grid-cols-3 md:gap-7 container md:max-w-screen-md md:mx-auto lg:max-w-screen-lg   xl:max-w-screen-xl 2xl:max-w-screen-xl">
      <aside className="md:col-span-2"><ConciergeItem/></aside>
      <aside className="md:col-span-1">
        <FleetSidebar />
      </aside>
    </main>
  </section>
  </Animater>
  )
}

export default page