import React from 'react';


const Review = ({ review }) => {
    const { name, comment, img, title } = review;

    return (
        <div>

            <div className="card w-80 bg-base-100 shadow-xl">

                <h3 className='ml-5 mt-5 text-lg font-bold'>Service Name: {title}</h3>
                <h4 className='pb-5 pl-5'>{comment}</h4>

                <div className='flex justify-between ml-5 mr-5'>

                    <div className="card-actions justify-start">
                        <img src={img} alt="" className='w-14 h-14 rounded-full' />
                    </div>
                    <div>
                        <h2 className='mt-4'>Reviewer: {name}</h2>
                    </div>
                </div>





            </div>

        </div >
    );
};

export default Review;