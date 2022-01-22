import React from 'react';
import './NavSort.css'

const NavSort = () => {
  const arrowLink = '>'
  return (
    <div className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <button className='nav__btn'>Food Service</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn'>Health & Beauty</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn'>Industrial Ingridients</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn'>Beverages</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn'>Pet Supplies</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn nav__btn--active'>Froze</button>
        </li>
        <li className='nav__item'>
          <button className='nav__btn'>Cleaning Products</button>
        </li>
      </ul>

      <ul className='nav__list-link'>
        <li className='nav__item-link'><button className='nav__btn-link'>Frozen</button>{arrowLink}</li>
        <li className='nav__item-link'><button className='nav__btn-link'>Juice</button>{arrowLink}</li>
        <li className='nav__item-link'><button className='nav__btn-link'>Mott's Unsweetened Applesauce</button></li>
      </ul>
      <button className='nav__btn-back'><span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/></svg></span>Back</button>
    </div>
  );
}

export default NavSort;
