import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import {Shop} from '../context/ShopProvider';

const ItemDetail = ({product}) => {
  const [qty,setQnt] = useState(0);
  const navigate = useNavigate();
  const {addItem} = useContext(Shop);
  const addCart = (quantity) =>{
    setQnt(quantity);
  };
  const handleFinish = () =>{
    const productToSave = {...product,quantity:qty};
    addItem(productToSave);
    navigate('/cart');
  };
  return (
    <div>
        <h1>{product.tittle}</h1>
        <img src={product.image} alt="ropa"/>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
        {!qty ? (<ItemCount stock={10} initial={1} onAdd={addCart}/>) : (<button onClick={handleFinish}>Finalizar compra</button>)}
    </div>
  )
}

export default ItemDetail