import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import DonatePage from '../DonatePage'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import ForgotPassword from '../ForgotPassword'
import User from '../../components/user';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='case' element={<CasePage />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default AllRoute;
