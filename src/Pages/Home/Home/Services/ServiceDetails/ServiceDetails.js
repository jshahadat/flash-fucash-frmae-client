import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';
import Review from './Review/Review';


const ServiceDetails = () => {
    const { title, price, img, description, rating } = useLoaderData();
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, []);




    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL;
        const comment = form.comment.value;

        const review = {
            name,
            email,
            img,
            comment
        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }




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

                <div>
                    <form onSubmit={handleReview}>
                        <textarea name="comment" className="textarea textarea-bordered h-24 w-full" placeholder="Your comment" required></textarea>
                        <input className='btn' type="submit" value="Place Your Order" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;