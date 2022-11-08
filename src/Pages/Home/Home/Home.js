import React from 'react';
import Banner from './Banner/Banner';
import Goals from './Goals/Goals';
import Service from './Services/Service';
import Supliment from './Supliment/Supliment';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Service></Service>
            <Goals></Goals>
            <Supliment></Supliment>
        </div>
    );
};

export default Home;