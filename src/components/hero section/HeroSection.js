import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <div className="hero-img">
                <div className='hero-img-in-wrapper'>
                    <div className="hero-img-in">
                        <h1>
                            Earn at least 2000 EUR net with Primundus!
                        </h1>
                        <p>
                            Dear nurse, thank you for accepting our invitation. You have been selected based on
                            your experience and performance to receive the opportunity to participate in our new
                            product Primundus and earn up to 2000 EUR per month. <span className='only-on-mobile'>Vitanas24 wants to
                                continuously improve care for customers and nurse. That is why we have launched
                                this new service. With Primundus we want to build a premium service that brings
                                customers additional benefits as well as offering only the very best nurse. Therefore
                                we are looking for you! Benefit from higher pay with less workload. Be part of it!</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection
