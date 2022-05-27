import { Route, Routes } from 'react-router-dom';
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
import UnAuthorized from './pages/UnAuthorized/UnAuthorized';
import Forbidden from './pages/Forbidden/Forbidden';
import MakeAdmin from './pages/Admin-Pages/MakeAdmin/MakeAdmin';
import AddProducts from './pages/Admin-Pages/AddProducts/AddProducts';
import ManageProducts from './pages/Admin-Pages/ManageProducts/ManageProducts';
import ManageOrders from './pages/Admin-Pages/ManageOrders/ManageOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllReviews from './pages/AllReveiws/AllReviews';
import useAdmin from './hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function App() {

  const [user] = useAuthState(auth)
  const [admin] = useAdmin()
  return (
    <div>
      <Navigation></Navigation>
      <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          {
            user && <>
              <Route path='/my-orders' element={<MyOrders/>}></Route>
              <Route path='/add-review' element={<AddReview/>}></Route>
              <Route path='/profile' element={<Profile/>}></Route>
              <Route path='/reviews' element={<AllReviews/>}></Route>
            </>
          }
          {
            admin && user && <>
            <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='all-users' element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='add-product' element={<AddProducts></AddProducts>}></Route>
              <Route path='manage-product' element={<ManageProducts></ManageProducts>}></Route>
              <Route path='manage-order' element={<ManageOrders></ManageOrders>}></Route>
            </Route>
            </>
          }
          <Route path='/log-in' element={<LogIn/>}></Route>
          <Route path='/sign-up' element={<SingUp/>}></Route>
          <Route path='/product/:id' element={
            <RequirAuth>
                <SingleProduct/>
            </RequirAuth>
          }></Route>
          <Route path='/unauthorized' element={<UnAuthorized/>}></Route>
          <Route path='/forbidden' element={<Forbidden/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
