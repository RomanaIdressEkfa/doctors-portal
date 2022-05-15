import React from 'react';
import InfoCard from './InfoCard';
import logo from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
            <InfoCard color='bg-gradient-to-r from-secondary to-primary' cardText='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' img={logo}></InfoCard>
            <InfoCard color='bg-accent' cardText='Brooklyn, NY 10036, United States' cardTitle='Visit our location' img={marker}></InfoCard>
            <InfoCard color='bg-gradient-to-r from-secondary to-primary' cardText='+000 123 456789' cardTitle='Contact us now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;