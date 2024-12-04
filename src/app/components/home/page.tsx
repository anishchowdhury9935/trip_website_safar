import React from 'react'
import TourDetailsSelector from "../others/innerComponents/TourDetailsSelector";
import TourCardCarousel from "../others/innerComponents/TourCardCarousel";
import AboutForHome from '../others/innerComponents/AboutForHome';
import './page.css';
export default function Home() {
    return (
        <div className='home-page-main-container'>
            <section className="home-page-main-hero-slider-img-container">
            </section>
            <div className="home-page-main-heroSection ">
                <section className="home-page-main-header">
                    {/* <h1>Explore the world with us</h1> */}
                    <TourDetailsSelector />
                </section>
            </div>
            <div className="container TourCardCarousel-container">
                <TourCardCarousel />
            </div>
            <div className="container TourCardCarousel-container">
                <AboutForHome />
            </div>
        </div>
    )
}
