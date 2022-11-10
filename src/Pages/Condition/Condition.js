import React from 'react';
import { Link } from 'react-router-dom';

const Condition = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Please login to add a review</h1>
            <div className='flex justify-center mt-10'>
                <Link to='/login'><button className="btn btn-primary">Go to LogIn </button></Link>
            </div>
        </div>
    );
};

export default Condition;