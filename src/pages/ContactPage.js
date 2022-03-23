import './ContactPage.css';
import Input from '../components/UI/input/Input';
import Textarea from '../components/UI/textarea/Textarea';
import {BiMailSend} from 'react-icons/bi';

const ContactPage = () => {
	return <div className='contact-wrapper' id='contact'>
		<div className='header-box'>
			<p className='header'>Get</p>
			<p className='header'>In</p>
			<p className='header'>Touch</p>
			<p className='sub-header'>Got any questions or suggestions then send us a message:</p>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, adipisci et repudiandae ea natus. Fugiat odio, laudantium sit cum officia quaerat cumque incidunt dolores soluta eos nisi impedit inventore ducimus?</p>
			
		</div>
		<div className='form-contact'>
			<form>
				<Input
					label='Name'
					name='username'
					type='text'
					placeholder='Enter your name'
				/>
				<Input
					label='Email'
					name='useremail'
					type='email'
					placeholder='Enter your email'
				/>
				<Textarea
					name='messages'
					label='Messages'
					id=''
					col='77'
					rows='5'
					placeholder='Compose a message..'
				/>
				<button type='button' className='btn-send' ><BiMailSend/> Send Message</button>
			</form>
		</div>
	</div>
};

export default ContactPage;