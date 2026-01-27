import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    A little about me
                                </h2>
                                <p>I’m a Product Designer based in Montevideo, Uruguay (GMT-3), with experience working with U.S. and international teams. I specialize in building B2B SaaS products, with a strong focus on product thinking, scalability, and real-world constraints.</p>
                                <p>My educational background in Architecture (FADU, Universidad de la República) shaped how I understand users, spaces, and complex systems — giving me a unique perspective on how digital products are experienced, used, and scaled over time.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Let's talk<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery