import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import { AiFillInfoCircle } from "react-icons/ai"
import { useNavigate } from 'react-router'
import { IconContext } from "react-icons/lib";
import nursecard from '../../assets/nurse-card.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Card1 from '../../assets/card-1.png'
// import Card2 from '../../assets/card-2.jpg'
// import Card3 from '../../assets/card-3.jpg'
import HeroSection from '../hero section/HeroSection'
const LandingPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    const navigate = useNavigate()
    return (

        <div className='main-main'>
            <HeroSection />
            <div className='steps-section'>
                <IconContext.Provider value={{ color: "#fff", size: 64 }}>
                    <div className="pricing__section">
                        <div className="pricing__wrapper">
                            <h1 style={{ textAlign: 'center', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }} className="pricing__heading">
                                You can apply with three simple steps
                            </h1>
                            <div className="pricing__container">
                                <div data-aos="zoom-out"
                                    className="pricing__container-card">
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <img src="https://primundus.de/wp-content/uploads/2021/05/nurse.jpg" alt='card1' />
                                        </div>
                                        <h3>Step 1</h3>

                                        <p style={{ textAlign: 'center', fontSize: '15px' }}>Upload a photo of yourself so that customers get a very
                                            good first impression</p>

                                    </div>
                                </div>
                                <div data-aos="zoom-out"
                                    className="pricing__container-card"
                                >
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <img src="https://primundus.de/wp-content/uploads/2021/05/writing.jpg" alt='Card2' />
                                        </div>
                                        <h3>Step 2</h3>

                                        <p style={{ textAlign: 'center', fontSize: '15px' }}>Indicate your preferences so we can find a
                                            foster home that matches your preference</p>

                                    </div>
                                </div>
                                <div data-aos="zoom-out"
                                    className="pricing__container-card"
                                >
                                    <div className="pricing__container-cardInfo">
                                        <div className="icon">
                                            <img src="https://primundus.de/wp-content/uploads/2021/05/person.jpg" alt='card3' />
                                        </div>
                                        <h3>Step 3</h3>

                                        <p style={{ textAlign: 'center', fontSize: '15px' }}>Check and complete your personal data so that
                                            we can best contact and refer you</p>

                                    </div>
                                </div>

                            </div>
                            {localStorage.getItem('number') !== null ?
                                <button onClick={() => navigate('form')} className='pricing-button'>Click To Register</button>
                                : ""
                            }

                        </div>
                    </div>
                </IconContext.Provider>
            </div>
            {/* <div className='landingpage-main'>
                <IconContext.Provider value={{ color: "black", size: 45 }}>
                    <div className='landingpage-container'>
                        <div className='first-item'>
                            <span>
                                Why Primundus
                            </span>
                            <h1>
                                For stress-free care
                            </h1>
                            <p>
                                The founders behind PRIMUNDUS have 8 years of experience in "24-hour care".
                                This experience from thousands of assignments by Polish nursing staff ultimately
                                led to the exclusive offer from PRIMUNDUS.
                                <p ></p>
                                "We know the usual challenges in the care industry and the associated complications
                                for customers who are already in a difficult situation. That is why we have designed
                                the PRIMUNDUS offer in order to strive for the greatest possible security for everyone
                                involved," said the founders the PRIMUNDUS model.
                                <p></p>

                                This exclusive "club" is based on the use of the best nurses that can be found on the market.
                                Since the offer is of course very limited, only a limited number of new customers can be accepted
                                per month in order to be able to ensure availability for all customers at all times.
                            </p>
                        </div>
                        <div className='second-item'>
                            <div className='outer-border ' data-aos="flip-up">
                                <div className='inner-border'>
                                    <h2 style={{ textAlign: 'center' }}> The best nurses</h2>
                                    <div style={{ display: 'flex', justifyContent: 'left', width: '100%', alignItems: 'center' }}>
                                        <p><FaGraduationCap style={{ marginRight: '20px' }} /></p>
                                        <div >
                                            <h3 style={{ margin: 0 }}>Good education</h3>
                                            <p style={{ margin: 0 }}>Nursing staff must have a good school-leaving certificate and, ideally, a university degree.</p>
                                        </div>

                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', width: '100%', marginTop: '40px', marginBottom: '40px' }}>
                                        <p><RiMessage3Fill style={{ marginRight: '20px' }} /> </p>
                                        <div >
                                            <h3 style={{ margin: 0 }}>Good language skills</h3>
                                            <p style={{ margin: 0 }}>We require good knowledge of the German language.</p>
                                        </div>

                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                        <p><GiSkills style={{ marginRight: '20px' }} /></p>
                                        <div >
                                            <h3 style={{ margin: 0 }}>Experience &amp; Qualification</h3>
                                            <p style={{ margin: 0 }}>Medical training or many years of nursing experience with good references is mandatory.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </IconContext.Provider>
            </div> */}

            <div className='dep-section'>
                <IconContext.Provider value={{ color: "black", size: 35 }}>
                    <div className='dep-section-main'>
                        <h1>Meeting the challenges with the right means</h1>
                        <p>We know from experience what challenges can arise when working with people under these sometimes very strenuous conditions.
                            You too may have had negative experiences with a 24-hour nurse in the past.
                            Or have you ever thought about hiring a Polish nurse but afraid of any of these issues?
                        </p>
                        <div className='dep-inner-main'>
                            <div className='dep-inner'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p><AiFillInfoCircle style={{ fontSize: '55px', marginRight: '10px' }} /> </p>
                                    <p>They shy away from employing an unknown foreign nurse</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p><AiFillInfoCircle style={{ marginRight: '10px' }} /> </p>
                                    <p>The personnel suggestion does not reach you in time</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p><AiFillInfoCircle style={{ marginRight: '10px' }} /> </p>
                                    <p>The personnel proposal does not meet your expectations or the agreement</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" style={{ borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='dep-inner2'>
                                <img src={nursecard} alt="nurse-card" />
                            </div>
                            <div className='dep-inner3'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p><AiFillInfoCircle style={{ marginRight: '10px' }} /></p>
                                    <p>The caregiver itself does not meet expectations - especially
                                        in the summer months and at Christmas,
                                        you will not receive any or only insufficiently qualified caregiver</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p><AiFillInfoCircle style={{ marginRight: '10px' }} /></p>
                                    <p>The personnel suggestion does not reach you in time</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default LandingPage