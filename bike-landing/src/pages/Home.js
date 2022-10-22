import React from 'react'
import {Hero} from '../components/Hero'
import {Header} from '../components/Header'
import {BikesSection} from "../components/BikesSection";
import { Pricing } from "../components/Pricing"

export const Home = () => {
    return (
        <>
            <Header/>
            <Hero />
            <BikesSection />
            <Pricing />
        </>
    )
}
