import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';
import Review from './Review/Review';


const ServiceDetails = () => {
    const { _id, title, price, img, description, rating } = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>

            {/* Service Section */}
            <div>
                <h1>Cracerjack Service</h1>

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <p>{price}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>

            {/* REview Section */}
            <div>
                <Review></Review>
            </div>

        </div>
    );
};

export default ServiceDetails;