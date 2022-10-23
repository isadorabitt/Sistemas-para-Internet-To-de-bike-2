import React from 'react'
import {Hero} from '../components/Hero'
import {Header} from '../components/Header'
import {BikesSection} from "../components/BikesSection";
import { Pricing } from "../components/Pricing"
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <>
            <Header/>
            <Hero />
            <BikesSection />
            <Pricing />
            <Footer />
        </>
    )
}
