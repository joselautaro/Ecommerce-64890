import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Checkout } from './components/Checkout/Checkout';
import { CartProvider } from './components/context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {

  return (
    <>
    <CartProvider>
      <Router>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='/counter' element={<ItemCount/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/cart' element={<CartScreen/>}/>
        </Routes>
      </Router>
      </CartProvider>
    </>
  )
}
export default App
