import React from 'react';
import { CardContentWrapper, CardDescription, CardHeading, CardImageWrapper, CradWrapper } from '../styles/components/CardStyle';

import CustomImage from './customImage';

const CustomCard = ({classes, fullImage, image, icon, iconClass, altText, headingTop, headingBottom, headingClass, description}) => {
    return (
        <CradWrapper className={classes}>
            {
                headingTop
                ? <CardHeading className={headingClass}>{headingTop}</CardHeading>
                : null
            }

            {
                icon
                ? (
                    <CardImageWrapper>
                        <i className={`bi bi-${icon} ${iconClass}`}></i>
                    </CardImageWrapper>
                )
                : (
                    <CustomImage
                    classes={''}
                    image={image}
                    altText={altText}
                    containFit={false}
                />
                )
            }

            <CardContentWrapper>
                {
                    headingBottom
                    ? <CardHeading className={headingClass}>{headingBottom}</CardHeading>
                    : null
                }

                {
                    description
                    ? <CardDescription>{description}</CardDescription>
                    : null
                }
            </CardContentWrapper>
        </CradWrapper>
    );
};

export default CustomCard;