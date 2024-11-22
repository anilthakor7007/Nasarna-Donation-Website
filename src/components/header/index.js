import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";
import MobileMenu from "../../components/MobileMenu";
import "./style.css";
import { FaHome, FaInfoCircle, FaHandsHelping, FaPhoneAlt, FaUser } from 'react-icons/fa'; // Importing relevant icons

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="middle-header header-style-3">
      <HeaderTopbar />
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-4">
              <div className="logo">
                <Link to="/home" title="">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 d-lg-block d-none">
              <nav>
                <ul>
                  <li>
                    <Link className="active" to="/home" title="">
                      <FaHome className="mr-2" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" title="">
                      <FaInfoCircle className="mr-2" /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/case" title="">
                      <FaHandsHelping className="mr-2" /> Causes
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" title="">
                      <FaPhoneAlt className="mr-2" /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/user" title="">
                      <FaUser className="mr-2" /> Your Details
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <MobileMenu />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
