import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div className=''>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;