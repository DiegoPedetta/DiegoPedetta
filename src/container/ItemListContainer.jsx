import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
//import ItemCount from '../components/ItemCount'

export const ItemListContainer = ({greeting}) => {

  //const agregarAlCarrito = (cantidad) => {
    //console.log(`Agregado al carrito ${cantidad}`);
  //};
  const {categoryid} = useParams();
  const [prod,setProducts] = useState([]);

  useEffect(()=>{
    ( async ()=>{
       
    
      try {
          const q = categoryid ?
           query(collection(db, "products"),where("category",'==',categoryid))
           :
           query(collection(db,"products"))

          const querySnapshot = await getDocs(q);
          const productsFirebase =[];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productsFirebase.push({
              id:doc.id,
              ...doc.data()
            })
          });
          setProducts(productsFirebase);

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
