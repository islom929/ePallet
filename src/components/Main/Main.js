import React from 'react';
import './Main.css'
import ProductInfo from './ProductInfo/ProductInfo';
import ProductView from './ProductView/ProductView';

const Main = () => {
  return (
    <div className='main'>
      <div className='container main__container'>
        <ProductView />
        <ProductInfo />
      </div>
    </div>
  );
}

export default Main;
