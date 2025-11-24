import React, {useEffect} from 'react';
import Photo from './Photo';
import {useParams} from 'react-router-dom';



const PhotoList = ({imageData, pageTitle, fetchData}) => {
    const {query} = useParams();
    
    useEffect(() => {
        console.log('in useEffect ' + query);
        pageTitle(query);
        fetchData();
    },[query])

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
        {imageData.map((image) => (
        <Photo key={image.id} imageURL={image.previewURL}/>
        ))};
        </ul>
        </div>
);
}

export default PhotoList;