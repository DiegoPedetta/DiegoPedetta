import React,{useState,useEffect} from 'react'

const ItemCount = ({initial,stock,onAdd}) => {
  const [count,setCount] = useState(initial);

  const handleAdd = () =>{
    if(count<stock){
       setCount(count+1);
    }else{
        alert("NO HAY STOCK")
    }
     
  };
  const handleDecrement = () => {
      if(count>1){
          setCount(count-1);
      }else{
          alert("NO PUEDE PASAR DEL 1");
      }
  };

  const addCart = () =>{
      onAdd(count);
      setCount(initial);
  }

  useEffect(()=>{
     
  },[count]); 

  return (
    <div>
        <button onClick={handleDecrement}>-</button> 
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount