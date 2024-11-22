import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Make sure you have this file properly styled
import { useAuth } from "../../context/user";

const HeaderTopbar = () => {
  const { authData } = useAuth();
  console.log(authData);

  return (
    <div className="topbar">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Contact Info Section */}
          <div className="col-md-6 col-sm-12">
            <div className="contact-intro">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <i className="fi flaticon-call"></i>+910123456789
                </li>
                <li className="list-inline-item">
                  <i className="fi flaticon-envelope"></i> nasarna@gmail.com
                </li>
              </ul>
            </div>
          </div>

          {/* User Info / Login Section */}
          <div className="col-md-6 col-sm-12">
            <div className="contact-info text-end">
              <ul className="list-unstyled mb-0">
                {authData && authData?.token ? (
                  <li className="d-flex align-items-center justify-content-end">
                
                     <i className="fi flaticon-user"></i>
                      {/* {authData?.user?.name.charAt(0).toUpperCase()} */}
           
                    <p className="ms-2 mb-0 pl-2">
                      {authData?.user?.name.charAt(0).toUpperCase() +
                        authData.user.name.slice(1)}
                    </p>

                  <p>
                    <Link className="theme-ctn ms-2" to="/donate">
                      Donate Now
                    </Link>
                    </p>
                  </li>
                ) : (
                  <li className="mt-3">
                    <Link to="/login">Login</Link> <i className="bi bi-house"></i>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
