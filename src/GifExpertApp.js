import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

export const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
      <>
        <div className='header'>
          <h1>
            <div>
              <FontAwesomeIcon className="icon" icon={faCrown} /> Gif King
            </div>
          </h1>
        </div>

        <AddCategory setCategories={setCategories}/>

        {categories.length > 0 &&
          <div className='content'>
            <ul>
                {categories.map(c => <GifGrid key={c} category={c} setCategories={setCategories} />)}
            </ul>
          </div>
        }

        <div className='footer'>
          <img className='powered' src='https://i.loli.net/2018/10/24/5bd0957e29193.gif'/>
        </div>        
      </>
    )
}

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.arrayOf(String),
}