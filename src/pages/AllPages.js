import React from 'react';
import { Link } from 'react-router-dom';


export default function AllPages() {
  return (
    <div>
        <h1>All Pages</h1>
        <ul>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
    </div>
    
  )
}
