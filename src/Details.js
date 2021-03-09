import React, { useState, useEffect } from 'react';
import { useGlobe } from './Context';
import Loading from './Loading';
import { Link, useParams } from 'react-router-dom';
const url = 'https://fakestoreapi.com/products/';

const Details = () => {
  const [data, setData] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  const { idd } = useParams();
  const { handleClick } = useGlobe();

  const fetchItem = async () => {
    setIsLoad(true);
    const response = await fetch(`${url}${idd}`);
    const item = await response.json();
    setData(item);
    setIsLoad(false);
  };
  useEffect(() => {
    fetchItem();
  }, []);

  const { id, title, price, description, category, image } = data;

  return (
    <div className='full-comp'>
      <div className='margin'></div>
      {isLoad ? (
        <Loading />
      ) : (
        <div className='detail-comp'>
          <div className='img-part'>
            <img src={image} alt={title} />
          </div>
          <div className='detail-part'>
            <h3 className='title'>{title}</h3>
            <p className='price'>
              <span>Price: </span> ${price}
            </p>
            <p className='cate'>
              <span>Category: </span> {category}
            </p>
            <p className='desc'>
              <span>Description: </span> {description}
            </p>
            <button onClick={() => handleClick(id)}>add to cart</button>
            <Link to='/'>
              <button>back to products</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
