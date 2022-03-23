import './LandingPage.css';
import {Link} from 'react-router-dom';
import {BsCalendar} from 'react-icons/bs';

const LandingPage = () => {
	return <div className='landingPage-wrapper' id='home'>
		<div className='backdrop'></div>
		<div>
			<p className='heading'><span>Capture</span> what your naked eyes see and store every <span>memory</span>.</p>
			{/* <p>Let's create history in one shot!</p> */}
			<p className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<Link to='' exact='true' className='btn-book-now'><BsCalendar/> Book Event</Link>
			<Link to='/register' exact='true' className='btn-signup'>Create an Account</Link>
		</div>
	</div>
}

export default LandingPage; 