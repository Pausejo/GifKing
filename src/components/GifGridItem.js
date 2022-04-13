import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({url, title}) => {

  const handleClick = () => {    
    navigator.clipboard.writeText(url);
  }

  return <div className="card" onClick={handleClick}>
            <h2 className="title">{title}</h2>
            <img src={url} alt={title} />
        </div>
}

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}