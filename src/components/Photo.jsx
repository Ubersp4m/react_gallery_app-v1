import React from 'react';

const Photo = ({imageURL}) => {
    return (
        <li>
            <img src={imageURL} alt/>
        </li>
    );

}
export default Photo;