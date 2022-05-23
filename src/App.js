import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './shared/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop' element={<Home/>}></Route>
          <Route path='/blog' element={<Home/>}></Route>
          <Route path='/my-orders' element={<Home/>}></Route>
          <Route path='/add-review' element={<Home/>}></Route>
          <Route path='/profile' element={<Home/>}></Route>
          <Route path='/dashboard' element={<Home/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
