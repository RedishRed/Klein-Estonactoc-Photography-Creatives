import React from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
  console.log(window.location.href);
  return (
    <aside>
        <ul>
            <li className="active"><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/customers">Customers</Link></li>
        </ul>
    </aside>
  )
}
