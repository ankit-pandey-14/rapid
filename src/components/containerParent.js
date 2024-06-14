import React from 'react';
import { Outlet } from 'react-router-dom';
import CommonHeader from './CommonHeader';
import Footer from './footer';

const ContainerParent = () => {
    return (
        <>
            <CommonHeader />
            <Outlet />
            <Footer />
        </>
    );
}

export default ContainerParent;