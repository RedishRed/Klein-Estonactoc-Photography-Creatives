import './Header.css';
import {Navbar, Nav} from 'react-bootstrap';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import useLink from '../../hooks/use-link';

export default function Header(){

	const [navBackground, setNavBackground] = useState(false);
	const navigate = useNavigate();

	const navigateLink = event => {
		navigate(`/#${event.target.name}`)
	};

	const {location} = useLink();
	const showBackground = () => {
		if(window.scrollY >= 632) setNavBackground(true);
		else setNavBackground(false);
	};

	window.addEventListener('scroll',showBackground);
	const navClass = navBackground 
		? 'header-wrapper active'
		: location !== '/' 
		? 'header-wrapper active'
		:'header-wrapper'; 

	return <Navbar expand="lg" className={navClass}>
	       <Navbar.Brand href="/" className='brand-name'>Klein Estonactoc<span>Photography | Creatives</span></Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="ms-auto">
		        <Link to='/shop' exact='true' className='nav-links store-link'>Store</Link>
		        <button type='button' onClick={navigateLink} name='home' className='nav-links'>Home</button>
		        <button type='button' onClick={navigateLink} name="about" className='nav-links'>About Klein</button>
		        <button type='button' onClick={navigateLink} name="portfolio" className='nav-links'>Portfolio</button>
		        <button type='button' onClick={navigateLink} name="services" className='nav-links'>Our Services</button>
		        <button type='button' onClick={navigateLink} name="contact" className='nav-links'>Contact</button>
		        <Link to='/login' exact='true' className='nav-links btn-login'>Login</Link>
		      </Nav>
		    </Navbar.Collapse>
	</Navbar>
}
