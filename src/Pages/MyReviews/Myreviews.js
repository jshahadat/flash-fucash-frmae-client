import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard/MyReviewsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myreviews = () => {

    const { user } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    console.log(myReviews);




    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {

            fetch(`http://localhost:5000/reviews/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-20 ml-5 lg:mr-20 mr-5'>

                {
                    myReviews.map(myReview => <MyReviewsCard
                        key={myReview._id}
                        myReview={myReview}
                        handleDelete={handleDelete}
                    ></MyReviewsCard>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Myreviews;