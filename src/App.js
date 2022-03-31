import './App.css';
import {Fragment} from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom';

import Store from './pages/Store';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import CollectionPage from './pages/CollectionPage';

/* Admin dashboard */
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AllPages from './pages/AllPages';
import Events from './pages/Events/Events';
import Customers from './pages/Customers/Customers';

function App() {
  return <Fragment>
    <Router>
      <Routes>
        {/* Routes... */}
        <Route path='/all_pages' element={<AllPages/>} />
        <Route path='/' element={<Homepage/>} />
        <Route path='/shop' element={<Store/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/collection_page' element={<CollectionPage/>} />
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/customers' element={<Customers/>} />
      </Routes>
    </Router>
  </Fragment>
};

export default App;
