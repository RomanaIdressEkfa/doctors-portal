import React from 'react';
import logo from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <div style={
            {
                background: `url(${logo})`
            }
        } className='text-center'>
            <h1 className='text-primary'>Contact us</h1>
            <h1 className='text-3xl text-white'>Stay connected with us</h1>
            <div>
                <input type="text" placeholder="Email" class="input input-bordered input-info w-full max-w-xs mb-4" /><br />
                <input type="text" placeholder="Subject" class="input input-bordered input-info w-full max-w-xs mb-4" /><br />
                <textarea class="textarea textarea-info input-info w-full max-w-xs mb-4" placeholder="Bio"></textarea>

            </div>
            <PrimaryButton></PrimaryButton>
        </div>
    );
};

export default Contact;
