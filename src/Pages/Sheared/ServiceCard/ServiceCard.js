import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ facility }) => {
    const { _id, img, title, price, description } = facility;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price} ৳</p>
                    <p>
                        {
                            description.length > 100 ?
                                <>{description.slice(0, 100) + '....'} </>
                                :
                                description
                        }

                    </p>
                    <div className="card-actions justify-start">
                        <Link to={`/services/${_id}`} >  <button className="btn btn-primary">View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;