import React from 'react';
import Topbar from './topbar';
import Navbar from './navbar';

const CommonHeader = () => {
    return (
        <header>
            <Topbar />
            <Navbar />
        </header>
    );
}

export default CommonHeader;