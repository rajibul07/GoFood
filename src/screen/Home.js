import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Temp from '../components/Temp'
import Carousel from '../components/Carousel'


export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <Carousel></Carousel>
      </div>
      <div>
        <Temp></Temp>
      </div>
      <div><Footer></Footer></div>

    </div>
  )
}
