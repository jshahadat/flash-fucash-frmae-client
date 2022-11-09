import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../Sheared/ServiceCard/ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className='mt-10 container mx-auto '>
            <div className='pt-10 pb-10 pl-20 text-5xl font-bold'>
                <h1>Our Crackerjack Services</h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 mr-20'>
                {
                    service.map(facility => <ServiceCard
                        key={facility._id}
                        facility={facility}
                    ></ServiceCard>)
                }
            </div>
            <div className='container pl-24 mt-10 mb-10'>
                <Link to='/services'><button className="btn btn-primary text-2xl">See All</button></Link>

            </div>

        </div>
    );
};

export default Service;