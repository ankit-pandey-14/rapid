import React from 'react';
import { ServiceContentWarpper, ServiceWarpper } from '../../../styles/screens/HomeStyle';
import { SectionHeadingStyle } from '../../../styles/components/SectionHeadingStyle';
import CustomCard from '../../../components/customCard';

import BlogImage from '../../../assets/blogs.svg';
import WebsiteImage from '../../../assets/website.jpg';
import PortfolioImage from '../../../assets/portfolio.jpg';

const serviceImageList = [
    {
        key: '1',
        image: BlogImage,
    },
    {
        key: '2',
        image: WebsiteImage,
    },
    {
        key: '3',
        image: PortfolioImage,
    },
];

const HomeServices = () => {
    return (
        <ServiceWarpper className='container'>
            <SectionHeadingStyle>Our Services</SectionHeadingStyle>

            <ServiceContentWarpper className='d-grid'>
                {
                    serviceImageList.map((serviceImage) => {
                        return (
                            <CustomCard
                                key={serviceImage.key}
                                fullImage={true}
                                image={serviceImage.image}
                            />
                        );
                    })
                }
            </ServiceContentWarpper>
        </ServiceWarpper>
    );
}

export default HomeServices;