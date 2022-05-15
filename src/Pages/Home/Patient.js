import React from 'react';
import logo from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Patients from './Patients';

const Patient = () => {
    const testimonial = [
        {
            _id: 1,
            img: people1,
            name: 'California',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates error quia aliquam fugit repellat. Incidunt reiciendis nobis ea quisquam harum?',
            title: 'Willon Hakim'
        },
        {
            _id: 2,
            img: people2,
            name: 'California',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates error quia aliquam fugit repellat. Incidunt reiciendis nobis ea quisquam harum?',
            title: 'Willon Hakim'
        },
        {
            _id: 3,
            img: people3,
            name: 'California',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates error quia aliquam fugit repellat. Incidunt reiciendis nobis ea quisquam harum?',
            title: 'Willon Hakim'
        }
    ]
    return (
        <div className='my-12'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary font-bold text-xl '>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={logo} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
                {
                    testimonial.map(Patient => <Patients key={Patient._id} Patient={Patient}></Patients>)
                }
            </div>
        </div>
    );
};

export default Patient;