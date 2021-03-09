import React, { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { useGlobe } from './Context';
import { Link } from 'react-router-dom';

function Cart() {
  const {
    arr,
    removeItem,
    removeAll,
    increase,
    decrease,
    totalAmount,
    inTotal,
  } = useGlobe();

  if (arr.length < 1) {
    return (
      <div className='empty'>
        <div className='margin'></div>
        <div className='zero'>
          <p>your cart is currently empty</p>
          <Link to='/'>
            <button>fill it</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='cart-container'>
      <div className='margin'></div>
      <div className='ajaira-kotha'>
        <h2>here is your cart items. enjoy shopping with us!</h2>
        <Link to='/'>
          <button>continue shopping</button>
        </Link>
      </div>
      <div className='grid'>
        <div className='item common'>
          <p>Item</p>
        </div>
        <div className='price common'>
          <p>price</p>
        </div>
        <div className='amount common'>
          <p>amount</p>
        </div>
        <div className='total common'>
          <p>total</p>
        </div>
        <div className='total common'>
          <p>Remove</p>
        </div>
      </div>
      {arr.map((item) => {
        const { id, title, image, price, amount } = item;
        const multi = (price * amount).toFixed(2);
        return (
          <div className='item-grid grid' key={id}>
            <div className='item-name'>
              <img src={image} alt={title} />
              <p>{`${title.slice(0, 30)}...`}</p>
            </div>
            <div className='item-price'>
              <p>{price}</p>
            </div>
            <div className='item-amount'>
              <BiUpArrow onClick={() => increase(id)} />
              <p>{amount}</p>
              <BiDownArrow onClick={() => decrease(id)} />
            </div>
            <div className='item-total'>
              <p>{multi}</p>
            </div>
            <div className='item-total rmv'>
              <FaTrashAlt onClick={() => removeItem(id)} />
            </div>
          </div>
        );
      })}
      <div className='bottom-div'>
        <div className='bottom-grid'>
          <div className='bottom-total'>
            <p>total</p>
          </div>
          <div></div>
          <div>
            <p>{totalAmount}</p>
          </div>
          <div className='bottom-amount'>
            <p>{inTotal}</p>
          </div>
          <div>
            <button onClick={removeAll}>remove all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
