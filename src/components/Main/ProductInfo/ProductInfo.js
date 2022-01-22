import React, { useState } from 'react';
import './ProductInfo.css'

const ProductInfo = () => {
  const [count, setCount] = useState(0)


  return (
    <div className='product-info__box'>
      <div className='info-top'>
        <p style={{color: '#888',margin: '0',marginBottom:'10px'}}>MOOT'S</p>
        <h2 style={{fontSize: '20px', fontWeight: '400',margin: '0',marginBottom:'5px'}}>
          Mott's Unsweetened Applesauce</h2>
        <p style={{fontSize: '13px', color: '#888',margin: '0'}}>
          Pack Size:
          <span style={{color: '#000'}}>
            24/16.90 oz
          </span>
        </p>
        <p style={{fontSize: '13px',color:'#888'}}>
          Chef Maxwell Applesauce is a dellicious classic and part of a healthy diet low in saturated fat with 40% Vitamin C.</p>
        <button style={{textDecoration:'underline'}} className='info-top__download-btn'>
          <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1e90ff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z"/></svg></span>
          Download Spec Sheet
        </button>
      </div>
      <div className='info-center'>
        <div style={{display:'flex', justifyContent: 'space-around'}}>
          <p className='price-cs' style={{display:'flex',alignItems:'flex-start'}}>$<span>32</span>
          <span style={{fontSize:'9px' ,margin:'0 4px'}}> 80 </span> /Cs
          <span style={{color:'#888', marginLeft: '5px'}}>($0.21/oz)</span></p>
          <p className='price-cs' style={{display:'flex',alignItems:'flex-start'}}>$<span>730</span>
          <span style={{fontSize:'9px' ,margin:'0 4px'}}> 30 </span> /Pit</p>
        </div>
        <p style={{color:'#666',fontSize:'13px'}}>Approx. Lead Time:
          <span style={{color:'#000'}}>12 days</span>
        </p>
        <p style={{fontSize:'11px',color: '#888', margin: '0'}}>
          Inforamation about product was provided by manufacturer
        </p>
      </div>
      <div className='info-bottom'>
        <div style={{width: 'auto'}} className='info-bottom__btn-box'>
        <div style={{width: '200px'}} className='info-bottom__counting'>
          <span style={{ display:'flex',justifyContent:'center',alignItems:'center', fontSize:'20px',}}>{count}</span>
        <div className='info-bottom__count-box'>
          <button  onClick={()=> setCount(count + 1)}>+</button>
          <button disabled={count? '':'true'} className='btn-minus' onClick={()=> setCount(count - 1)}>-</button>
        </div>
        <button>Add to Cart</button>
        <button>Custom Pallet</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductInfo;
