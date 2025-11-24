import React, {useEffect, useState} from 'react';
import Photo from './Photo';
import {useParams} from 'react-router-dom';



const PhotoList = ({imageData, fetchData}) => {
    const {query} = useParams();
    const [searchTerm, setSearchTerm] = useState('cats');

    useEffect(() => {
        console.log('in useEffect ' + query);
        fetchData(query);  
    },[query, searchTerm])

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