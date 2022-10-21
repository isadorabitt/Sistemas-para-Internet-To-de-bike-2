import React from 'react'
import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import {BikesSection} from "../components/BikesSection";


export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <BikesSection />
    </>
  )
}
