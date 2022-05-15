import React from 'react';


const ServiceCard = ({ logo, header, text }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{header}</h2>
                <p>{text}</p>
            </div>
        </div>

    );
};

export default ServiceCard;