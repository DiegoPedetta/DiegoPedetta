import * as React from 'react';
import AppBar from '@mui/material/AppBar';
 
import Toolbar from '@mui/material/Toolbar';
 
import Typography from '@mui/material/Typography';
 
 
 
import Button from '@mui/material/Button';
 
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom';

 
 

const NavBar = () => {
   


  return (
     <div>
       <AppBar>
         <Toolbar>
           <Typography variant='h6'>
              <Link to='/'>TEC-COMMERCE</Link> 
           </Typography>
           <Button  variant='text' color='inherit'>
               <Link to='category/celular'>Celulares</Link>
           </Button>
           <Button  to='category/ipad' variant='text' color='inherit'>
               <Link to='category/ipad'> Ipad's</Link>
           </Button>
           <Button  to='category/computadora' variant='text' color='inherit'>
                <Link to='category/computadora'> Computadoras</Link>
           </Button>
           <CarWidget/>
         </Toolbar>
       </AppBar>
     </div>
  );
};
export default NavBar;
