import React from 'react';
import HomeBanner from './sections/banner';
import HomeInfo from './sections/info';
import HomeServices from './sections/services';

const HomeScreen = () => {
    return (
        <>
            <HomeBanner />
            <HomeInfo />
            <HomeServices />
        </>
    );
}

export default HomeScreen;