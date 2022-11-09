import React from 'react';


const Review = ({ review }) => {
    const { name, comment, img } = review;

    return (
        <div>

            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-actions justify-start mt-5 pl-5">
                    <img src={img} alt="" className='w-28 h-28 rounded-full' />
                </div>
                <h2 className='ml-5 mt-5 text-lg font-bold'>{name}</h2>
                <h4 className='pb-5 pl-5'>{comment}</h4>


            </div>

        </div >
    );
};

export default Review;