import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useMediaQuery } from 'react-responsive'
import './Landing.css'
import DesktopBento from './DesktopBento'
import MobileBento from './MobileBento'

function Landing() {

    const isMobile = useMediaQuery({ maxWidth : 1024 })
    const isDesktop = useMediaQuery({ minWidth : 1025 })

    return (

        <>
            
            <Navbar />
            <section id='landing-root'>

                {/* Banner */}
                <section id="banner">

                    <section id='banner-upper'>

                        <img src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1744004776/odncmv8firwp9t05uldg.png" alt="" />
                        <img src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1744004947/eowdcc0tezrvcxvr8imf.png" alt="" />

                    </section>
                    <section id='banner-text'>

                        <p id='banner-logo'>CAPSULES</p>
                        <p id='banner-sub-text'>Effortless Medicine Management for You and Your Family</p>

                    </section>
                    <section id="banner-lower">

                        <img src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1744005001/k8tjizzzwykihx3edcey.png" alt="" />
                        <img src="https://res.cloudinary.com/dle6cdwdb/image/upload/v1744004668/wgsm4euw8q2ain8gkd2r.png" alt="" />

                    </section>

                </section>

                {/* Bento */}
                { isMobile && <MobileBento /> }
                { isDesktop && <DesktopBento /> }

                {/* Security */}
                <section id='security'>

                    <section id="security-upper">

                        <p id='security-description'>Stay organized, ensure safety, 
                            and collaborate effortlessly with your trusted members. 
                            Our platform makes medicine tracking simple, secure, and efficient.</p>
                        <div>

                            <h3>Ready to get started ?</h3>
                            <button>Get started for freee!</button>
                            <p>Need more details ? <span>Explore more features</span></p>

                        </div>

                    </section>
                    <section id="security-lower">

                        <div id="security-header">

                            <h3>Security & Compilance Assurance</h3>
                            <i className='bx bx-shield'/>

                        </div>
                        <p>Your data security is our top priority. We implement end-to-end encryption to protect sensitive 
                            medical information, ensuring that only authorized users have access. 
                            Our platform follows strict data privacy policies and, where applicable, 
                            complies with healthcare regulations to maintain the highest security standards.</p>
                        <div id="security-divs">

                            <div>

                                <h5>Secure & Encrypted Storage</h5>
                                <p>All medicine records are safely stored and protected</p>

                            </div>
                            <div>

                                <h5>Access Control</h5>
                                <p>Only trusted members can view or manage data</p>

                            </div>

                        </div>

                    </section>

                </section>

            </section>
            <Footer />

        </>

    )

}

export default Landing