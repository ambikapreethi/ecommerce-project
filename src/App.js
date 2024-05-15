import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from './components/productsPage';
import CartPage from './components/cartPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Products/>} />
    <Route  path="cart" element={<CartPage/>} />
    </Routes>
    </BrowserRouter>
    
  );
}


export default App;
