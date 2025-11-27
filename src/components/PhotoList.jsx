import React, {useEffect} from 'react';
import Photo from './Photo';
import {useParams} from 'react-router-dom';


const PhotoList = ({imageData, pageTitle}) => {
    const {query} = useParams();
    
    //facilitates path changes via query for searches and path for static pages
    useEffect(() => {
        let path = window.location.pathname.trim().slice(1);
        if(!path)path="cats";
        if(!query && !path.includes('search')){
            pageTitle(path);
        }
        else{
            pageTitle(query);
        }
    },[query, location.pathname, pageTitle])

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