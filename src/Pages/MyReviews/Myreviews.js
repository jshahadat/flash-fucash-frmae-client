import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard/MyReviewsCard';

const Myreviews = () => {

    const { user } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    console.log(myReviews);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
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
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 mr-20'>

            {
                myReviews.map(myReview => <MyReviewsCard
                    key={myReview._id}
                    myReview={myReview}
                    handleDelete={handleDelete}

                ></MyReviewsCard>)
            }
        </div>
    );
};

export default Myreviews;