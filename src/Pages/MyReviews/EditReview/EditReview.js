import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditReview = () => {
    const signleReview = useLoaderData();


    const { user } = useContext(AuthContext);


    const [rev, setRev] = useState(signleReview)



    const handleEditReview = event => {


        event.preventDefault();






        const form = event.target;
        // const value = event.target.value
        const name = user?.displayName;
        const email = user?.email || 'unregistered';
        const img = user?.photoURL;
        const comment = form.comment.value;

        // const newReview = { ...reviews };
        // newReview[name] = value
        // setReviews(newReview)

        const review = {
            name,
            email,
            img,
            comment,
        }

        fetch(`http://localhost:5000/editReview/${signleReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('user updated')
                    console.log(data);
                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
            <h1>{signleReview.comment}</h1>

            <form onSubmit={handleEditReview}>
                <div className='pl-20 pr-24 pt-10'>
                    <textarea name="comment" defaultValue={signleReview.comment} className="textarea textarea-bordered h-24 w-full" placeholder="Your comment" required></textarea>
                </div>
                <div className='pl-20'>
                    <input className='btn' type="submit" value="Edit Your Review" />
                </div>
            </form>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default EditReview;