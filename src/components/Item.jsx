import React from 'react'
 

const Item = ({product}) => {
  return (
    <div>{product.name+" "+product.description}</div>
  )
}

export default Item