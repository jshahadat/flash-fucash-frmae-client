import React from 'react';
import Banner from './Banner/Banner';
import Goals from './Goals/Goals';
import Learn from './Learn/Learn';
import Service from './Services/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Goals></Goals>
            <Learn></Learn>

        </div>
    );
};

export default Home;