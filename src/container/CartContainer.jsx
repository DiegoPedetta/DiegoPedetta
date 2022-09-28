import React, { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Shop } from '../context/ShopProvider';
import { Button } from '@mui/material';
 

const CartContainer = () => {

const {cart,removeItem,clearCart} = useContext(Shop);

const renderImage = (image) => {
  return (
    <img
        src={image.value}
        alt="cart-product"
        style={{ height: "140px" }}
    ></img>
);
}

const renderRemoveItem = (item) => {
    const product = item.value;
    return (
      <Button 
          onClick={() => removeItem(product)}
          variant = 'contained'
          color = 'secondary'  
      >
        Eliminar
      </Button>
    )
}
 

const columns = [
  { field: 'image', headerName: 'Imagen', renderCell:renderImage , width: 140 },
  { field: 'title', headerName: 'Producto', width: 130 },
  { field: 'quantity', headerName: 'Cantidad', width: 80 },
  {
    field: 'remove',
    headerName: ' ',
    renderCell: renderRemoveItem,
    width: 120,
  },
];

const rows = [];
cart.forEach(item => {
  rows.push({
    id: item.id,
    image: item.image,
    title: item.title,
    quantity: item.quantity,
    remove: item
  })
});

 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <Button onClick={clearCart} color='secondary' variant='outlined'>
        Limpiar Carrito
      </Button>
    </div>
  );
}

  

export default CartContainer