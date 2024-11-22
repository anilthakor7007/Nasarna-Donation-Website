import React from 'react'
import abimg from '../../images/about3.png'
import VideoModal from '../ModalVideo'
import './style.css'
import {useAuth} from "../../context/user"

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
     const { authData } = useAuth();
     console.log(authData);
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>What We Do?</span>
                                <h2>We Are In A Mission To Help The Helpless</h2>
                            </div>
                            <p>Countless children and families lack access to basic needs like clean water, nutritious food, education, and healthcare. Together, we can bring hope, change lives, and create a brighter future for those in need. Join us in making a difference today.</p>
                            <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p>
                            <div className="btns">
                            {authData && authData?.token ? (
                            
                                <a href="/donate" className="theme-btn" >Donate Now</a>
                              ) : (
                                <a href="/login" className="theme-btn" >Donate Now</a>
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
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;