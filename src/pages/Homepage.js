
import LandingPage from './LandingPage';
import About from './About';
import CollectionPage from './CollectionPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import './Homepage.css';

const Homepage = () => {
	return <div className='homepage-wrapper'>
      <LandingPage/>
      <About/>
      <CollectionPage/>
      <ServicesPage/>
      <ContactPage/>		
	</div>
};

export default Homepage;