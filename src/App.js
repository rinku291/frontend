import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
//import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Verify_OTP from './pages/Verify_OTP'; 
import SignIn from './pages/SignIn';
import CatAdd from './pages/CatAdd';
import CategoryPg from './pages/CategoryPg';
import Mobiles from './pages/Mobile_Products';
import Home_Subcat_Pro from './pages/Home_Subcat_Pro';
import SinglePro from './pages/SinglePro';
import Product_Details from './pages/Product_Details';
import ProductAdd from './pages/ProductAdd';
import ProfilePg from './pages/ProfilePg';
import My_Profile from './pages/My_Profile';
import Subcatadd from './pages/Subcatadd';
import ProfileInfoAdd from './pages/ProfileInfoAdd';
import Cart from './pages/Cart';
import Place_Orders from './pages/Place_Orders';
import Order_Status_Pg from './pages/Order_Status_Pg';
import Mobile_Products_Add from './pages/Mobile_Products_Add';
import './App.css';

function App() {

  return (
<>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Verify_OTP' element={<Verify_OTP />} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/CatAdd' element={ <CatAdd />} />
      <Route path='/cat/:id' element={<CategoryPg/>} />
      <Route path='/Home_Subcat_Pro/:id' element={<Home_Subcat_Pro/>} />
      <Route path='/Home_Subcat_Pro/Mobiles/:id' element={<Mobiles/>} />
      <Route path='/ProductAdd' element={<ProductAdd/>} />
      <Route path='/product/:id' element={<SinglePro />} />
      <Route path='/ProfilePg' element={<ProfilePg />} /> 
      <Route path='/My_Profile' element={<My_Profile />} />
      <Route path='/ProfileInfoAdd' element={<ProfileInfoAdd />} />
      <Route path='/Subcatadd' element={<Subcatadd />} />
      <Route path='/Product_Details/:id' element={<Product_Details />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Place_Orders' element={<Place_Orders />} />
      <Route path='/Order_Status_Pg' element={<Order_Status_Pg />} />
      <Route path='/Mobile_Products_Add' element={<Mobile_Products_Add />} />
      </Routes>
      </BrowserRouter>
      {/* <Footer/> */}

</>

  );
}

export default App;
