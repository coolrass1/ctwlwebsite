import React from 'react'
import HeroAbout from '../components/HeroAbout'

const page = () => {
  return (
<section>
  <HeroAbout title="Our Fleet"/>
  <div className='md:grid-cols-2'>
 <main className=''>1</main>
 <aside className='hidden md:block'>2</aside>
 </div>
</section>
  )
}

export default page