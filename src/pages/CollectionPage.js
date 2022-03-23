import './CollectionPage.css';
import Collection from '../components/Collection/Collection';
import {Col, Row} from 'react-bootstrap';

const CollectionPage = () =>{
	
	const collectionList = [
		{
			title: 'wedding',
			detail: 'A special day for every couples in the world',
			banner: 'wedding.jpg',
		},
		{
			title: 'Baptismal',
			detail: 'A celebration of welcoming our beloved to jesus',
			banner: 'baptism.jpg',
		},
		{
			title: 'Themed Parties',
			detail: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
			banner: 'parties.jpg',
		},
		{
			title: 'Anniversary',
			detail: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
			banner: 'anniversary.jpg',
		},
		{
			title: 'Reunions',
			detail: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
			banner: 'reunion.jpg',
		},
		{
			title: 'Pop-up Events',
			detail: 'rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
			banner: 'popup.jpg',
		},
	];

	const populateCollections = collectionList.map((item, index) => {
		return <Col key={index} lg='4' md='6' sm='6' className='col-collection'>
			<Collection label={item.title} detail={item.detail} imgBanner={item.banner}/>
		</Col>
	});

	return <div className='collection-wrapper' id='portfolio'>
		<div>
			<p className='headLine'>Event <span>Collections</span></p>
			<p className='sub-heading'> Every memory in every event</p>
		</div>
		<div className='collection-album'>
			<Row className='row-collection'>
				{populateCollections}
			</Row>
		</div>
	</div>
} 

export default CollectionPage;