import React from 'react';

const Patients = ({ Patient }) => {
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <p>{Patient.des}</p>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Patient.img} />
                        </div>
                        <div className='ml-5 justify-center items-center'>
                            <h2 className="card-title text-primary">{Patient.title}</h2>
                            <h1 className="">{Patient.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;