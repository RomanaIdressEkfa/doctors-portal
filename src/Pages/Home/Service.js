import React from 'react';
import ServiceCard from './ServiceCard';
import pic1 from '../../assets/images/cavity.png'
import pic2 from '../../assets/images/fluoride.png'
import pic3 from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <ServiceCard header='Fluoride Treatment' text='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ' logo={pic1}>
            </ServiceCard>
            <ServiceCard header='Cavity Filling' text='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ' logo={pic2}>
            </ServiceCard>
            <ServiceCard header='Teeth Whitening' text=' Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' logo={pic3}>
            </ServiceCard>
        </div>
    );
};

export default Service;