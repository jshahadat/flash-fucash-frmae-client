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

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                myReviews.map(myReview => <MyReviewsCard
                    key={myReview._id}
                    myReview={myReview}

                ></MyReviewsCard>)
            }
        </div>
    );
};

export default Myreviews;