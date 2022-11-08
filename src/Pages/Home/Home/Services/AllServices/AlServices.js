import React, { useEffect, useState } from 'react';
import ServiceCard from '../../../../Sheared/ServiceCard/ServiceCard';

const AlServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allServices.map(facility => <ServiceCard
                        key={facility._id}
                        facility={facility}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default AlServices;