import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.tittle}</h1>
        <img src={product.image} alt="ropa"/>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
        <ItemCount />
    </div>
  )
}

export default ItemDetail