
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import { ItemListContainer } from './container/ItemListContainer';
 

function App() {
  return (
    <div className="App">
       <NavBar/>
       {/*<ItemListContainer greeting={"Bienvenidos Al Mejor E-commerce de productos APPLE"}/>*/}
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
