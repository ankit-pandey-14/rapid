import React from 'react';
import { ImageWrapper, StyledImage } from '../styles/components/ImageStyle';

const CustomImage = ({classes, image, altText, containFit, onClick, tooltip}) => {
    return (
        <ImageWrapper
            className={classes}
            onClick={onClick}
            title={tooltip}
        >
            <StyledImage
                src={image}
                alt={altText}
                loading='lazy'
                fit={containFit ? 'contain' : null}
            />
        </ImageWrapper>
    );
};

export default CustomImage;