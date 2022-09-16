import React from 'react'
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  const navigate=useNavigate();

  const handleNavigate = () =>{
    navigate(`/detail/${product.id}`);
  };

  return (
    <div onClick={handleNavigate}>
      {product.name+" "+product.description}
    </div>
  )
}

export default Item