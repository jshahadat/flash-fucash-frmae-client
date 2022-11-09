import React, { useEffect, useState } from 'react';
import { FaBeer, FaEdit, FaaDelete } from 'react-icons/fa';
import { AiFillDelete, IconName } from "react-icons/ai";




const MyReviewsCard = ({ myReview }) => {
    const { comment, price } = myReview;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-actions justify-start mt-5 pl-5">
                <img src='' alt="" className='w-28 h-28 rounded-full' />
            </div>

            <h4 className='pb-5 pl-5'>Public Review: {comment}</h4>
            <div className='flex justify-between pb-5 pl-5 pr-5'>
                <button className='className="btn btn-active btn-ghost text-3xl'><FaEdit></FaEdit></button>
                <button className='className="btn btn-active btn-ghost text-3xl'><AiFillDelete></AiFillDelete></button>
            </div>

        </div>
    );
};

export default MyReviewsCard;