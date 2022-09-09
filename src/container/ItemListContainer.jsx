import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList';
import { products } from '../data/products';
//import ItemCount from '../components/ItemCount'

export const ItemListContainer = ({greeting}) => {

  //const agregarAlCarrito = (cantidad) => {
    //console.log(`Agregado al carrito ${cantidad}`);
  //};

  const [prod,setProducts] = useState([]);

  useEffect(()=>{
    ( async ()=>{
      const dataProducts = new Promise ((accept,reject) => {
        setTimeout(() => {
          accept(products)
        }, 2000);
      });
    
      try {
        const prod = await dataProducts;
        //console.log(respone);
        setProducts(prod);
      } catch (error) {
        alert("ERROR AL CARGAR LOS DATOS!");
      }
    })()
  
     
  },[])

  console.log(prod);

  return (
    <div>
      <ItemList products={prod} />
      {/*<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>*/}
    </div>
  )
}
