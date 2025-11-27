import React, {useEffect, useState} from 'react';
import Photo from './Photo';
import {useParams} from 'react-router-dom';



<<<<<<< Updated upstream
<<<<<<< Updated upstream
const PhotoList = ({imageData, fetchData}) => {
    const {query} = useParams();
    const [searchTerm, setSearchTerm] = useState('cats');

    useEffect(() => {
        console.log('in useEffect ' + query);
        fetchData(query);  
    },[query, searchTerm])
=======
const PhotoList = ({imageData, pageTitle}) => {
    const {query} = useParams();
    
    //facilitates path changes via query for searches and path for static pages
    useEffect(() => {
=======
const PhotoList = ({imageData, pageTitle}) => {
    const {query} = useParams();
    
    //facilitates path changes via query for searches and path for static pages
    useEffect(() => {
>>>>>>> Stashed changes
        let path = window.location.pathname.trim().slice(1);
        if(!path)path="cats";
        if(!query)pageTitle(path);
        else{
            pageTitle(query);
        }
    },[query, location.pathname, pageTitle])
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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