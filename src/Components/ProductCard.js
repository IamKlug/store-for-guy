import React, { useState } from 'react'

export default function ProductCard(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const cartItem = {
      data: props.product,
      Quantity: quantity,
    };
    props.addToCart(cartItem);
  }

  return (
    <div className="product-card">
      <img src={props.product.image_path} alt={props.product.name} className="product-card__img" />
      <div>
        <div className="product-card__info">
          <div className="product-card__name">{props.product.name[0].toUpperCase() + props.product.name.slice(1)}</div>
          <div className="product-card__price">${props.product.price}</div>
        </div>
        <div className='productCount'>
          <select value={quantity} onChange={handleQuantityChange}>
            {Array.from(Array(25).keys()).map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <button className="product-card__button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
