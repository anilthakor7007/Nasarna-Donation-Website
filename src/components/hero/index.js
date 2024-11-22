import React from 'react'
import './style.css'
import hero1 from '../../images/slider/shape.jpg'
import VideoModal from '../ModalVideo'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../../context/user"

const Hero = (props) => {
    const navigate = useNavigate();
    const { authData } = useAuth();
    console.log(authData);

    const handleClick = () => {{navigate("/login")}}

    return(
        <section className="hero hero-style-2">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 slide-caption">
                                <div className="slide-title">
                                    <h2>Let’s be Kind for <span>Children</span></h2>
                                </div>

                                <div className="btns">
                                
                              {/* Conditionally render Donate Now link if authData and authData.token are available */}
                              {authData && authData?.token ? (
                                // <Link to="/donate" className=''>
                                //   Donate Now
                                // </Link>
                                <a href="/donate" className="theme-btn" >Donate Now</a>
                              ) : (
                                    <button className='theme-btn' onClick={handleClick}>Donate Now</button>   
                              )}
                        
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                        
                    </div>
                </div>
            </div>
            <div className="hero-shape">
                <img src={hero1} alt=""/>
            </div>
        </section>
    )
}

export default Hero;