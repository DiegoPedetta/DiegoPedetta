import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom';
import AppleIcon from '@mui/icons-material/Apple';
import { Stack } from '@mui/material';
 

 
 

const NavBar = () => {
   
 

  return (
     <div>
       <AppBar position='sticky'>
         <Toolbar style={{flexGrow: 1}}>
           <AppleIcon style={{mr:2}}/>
           <Link to='/' style={{ textDecoration : 'none',color:'white',flexGrow:1}}>
              <Typography variant='h6' component='div' sx={{flexgrow:1}}>
                  TEC-COMMERCE   
              </Typography>
            </Link>
           <Stack direction='row' spacing={2} style={{flexGrow:1}}>
            <Link to='category/celulares' style={{ textDecoration : 'none',color:'white'}}>
                <Button  color='inherit' >
                      Celulares  
                </Button>
            </Link>
            <Link to='category/ipads' style={{ textDecoration : 'none',color:'white'}}> 
                <Button color='inherit'>
                        Ipad's 
                </Button>
            </Link>
            <Link to="category/computadoras"  style={{ textDecoration : 'none',color:'white'}}> 
                <Button color='inherit'>
                        Computadoras 
                </Button>
            </Link> 
           </Stack>
           <CarWidget />
         </Toolbar>
       </AppBar>
        
     </div>
  );
};
export default NavBar;
