
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
 

function App() {
  return (
    <div className="App">
       <NavBar/>
       <ItemListContainer greeting={"Bienvenidos Al Mejor E-commerce de productoa APPLE"}/>
    </div>
  );
}

export default App;
