import './App.css';
import {Fragment} from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';

import Store from './pages/Store';
import Footer from './components/Layout/Footer';
import Homepage from './pages/Homepage';
import Header from './components/Layout/Header';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return <Fragment>
    <Router>
      <Header/>
      <Routes>
        {/* Routes... */}
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<Store/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    <Footer/>
    </Router>
  </Fragment>
};

export default App;
