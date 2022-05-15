import React from 'react';
import logo from '../../assets/images/treatment.png'

const Card = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-20 mx-auto w-5/6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <figure><img src={logo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary font-bold uppercase bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
            </div>

        </div>
    );
};

export default Card;