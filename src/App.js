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
import CollectionPage from './pages/CollectionPage';

/* Admin dashboard */
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AllPages from './pages/AllPages';

function App() {
  return <Fragment>
    <Router>
      <Routes>
        {/* Routes... */}
        <Route path='/' element={<AllPages/>} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/shop' element={<Store/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/collection_page' element={<CollectionPage/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  </Fragment>
};

export default App;
