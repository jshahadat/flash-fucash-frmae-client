import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';
import Review from './Review/Review';
import { FaStar } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetails = () => {
    const { _id, title, price, img, description, rating } = useLoaderData();


    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    console.log([reviews._id]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);





    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        // const value = event.target.value
        const name = user?.displayName;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL;
        const comment = form.comment.value;
        // const time = form.time.value

        // const newReview = { ...reviews };
        // newReview[name] = value
        // setReviews(newReview)

        const review = {
            name,
            serviceId: _id,
            email,
            img,
            comment,
            title,
            // time
        }

        fetch('http://localhost:5000/reviews', {
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
                    toast('Thanks for your review')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }




    return (
        <div>

            {/* Service Section */}
            <div className='conatner lg:ml-20 lg:mr-20 ml-5 mr-5 mt-10'>
                <h1 className='text-5xl font-bold'>Cracerjack Service Details</h1>

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="rounded-xl lg:w-full lg:h-96" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-justify'>{description}</p>
                        <div className='flex '>
                            <p className='mr-24'>Price : {price}৳</p>
                            <p>Rating : {rating} </p>
                            <FaStar className='ml-1 mt-1'></FaStar>
                        </div>
                    </div>
                </div>
            </div>

            {/* REview Section */}
            <div>
                <div>
                    <h1 className='lg:ml-20 lg:mr-20 ml-5 mt-10 text-5xl font-bold'>Reviews</h1>
                </div>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20 lg:mr-20 mt-10'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>

                <div>
                    <form onSubmit={handleReview}>
                        <div>
                            {/* <div className=' pl-20 pr-24 pt-10'>
                                <input className="p-2 w-full  rounded-xl border" type="text" name="time"
                                    placeholder="Add Your Local time" />
                            </div> */}
                        </div>
                        <div className='pl-20 pr-24 pt-2'>
                            <textarea name="comment" className="textarea textarea-bordered h-24 w-full" placeholder="Your comment" required></textarea>
                        </div>
                        <div className='pl-20'>
                            <input className='btn' type="submit" value="Submit Your Review" />
                        </div>
                    </form>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default ServiceDetails;