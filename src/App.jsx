import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<h1>Hola Mundo</h1>}/>
        </Routes>
      </Router>
      
    </>
  )
}
export default App
