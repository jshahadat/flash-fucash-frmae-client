import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";




const MyReviewsCard = ({ myReview, handleDelete }) => {
    const { _id, comment } = myReview;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-actions justify-start mt-5 pl-5">
                <img src='' alt="" className='w-28 h-28 rounded-full' />
            </div>

            <h4 className='pb-5 pl-5'>Public Review: {comment}</h4>
            <div className='flex justify-between pb-5 pl-5 pr-5'>

                <button>Delete</button>
                <button className='className="btn btn-active btn-ghost text-3xl'><FaEdit></FaEdit></button>
                <button button onClick={() => handleDelete(_id)} className='className="btn btn-active btn-ghost text-3xl'><AiFillDelete></AiFillDelete></button>
            </div>

        </div>
    );
};

export default MyReviewsCard;