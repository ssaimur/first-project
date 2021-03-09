import React, { useState } from 'react';
import { useGlobe } from './Context';
import { Link } from 'react-router-dom';

const Eachitems = ({ id, title, price, description, category, image }) => {
  const { handleClick } = useGlobe();
  return (
    <article className='card'>
      <Link to={`/details/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className='footer'>
        <div className='description'>
          <h4>{`${title.slice(0, 17)}...`}</h4>
          <p>${price}</p>
        </div>
        <div className='buttons'>
          <button onClick={() => handleClick(id)}>Add to Cart</button>
          <div className='line'></div>
          <Link to={`/details/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Eachitems;
