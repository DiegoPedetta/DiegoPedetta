import React, { Component } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

export class CarWidget extends Component {
  render() {
    return (
      <div>
        <IconButton>
            <AddShoppingCartIcon />
        </IconButton>
      </div>
    )
  }
}

export default CarWidget