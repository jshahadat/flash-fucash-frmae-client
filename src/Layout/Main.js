import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheared/Footer/Footer';
import Header from '../Pages/Sheared/Header/Header';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;