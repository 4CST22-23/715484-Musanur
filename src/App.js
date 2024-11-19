
import './App.css';
import Navbar from './Componnents/Navbar/Navbar';
import { BrowserRouter,Routes,Route, Form} from 'react-router-dom';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Componnents/Hero/Hero';
import Item from './Componnents/Item/Item';
import Popular from './Componnents/Popular/Popular';
import Offers from './Componnents/Offers/Offers';
import NewCollections from './Componnents/NewCollections/NewCollections';
import NewsLetter from './Componnents/NewsLetter/NewsLetter';
import Footer from './Componnents/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './Componnents/Assets/banner_mens.png'
import women_banner from './Componnents/Assets/banner_women.png'
import kid_banner from './Componnents/Assets/banner_kids.png'
import Shop from './Pages/Shop';
import Product from './Pages/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/Product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/item' element={<Item/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/newcollection' element={<NewCollections/>}/>
        <Route path='/newsletter' element={<NewsLetter/>}/>
        <Route path='/footer' element={<Footer/>}/>
        
     
        


    </Routes>
    
    <Footer/>
   
   
   
    </BrowserRouter>
     
    </div>
  );
}

export default App;
