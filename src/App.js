  // import logo from './logo.svg';
import './App.css';
// import Product from './component/product';
// import Data from './data/product_list';
import {BrowserRouter,Route} from 'react-router-dom'
import ProductScreen from './component/ProductScreen';
import HomeScreen from './component/HomeScreen';
import Navbar from './component/Navbar';
 
import Feature from './component/Feature';
import Home from './component/Home';
import ProductList from './component/ProductList';
import Samsung from './component/Brand/Samsung';
import Iphone from './component/Brand/Iphone';
import Realme from './component/Brand/Realme';
import Redmi from './component/Brand/Redmi';
import About from './component/About';
import Register from './component/Register';
import Login from './component/Login';


function App() {
  return (
    <>
    <BrowserRouter>
 
      
   
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" exact component={About}></Route>
    <Route path="/register" exact component={Register}></Route>
    <Route path="/login" exact component={Login}></Route>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/samsung_product" component={Samsung}></Route>
    <Route path="/iphone" component={Iphone}></Route>
    <Route path="/realme_product" component={Realme}></Route>
    <Route path="/mi_product" component={Redmi}></Route>
 
 
    
  </BrowserRouter>
  </>
  );
}

export default App;
