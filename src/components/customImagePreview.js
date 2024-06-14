import React, { useState } from 'react';
import CustomImage from './customImage';

const CustomImagePreview = ({file, classes}) => {
    const [preview, setPreview] = useState();

    const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            setPreview(base64);
        }
    
        reader.readAsDataURL(file);
    return (
        <CustomImage
            classes={classes}
            image={preview}
            containFit={true}
        />
    );
};

export default CustomImagePreview;