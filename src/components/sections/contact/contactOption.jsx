import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-12">
            <SlideUp>
                <div className="contact-content-part">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <SlideUp delay={2}>
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <i> <RiMapPinLine size={20} /></i>
                                    </div>
                                    <h2>Based in:</h2>
                                    <p>Montevideo, Uruguay</p>
                                </div>
                            </SlideUp>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <SlideUp delay={3}>
                                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                                    <div className="contact-icon">
                                        <i> <RiPhoneLine size={20} /></i>
                                    </div>
                                    <h2>contact number:</h2>
                                    <p>+598 96467184</p>
                                </div>
                            </SlideUp>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <SlideUp delay={4}>
                                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                                    <div className="contact-icon">
                                        <i> <RiMailLine size={20} /></i>
                                    </div>
                                    <h2>Email:</h2>
                                    <p>juanpablolamas01@gmail.com</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption