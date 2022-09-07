import React from 'react'
import ItemCount from '../components/ItemCount'

export const ItemListContainer = ({greeting}) => {

  const agregarAlCarrito = (cantidad) => {
    console.log(`Agregado al carrito ${cantidad}`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}
