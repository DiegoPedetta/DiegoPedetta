import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card,CardContent,CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Item = ({product}) => {
  const navigate=useNavigate();

  const handleNavigate = () =>{
    navigate(`/detail/${product.id}`);
  };

  return (
    
      
        <Box width='245px' onClick={handleNavigate}>
          <Card>
            <CardMedia component='img' height='245'  image={product.image} alt='imagen producto' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                  {product.name}
              </Typography>
              <Typography variant='body2'>
                  {product.description}
              </Typography>
            </CardContent>
          </Card>
      </Box>
      
    
  )
}

export default Item