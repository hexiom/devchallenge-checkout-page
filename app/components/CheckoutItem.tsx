/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Image {
  qualityMid: string,
  qualityHigh: string,
}

interface CheckoutItemProps {
  name: string,
  price: number,
  color: string,
  quantity: number,
  img: Image
}

function CheckoutItem(props: CheckoutItemProps) {
  const { name, price, color, quantity } = props;

  return (
  <div className="item">
    <div className="item-thumbnail">
      <img
      srcSet={`${props.img.qualityMid} 300w, ${props.img.qualityHigh} 500w`}
      sizes='(max-width: 620px) 300px, (min-width: 621px) 500px'
      src={props.img.qualityMid}
      alt="" />
    </div>
    <div className="item-content">
      <div className="flex-between text-close">
        <p className='semi-bold'>{name}</p>
        <p className='bold'>${price.toFixed(2)}</p>
      </div>

      <div className="text-secondary">
        <p className="semi-bold text-small padding-y-small">
          {color}
        </p>

        <div className="padding-top-large flex-between">
          <p>x {quantity}</p>
          <button className='btn-text'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9398 11.9999L17.1398 7.80655C17.2653 7.68101 17.3359 7.51075 17.3359 7.33321C17.3359 7.15568 17.2653 6.98542 17.1398 6.85988C17.0143 6.73434 16.844 6.66382 16.6665 6.66382C16.4889 6.66382 16.3187 6.73434 16.1931 6.85988L11.9998 11.0599L7.80646 6.85988C7.68093 6.73434 7.51066 6.66382 7.33313 6.66382C7.1556 6.66382 6.98533 6.73434 6.8598 6.85988C6.73426 6.98542 6.66374 7.15568 6.66374 7.33321C6.66374 7.51075 6.73426 7.68101 6.8598 7.80655L11.0598 11.9999L6.8598 16.1932C6.79731 16.2552 6.74771 16.3289 6.71387 16.4102C6.68002 16.4914 6.6626 16.5785 6.6626 16.6665C6.6626 16.7546 6.68002 16.8417 6.71387 16.9229C6.74771 17.0042 6.79731 17.0779 6.8598 17.1399C6.92177 17.2024 6.99551 17.252 7.07675 17.2858C7.15798 17.3197 7.24512 17.3371 7.33313 17.3371C7.42114 17.3371 7.50827 17.3197 7.58951 17.2858C7.67075 17.252 7.74449 17.2024 7.80646 17.1399L11.9998 12.9399L16.1931 17.1399C16.2551 17.2024 16.3288 17.252 16.4101 17.2858C16.4913 17.3197 16.5785 17.3371 16.6665 17.3371C16.7545 17.3371 16.8416 17.3197 16.9228 17.2858C17.0041 17.252 17.0778 17.2024 17.1398 17.1399C17.2023 17.0779 17.2519 17.0042 17.2857 16.9229C17.3196 16.8417 17.337 16.7546 17.337 16.6665C17.337 16.5785 17.3196 16.4914 17.2857 16.4102C17.2519 16.3289 17.2023 16.2552 17.1398 16.1932L12.9398 11.9999Z" fill="#6C727F"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CheckoutItem;
