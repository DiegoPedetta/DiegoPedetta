
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import { ItemListContainer } from './container/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './components/NotFound';
import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import CartContainer from './container/CartContainer';
import ShopProvider from './context/ShopProvider';

 

function App() {
  return (
    <ThemeProvider theme={theme}>
       <ShopProvider>
            <BrowserRouter>
              <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/category/:categoryid' element={<ItemListContainer/>} />
                  <Route path='/detail/:productid' element={<ItemDetailContainer/>} />
                  <Route path='/cart' element={<CartContainer/>} />
                  <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
       </ShopProvider>
    </ThemeProvider>   
  );
}

export default App;
