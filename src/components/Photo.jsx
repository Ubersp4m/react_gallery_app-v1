import React from 'react';

const Photo = ({imageURL, alt = 'Image'}) => {
    return (
        <li>
            <img src={imageURL} alt={alt} loading="lazy" />
        </li>
    );

}
export default Photo;