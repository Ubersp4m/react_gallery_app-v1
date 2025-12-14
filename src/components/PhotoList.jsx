import React, { useEffect } from 'react';
import Photo from './Photo';
import { useParams, useLocation } from 'react-router-dom';
import usePixabay from '../hooks/usePixabay';
import NotFound from './NotFound';

const PhotoList = () => {
    const { query } = useParams();
    const location = useLocation();

    // derive search term from route or default
    let term = 'cats';
    if (query) term = decodeURIComponent(query);
    else {
        const path = location.pathname.trim().slice(1);
        if (path && !path.includes('search')) term = path;
    }

    const { data, status, error } = usePixabay(term);

    useEffect(() => {
        document.title = `Gallery - ${term}`;
    }, [term]);

    if (status === 'loading') {
        return (
            <div className="photo-container">
                <h2>Loading data...</h2>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="photo-container">
                <h2>Error loading images</h2>
                <p>{error?.message}</p>
            </div>
        );
    }

    if (!data || data.length === 0) return <NotFound />;

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {data.map((image) => (
                    <Photo key={image.id} imageURL={image.previewURL} alt={image.tags} />
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;