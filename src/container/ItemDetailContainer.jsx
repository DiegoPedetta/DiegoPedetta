import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemDetailContainer = () => {
  const [productDetail,setProductDetail] = useState({ });
  const {productid} = useParams();
  useEffect(()=> {
    const getProducts = async () => {
      try {
           
          const docRef = doc(db, "products", productid);

         
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
               
              setProductDetail({id: docSnap.id, ...docSnap.data()});
          } 
  

      } catch (error) {
          console.log(error);
      }
  }
  getProducts();

     

     
  },[productid]);

  console.log(productDetail);

  return <ItemDetail product={productDetail}/>
}

export default ItemDetailContainer;