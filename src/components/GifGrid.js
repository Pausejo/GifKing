import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faSync } from '@fortawesome/free-solid-svg-icons';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category, setCategories}) => {
    const {data: images, loading} = useFetchGifs(category);

    const deleteCatagory = () => {        
        setCategories((c) => c.filter(i => i!== category));
    }

    return (
         <div role="GifGrid">
            <h2><label onClick={deleteCatagory}><FontAwesomeIcon className="delete" icon={faCircleMinus} /> {category}</label></h2>        

            {loading && <FontAwesomeIcon data-testid="loading" icon={faSync} spin size='4x' />}

            <div className="container">
                { images.map(img => <GifGridItem key={img.id} {...img} />) }            
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    setCategories: PropTypes.func.isRequired,
}