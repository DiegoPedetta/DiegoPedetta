import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
     
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product) => (
           <Grid item xs={2} sm={4} md={4}> <Item key={product.id}  product={product}/></Grid>  
        ))}
      </Grid>    
     
     
  )
}

export default ItemList