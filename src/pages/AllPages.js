import React from 'react';
import { Link } from 'react-router-dom';


export default function AllPages() {
  return (
    <ul>
        <li><Link to="/admin">Admin</Link></li>
    </ul>
  )
}
