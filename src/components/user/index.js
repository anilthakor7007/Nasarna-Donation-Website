import React, { useEffect } from "react";
import { useAuth } from "../../context/user";
import { Button, Card, CardHeader, CardBody, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import cs1 from "../../images/case/img-1.png";
import user from "../../img/user.jpg";
import "./style.css"
import Footer from '../../components/footer'
import Header from '../../components/header'


const User = () => {
  const { authData, logout, donarData, donarCausesData } = useAuth();
  const navigate = useNavigate();

  if (!authData.token) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h4 className="text-center mb-3">Please log in to view Your Details.</h4>
        <Link to="/login">
          <Button variant="success" size="lg">Please Log In</Button>
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      logout();
      navigate("/");  
    }
  };

  return (

    <div>
      <Header/>
      <h1 className="text-center py-5">Your Details</h1>
      <Container fluid className="mt-4 useBody">
        <Row>
          {/* Profile Card */}
          <Col xl="4" className="mb-4">
            <Card className="shadow-lg p-3 card-profile bg-light">
              <div className="text-center">
                <img alt="User" src={user} className="rounded-circle img-fluid shadow-lg mt-3 mb-3" style={{ width: "120px", height: "120px" }} />
                <h4 className="font-weight-bold mb-1">
                  {authData.user?.name.charAt(0).toUpperCase() + authData.user.name.slice(1)}
                </h4>
                <p className="text-muted">
                  {authData.user?.role && authData.user.role.charAt(0).toUpperCase() + authData.user.role.slice(1)} at Nasarna Helping Hand
                </p>
                <Button variant="outline-primary" onClick={handleLogout} className="mt-3">Logout</Button>
              </div>
            </Card>
          </Col>

          {/* Account Info Card */}
          <Col xl="8">
            <Card className="shadow-sm profile-card">
              <CardHeader className="bg-primary text-white">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0 account">My Account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h6 className="heading-small text-muted mb-4">Donor Information</h6>
                <Row className="mb-3">
                  <Col lg="6">
                    <p><strong>Full Name:</strong> {authData.user?.name.charAt(0).toUpperCase() + authData.user.name.slice(1)}</p>
                  </Col>
                  <Col lg="6">
                    <p><strong>Email ID:</strong> {authData.user?.email}</p>
                  </Col>
                </Row>

                <hr className="my-4" />

                <h6 className="heading-small text-muted mb-4">Contact Information</h6>
                <Row className="mb-2">
                  <Col md="12">
                    <p><strong>Address:</strong> {donarData?.address || "N/A"}</p>
                  </Col>
                  <Col lg="4">
                    <p><strong>City:</strong> {donarData?.city || "N/A"}</p>
                  </Col>
                  <Col lg="4">
                    <p><strong>Phone:</strong> {donarData?.phone || "N/A"}</p>
                  </Col>
                  <Col lg="4">
                    <p><strong>Pin Code:</strong> {donarData?.pincode || "N/A"}</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>

          </Col>
        </Row>

        {/* Donations Summary */}
        <Row className="mt-5">
          <Col>
            <div className="text-center mb-4">
              <h2>Total Donations: <span className="text-primary">&#8377;{donarCausesData?.totalDonation || 0}</span></h2>
            </div>
            <Row>
              {donarCausesData?.causes?.map((cause) => (
                <Col md="6" lg="3" key={cause.causeId} className="mb-4">
                  <Card className="shadow-lg h-100 p-3 card-custom">
                    <img src={cs1} alt="Cause" className="card-img-top rounded-top card-img-custom" />
                    <CardBody>
                      <h5 className="card-title font-weight-bold small-text">{cause.causeName}</h5>
                      <h6 className="text-muted small-text">Recent Donations:</h6>
                      <ul className="list-group list-group-flush">
                        {cause.donations.map((donation) => (
                          <li key={donation._id} className="list-group-item d-flex justify-content-between align-items-start small-text">
                            <div>
                              <p className="mb-1"><strong >Donor ID:</strong> {donation.donor}</p>
                              <p className="mb-1 textcolor"><strong >Amount:</strong> &#8377;{donation.amount}</p>
                              <p className="mb-0"><strong>Date:</strong> {new Date(donation.date).toLocaleString()}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

      </Container>
      <Footer/>
    </div>
  );
};

export default User;
