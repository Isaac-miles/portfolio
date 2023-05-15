import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Hero from './component/Hero'
import MenuBar from './component/utils/menuBar'
import AboutMe from './component/About'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='snap-y snap-mandatory '>
      <main className='relative h-[200vh] '>
      <MenuBar/>

        <Hero/>
      </main>
   
    <section className='relative z-40 -mt-[100vh] min-h-screen pb-3 '>
      <AboutMe/>
      <Services/>
      <Portfolio/>
    </section>
    </div>
 

  )
}
