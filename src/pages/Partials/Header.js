
import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
        <a href="/" className="brand-name navbar-brand">Klein Estonactoc<span>Photography | Creatives</span></a>
        <Dropdown>
            <Dropdown.Toggle className="profile_dropdown">
                <img  src="https://ik.imagekit.io/1cqtok8fv7n/portrait_profile_pic_sample_BPcPXND9Z.jpg?updatedAt=1641794377941" alt="Adams Doe" />
                <span className="profile_name">Adams Doe</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Account Settings</Dropdown.Item>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        {/* <div class="profile_dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img class="" src="https://ik.imagekit.io/1cqtok8fv7n/portrait_profile_pic_sample_BPcPXND9Z.jpg?updatedAt=1641794377941" alt="Adams Doe" />
                <span class="profile_name">Adams Doe</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item account_link" href="/i/a/account-settings">Account</a>
                <a class="dropdown-item logout_link" href="/int-templates/logout">Log Out</a>
            </div>
        </div> */}
    </header>
  );
}
