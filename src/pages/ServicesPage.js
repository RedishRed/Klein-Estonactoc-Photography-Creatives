import './ServicesPage.css';
import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ServicesPage = () => {
	return <div className='services-wrapper' id='services'>
		<p>Klein <span>Services</span></p>
		<p>check out these amazing package's and let us handle your event</p>
		<Row className='row-services' xs='1' sm='2' md='2' lg='3'>
			<Col>
				<div className='package-box'>
					<p className='tag'>01</p>
					<div className='package-header'>
						<p>Package 1</p>
						<p>₱30,000</p>
					</div>
					<ul>
						<li>2 Photographers and 2 Videographers</li>
						<li>Same day edit video</li>
						<li>Unlimited shots</li>
						<li>Raw photos and videos provided</li>
						<li>16GB flashdrive for edited photos and video</li>
					</ul>
					<Link to='' exact='true' className='btn-book'>Book Now</Link>
				</div>
			</Col>
			<Col>
				<div className='package-box'>
					<p className='tag'>02</p>
					<div className='package-header'>
						<p>Package 2</p>
						<p>₱50,000</p>
					</div>
					<ul>
						<li>2 Photographers and 2 Videographers</li>
						<li>Same day edit video</li>
						<li>Unlimited shots</li>
						<li>Raw photos and videos provided</li>
						<li>16GB flashdrive for edited photos and video</li>
						<li>Freebies Prenup photoshoot and slideshow</li>
						<li>Onsite slideshow</li>
						<li>Save the date video 11x14 frame 8x8 20p album</li>
						<li>Aerial video coverage (Wedding)</li>
					</ul>
					<Link to='' exact='true' className='btn-book'>Book Now</Link>
				</div>
			</Col>
			<Col>
				<div className='package-box'>
					<p className='tag'>03</p>
					<div className='package-header'>
						<p>Package 3</p>
						<p>₱58,000</p>
					</div>
					<ul>
						<li>3 Photographers and 3 Videographers</li>
						<li>Same day edit video</li>
						<li>Unlimited shots</li>
						<li>Raw photos and videos provided</li>
						<li>16GB flashdrive for edited photos and video</li>
						<li>Full documentation, photo and video</li>
						<li>Freebies Prenup photoshoot and slideshow</li>
						<li>Onsite slideshow</li>
						<li>Save the date video</li>
						<li>12x18 frame 8x10 20p album</li>
						<li>Full Highlights Video</li>
						<li>Aerial Video Coverage (Prenup & Wedding) - 20mins</li>
					</ul>
					<Link to='' exact='true' className='btn-book'>Book Now</Link>
				</div>
			</Col>

		</Row>		
	</div>
}

export default ServicesPage;