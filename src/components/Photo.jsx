import React from 'react';

const Photo = ({imageURL}) => {
    return (
        <li>
            <img src={imageURL}/>
        </li>
    );

}
export default Photo;