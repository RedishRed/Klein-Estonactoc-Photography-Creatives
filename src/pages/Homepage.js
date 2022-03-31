
import LandingPage from './LandingPage';
import About from './About';
import CollectionPage from './CollectionPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import './Homepage.css';
import Header from './../components/Layout/Header';
import Footer from './../components/Layout/Footer';

const Homepage = () => {
	return(
      <>
            <Header/>
            <div className="homepage-wrapper">
                  <LandingPage/>
                  <About/>
                  <CollectionPage/>
                  <ServicesPage/>
                  <ContactPage/>		
            </div>
            <Footer />
      </>
      );

};

export default Homepage;