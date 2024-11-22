import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CasePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <VedioCta/>
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
