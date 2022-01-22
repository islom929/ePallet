import React from 'react';
import './ProductView.css'

const ProductView = () => {
  return (
<div className='product-view__box'>
  <div className='product-view__img-box'>
    {/* <img src="https://picsum.photos/300/300" alt="random img" />
    */}
    <div className='product-view__img'></div>
  </div>
  <div className='product-view__btn-box'>
    <ul className='product-view__list'>
      <li className='product-view__item'>
        <button className='product-view__btn'><span></span></button>
      </li>
      <li className='product-view__item'>
        <button className='product-view__btn'><span></span></button>
      </li>
      <li className='product-view__item'>
        <button className='product-view__btn'><span></span></button>
      </li>
      <li className='product-view__item'>
        <button className='product-view__btn'><span></span></button>
      </li>
      <li className='product-view__item'>
        <button className='product-view__btn'><span></span></button>
      </li>
    </ul>
  </div>
</div>
  );
}

export default ProductView;
