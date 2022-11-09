import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';




const MyReviewsCard = ({ myReview, handleDelete }) => {




    const { _id, comment, service } = myReview;
    console.log(service);





    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-actions justify-start mt-5 pl-5">
                <img src='' alt="" className='w-28 h-28 rounded-full' />
            </div>

            <h4 className='pb-5 pl-5'>Public Review: {comment}</h4>
            <div className='flex justify-between pb-5 pl-5 pr-5'>

                <button>Delete</button>

                <Link to={`/editreview/${_id}`}>
                    <button className='className="btn btn-active btn-ghost text-3xl'><FaEdit></FaEdit></button></Link>
                <button button onClick={() => handleDelete(_id)} className='className="btn btn-active btn-ghost text-3xl'><AiFillDelete></AiFillDelete></button>
            </div>

        </div>
    );
};

export default MyReviewsCard;