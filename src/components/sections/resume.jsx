'use client'
import React, { useState } from 'react'
import { RiBookLine, RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2024 - Present'} title={'Senior Product Designer'} institution={'Geekhunter (US & Brazil)'} />
                                    <Card year={'2023 - 2024'} title={'Senior UX/UI Designer'} institution={'Howdy.com (US)'} />
                                    <Card year={'2022 - 2023'} title={'Senior Visual Designer'} institution={'DDB (Uruguay)'} />

                                    {showMore && (
                                        <>
                                            <Card year={'2021 - 2022'} title={'Senior Digital Designer'} institution={'N3xo (Uruguay)'} />
                                            <Card year={'2020 - 2021'} title={'Social Media Designer'} institution={'Verne (Uruguay)'} />
                                            <Card year={'2016 - 2019'} title={'Content Creator'} institution={'VIX (US)'} />
                                        </>
                                    )}
                                </div>
                                <div className="text-center mt-4">
                                    <button
                                        className="theme-btn-secondary"
                                        onClick={() => setShowMore(!showMore)}
                                    >
                                        {showMore ? 'Show Less' : 'Show More'}
                                        <i>{showMore ? <RiArrowUpSLine size={16} /> : <RiArrowDownSLine size={16} />}</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2010 - 2020'} title={'Architecture Degree'} institution={'FADU — Universidad de la República (Udelar)'} />
                                    <Card year={'2021'} title={'UX/UI Designer'} institution={'Coderhouse'} />
                                    <Card year={'2022'} title={'Web Developer'} institution={'Coderhouse'} />
                                    <Card year={'2025'} title={'JavaScript Developer'} institution={'Coderhouse'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}