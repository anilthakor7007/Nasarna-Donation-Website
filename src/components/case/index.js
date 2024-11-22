import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/user";


import cs1 from "./img/img-1";
// import cs2 from "../../images/case/img-2.png";
// import cs3 from "../../images/case/img-3.png";

import "./style.css";
import axios from "axios";

const CaseSlide = () => {
  const { authData } = useAuth();
  console.log(authData);
  
  const [causeData, setCauseData] = useState([]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const calculateProgress = (raised, goal) => {
    return ((raised / goal) * 100).toFixed(1);
  };

  const getCauseData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5005/api/causes");

      const formattedData = data
        .filter((causeItem) => !causeItem.isDelete)
        .map((causeItem) => ({
          ...causeItem,
          raisedFormatted: formatCurrency(causeItem.raised),
          goalFormatted: formatCurrency(causeItem.goal),
          progressPercentage: calculateProgress(
            causeItem.raised,
            causeItem.goal
          ),
        }));

      setCauseData(formattedData);
      console.log(formattedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getCauseData();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    margin: 10,
    loop: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="wpo-case-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Our Causes</span>
              <h2>Popular Causes What You Should Know</h2>
            </div>
          </div>
        </div>
        <div className="wpo-case-wrap">
          <div className="wpo-case-slider">
            <Slider {...settings}>
              {causeData.map((causeItem, index) => (
                <div key={index} className="wpo-case-single">
                  <div className="wpo-case-item">
                    <div className="wpo-case-img">
                      <img src={cs1} alt="" />
                    </div>
                    <div className="wpo-case-content">
                      <div className="wpo-case-text-top">
                        <h2>{causeItem.name}</h2>
                        <div className="progress-section">
                          <div className="process">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${causeItem.progressPercentage}%`,
                                }}
                              >
                                <div className="progress-value">
                                  <span>{causeItem.progressPercentage}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <span>Raised:</span> {causeItem.raisedFormatted}
                          </li>
                          <li>
                            <span>Goal:</span> {causeItem.goalFormatted}
                          </li>
                        </ul>
                      </div>
                      <div className="case-btn">
                        <ul>
                          <li>
                            <Link onClick={ClickHandler} to="/">
                              Learn More
                            </Link>
                          </li>
                          <li>
                            <div>
                              {/* Conditionally render Donate Now link if authData and authData.token are available */}
                              {authData && authData?.token ? (
                                <Link onClick={ClickHandler} to="/donate">
                                  Donate Now
                                </Link>
                              ) : (
                                <p className="text-center pt-3">Login to donate.</p> // Show a message if the user isn't logged in
                              )}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSlide;
