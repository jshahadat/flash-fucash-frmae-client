import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review/Review';


const ServiceDetails = () => {
    const { title, price, img, description, rating } = useLoaderData();


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

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
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;