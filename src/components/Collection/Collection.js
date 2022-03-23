import './Collection.css';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Collection = (props) => {
	return <div className='collections-box'>
		<div className='backdrop-collection'></div>
		<Image src={require(`../../assets/${props.imgBanner}`)} alt='wedding image' className='banner'/>
		<div className='collection-details'>
			<p className='label'>{props.label}</p>
			<p className='sub-label'>{props.detail}</p>
			<Link to='' className='btn-details'>See Details</Link>
		</div>
	</div>
};

export default Collection;