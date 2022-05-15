import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import ServiceHead from './ServiceHead';
import Card from './Card';
import Appoinment from './Appoinment';
import Patient from './Patient';
import Footer from '../Shared/Footer';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceHead></ServiceHead>
            <Service></Service>
            <Card></Card>
            <br /><br />
            <Appoinment></Appoinment>
            <Patient></Patient>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;