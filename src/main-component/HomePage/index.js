import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <Mission/>
            <About/>
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;