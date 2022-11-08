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
            <div>
                <h1>Our Crackerjack Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(facility => <ServiceCard
                        key={facility._id}
                        facility={facility}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <Link to='/services'><button>See All</button></Link>

            </div>

        </div>
    );
};

export default Service;