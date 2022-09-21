import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { products } from '../data/products';
//import ItemCount from '../components/ItemCount'

export const ItemListContainer = ({greeting}) => {

  //const agregarAlCarrito = (cantidad) => {
    //console.log(`Agregado al carrito ${cantidad}`);
  //};
  const {categoryid} = useParams();
  const [prod,setProducts] = useState([]);

  useEffect(()=>{
    ( async ()=>{
      const dataProducts = new Promise ((accept,reject) => {
        setTimeout(() => {
          accept(products)
        }, 2000);
      });
    
      try {
        if(categoryid){
          const p = await dataProducts;
          const prod = p.filter(productos=>productos.categorias === categoryid)
          setProducts(prod);
        }else{
          const prod = await dataProducts;
          setProducts(prod);
        }
      } catch (error) {
        alert("ERROR AL CARGAR LOS DATOS!");
      }
    })()
  
     
  },[categoryid])

   

  return (
    <div>
      <ItemList products={prod} />
      {/*<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>*/}
    </div>
  )
}
