import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ facility }) => {
    const { _id, img, title, price, description } = facility;
    return (
        <div className='mx-auto'>
            <div className="card card-compact lg:w-80 w-96bg-base-100 shadow-xl">

                <PhotoProvider>
                    <PhotoView key={1} src={img}>
                        <figure><img src={img} alt="" className='h-52 w-full' /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price} ৳</p>
                    <p className='text-justify'>
                        {
                            description?.length > 100 ?
                                <>{description.slice(0, 100) + '....'} </>
                                :
                                description
                        }

                    </p>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${_id}`} >  <button className="btn btn-outline btn-primary">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;