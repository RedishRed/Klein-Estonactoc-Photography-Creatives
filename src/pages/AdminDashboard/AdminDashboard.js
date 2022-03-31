import React from 'react';
import Header from '../Partials/Header';
import "../stylesheets/global.scss";
import Sidebar from './../Partials/Sidebar';

let customers = [
    {
        id: 1,
        name: "Mavis Vermillion",
        email: "mavis@email.com",
        contact: "090890800",
        event: "birthday party",
        venue: "basketball court",
        event_status: true,
    },
    {
        id: 2,
        name: "James Lawrence Villanueva",
        email: "james@email.com",
        contact: "090890800",
        event: "birthday party",
        venue: "basketball court",
        event_status: false,
    },
    {
        id: 3,
        name: "Jireh Ely Niel Mojares",
        email: "ely@email.com",
        contact: "090890800",
        event: "birthday party",
        venue: "basketball court",
        event_status: true,
    },
    {
        id: 4,
        name: "Stella Vermillion",
        email: "mavis@email.com",
        contact: "090890800",
        event: "birthday party",
        venue: "basketball court",
        event_status: true,
    },
    {
        id: 5,
        name: "Minerva Vermillion",
        email: "mavis@email.com",
        contact: "090890800",
        event: "birthday party",
        venue: "basketball court",
        event_status: true,
    },
];

export default function AdminDashboard() {
    let customer_row = customers.map((customer) => {
        return(
            <tr className={`${!customer.event_status ? "cancelled_event" : ""}`} >
                <td>
                    <a href="customer/1">
                        {customer.name} 
                    </a>
                </td>
                <td> {customer.email}</td>
                <td>{customer.contact}</td>
                <td>
                    <a href="event/">{customer.event}</a>
                </td>
                <td>{customer.venue}</td>
            </tr>
        );
    });
  return (
    <div id="wrapper">
        <Header />
        <Sidebar />
        <div id="content_section">
            <div className="section_wrapper">
                <h1>Welcome, Admin</h1>
                <div class="content_container candidate_table_container">
                    <h2>Customers</h2>
                    <div class="table_container">
                        <div class="table-responsive">
                            <table id="" className="table customer_event_table" >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Contact Number</th>
                                        <th>Event</th>
                                        <th>Venue</th>
                                    </tr>
                                </thead>    
                                <tbody>
                                    {customer_row}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
