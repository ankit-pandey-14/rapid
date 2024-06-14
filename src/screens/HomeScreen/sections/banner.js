import React from 'react';
import { BannerText, BannerWrapper } from '../../../styles/screens/HomeStyle';
import { PrimaryButtonStyle } from '../../../styles/ButtonStyle';
import CodeImage from '../../../assets/banner.png';
import CustomImage from '../../../components/customImage';

const HomeBanner = () => {
    return (
        <BannerWrapper className='container d-grid'>
            <BannerText>
                <h1>Your Idea Matters !</h1>
                <p>We have a top-tier team of experts that offers premier AI, Blockchain consulting and Web3 development services.</p>

                <PrimaryButtonStyle className='w-fit' weight='normal-bold'>Make a Website</PrimaryButtonStyle>
            </BannerText>

            <CustomImage
                classes={'banner-image'}
                image={CodeImage}
                altText={'Banner Image of Coding Machine'}
                containFit={true}
            />
        </BannerWrapper>
    );
}

export default HomeBanner;