import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>What We Do?</span>
                            <h2>We Are In A Mission To Help The Helpless</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Clean Water</h2>
                                    <p>Every child deserves access to safe water and better health, a cause we deeply support.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Healthy Food</h2>
                                    <p>Every child deserves nutritious meals for a brighter, healthier future—join us in making a difference.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Pure Education</h2>
                                    <p>Every child deserves quality education to unlock their true potential—support the cause today.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Medical Facilities</h2>
                                    <p>Every child deserves access to essential healthcare for a healthier, happier future—help us make it happen.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;