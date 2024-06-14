import React from 'react';
import { InfoWrapper } from '../../../styles/screens/HomeStyle';
import CustomCard from '../../../components/customCard';

const cardInfoList = [
    {
        key: '1',
        icon: 'building',
        heading: 'Local Bussiness',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        key: '2',
        icon: 'bag',
        heading: 'Online Store',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        key: '3',
        icon: 'pencil-square',
        heading: 'Blogging',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        key: '4',
        icon: 'check-square',
        heading: 'Portfolio',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

const HomeInfo = () => {
    return (
        <InfoWrapper className='container d-grid'>
            {
                cardInfoList.map((cardInfo) => {
                    return (
                        <CustomCard
                            key={cardInfo.key}
                            icon={cardInfo.icon}
                            headingBottom={cardInfo.heading}
                            description={cardInfo.description}
                        />
                    );
                })
            }
        </InfoWrapper>
    );
};

export default HomeInfo;