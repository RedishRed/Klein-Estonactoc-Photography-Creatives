import './About.css';
import myPicture from '../assets/aboutme.jpg';
import myCamera from '../assets/camera.jpg';
import {FaQuoteLeft, FaInstagram, FaTiktok, FaCameraRetro} from 'react-icons/fa';
import {CgFacebook} from 'react-icons/cg';
import {Image, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const About = () => {
	return <div className='about-wrapper' id='about'>	
		<div className='about-images-box'>
			<Image src={myPicture} alt='my picture' className='img-01'/>
			<Image src={myCamera} alt='my camera' className='img-02'/>
			<div className='about-details-box'>
				<p>Klein Estonactoc</p>
				<p>Professional Photographer</p>
				<div className='social-media-box'>
					<Link to='' exact='true'><CgFacebook/> - facebook</Link>
					<Link to='' exact='true'><FaInstagram/> - Instagram</Link>
					<Link to='' exact='true'><FaTiktok/> - Tiktok</Link>	
				</div>
				<FaQuoteLeft className='quote-left-icon'/>
				<p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<p className='details'> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<Nav.Link href='#portfolio'><FaCameraRetro/> See Works</Nav.Link>
			</div>
		</div>
	</div>
};

export default About;