import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReview from './pages/AddReview/AddReview';
import Blog from './pages/Blog/Blog';
import Dashboard from './pages/Admin-Pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SingUp from './pages/LogIn/SingUp/SingUp';
import MyOrders from './pages/MyOrders/MyOrders';
import Profile from './pages/Profile/Profile';
import Shop from './pages/Shop/Shop';
import Footer from './shared/Footer/Footer';
import Navigation from './shared/Navigation/Navigation';
import PageNotFound from './pages/PageNotFound';
import SingleProduct from './pages/SingleProducts/SingleProduct';
import RequirAuth from './pages/LogIn/RequirAuth';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/my-orders' element={<MyOrders/>}></Route>
          <Route path='/add-review' element={<AddReview/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/log-in' element={<LogIn/>}></Route>
          <Route path='/sign-up' element={<SingUp/>}></Route>
          <Route path='/product/:id' element={
            <RequirAuth>
                <SingleProduct/>
            </RequirAuth>
          }></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
