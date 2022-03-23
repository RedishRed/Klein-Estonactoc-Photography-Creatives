import './Register.css';
import {Col, Row, Form, Image} from 'react-bootstrap';
import {useNavigate, Link} from 'react-router-dom';
import Input from '../components/UI/input/Input';
import ReCAPTCHA from "react-google-recaptcha";
import {useState} from 'react';
import useInput from '../hooks/use-input';
import CustomModal from '../components/UI/modal/Modal';
import Swal from 'sweetalert2';

const Register = () => {

	const [isVerified, setIsVerified] = useState(false); 
	const [isAgreedTerms, setIsAgreedTerms] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	const navigate = useNavigate();
	let formIsValid = false;

	const showModalHandler = () => setOpenModal(true);
	const closeModalHandler = () => setOpenModal(false)

	const recaptchaHandleChange = () =>{
		setIsVerified(true);
	};

	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstnameChangeHandler,
		inputBlurHandler: firstnameBlurHandler,
		resetValue: resetFirstname,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredLastname,
		isValid: enteredLastnameIsValid,
		hasError: lastnameHasError,
		valueChangeHandler: lastnameChangeHandler,
		inputBlurHandler: lastnameBlurHandler,
		resetValue: resetLastname,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredHomedetail,
		isValid: enteredHomedetailIsValid,
		hasError: homedetailHasError,
		valueChangeHandler: homedetailChangeHandler,
		inputBlurHandler: homedetailBlurHandler,
		resetValue: resetHomedetail,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredCity,
		isValid: enteredCityIsValid,
		hasError: cityHasError,
		valueChangeHandler: cityChangeHandler,
		inputBlurHandler: cityBlurHandler,
		resetValue: resetCity,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredProvince,
		isValid: enteredProvinceIsValid,
		hasError: provinceHasError,
		valueChangeHandler: provinceChangeHandler,
		inputBlurHandler: provinceBlurHandler,
		resetValue: resetProvince,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredZipcode,
		isValid: enteredZipcodeIsValid,
		hasError: zipcodeHasError,
		valueChangeHandler: zipcodeChangeHandler,
		inputBlurHandler: zipcodeBlurHandler,
		resetValue: resetZipcode,
	} = useInput(value => value.trim() > 0);

	const {
		value: enteredUsername,
		isValid: enteredUsernameIsValid,
		hasError: usernameHasError,
		valueChangeHandler: usernameChangeHandler,
		inputBlurHandler: usernameBlurHandler,
		resetValue: resetUsername,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredContactnumber,
		isValid: enteredContactnumberIsValid,
		hasError: contactnumberHasError,
		valueChangeHandler: contactnumberChangeHandler,
		inputBlurHandler: contactnumberBlurHandler,
		resetValue: resetContactnumber,
	} = useInput(value => value.trim().length === 11 && value.trim() > 0);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		resetValue: resetEmail,
	} = useInput(value => value.trim().includes('@'));

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
		resetValue: resetPassword,
	} = useInput(value => value.trim().match(regexPassword) && value.trim().length >= 8);

	
	if(enteredFirstNameIsValid && enteredLastnameIsValid && enteredHomedetailIsValid && enteredCityIsValid && enteredProvinceIsValid && enteredZipcodeIsValid && enteredUsernameIsValid && enteredContactnumberIsValid && enteredEmailIsValid && enteredPasswordIsValid && isAgreedTerms && isVerified){
		formIsValid = true;
	};

	const formSubmitHandler = e => {
		e.preventDefault();
		if(!formIsValid){
			setIsAgreedTerms(false);
			setIsVerified(false);
			return 
		};

		Swal.fire({
			title:'Klein Photography | Creatives',
			text: 'Successfully created the Account',
			icon: 'success',
			confirmButtonText: 'Proceed'
		});
		navigate('/login');
		
		resetFirstname();
		resetLastname();
		resetHomedetail();
		resetCity();
		resetProvince();
		resetZipcode();
		resetUsername();
		resetContactnumber();
		resetEmail();
		resetPassword();
		setIsAgreedTerms(false);
		setIsVerified(false);
	};

	const btnSignupClasses = formIsValid
		?'btn-signup' 
		:'disabled'; 


	const termsAgreements = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
	
	return <div className='register-wrapper'>
		<CustomModal
			show={openModal}
			close={closeModalHandler}
			title='Klein Estonactoc Photography | Creatives'
			content={termsAgreements}
		/>
		<Row xs='1' sm='1' md='2' lg='2'>
			<Col>
				<p className='header'>Create</p>
				<p className='header'>Account</p>
				<p className='sub-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, omnis numquam. Omnis, tempore! Accusantium aut porro optio perspiciatis, accusamus possimus consequuntur ab quaerat cum delectus architecto illo doloribus, laudantium dolores.</p>
				<div className='banner-img-box'>
					<Image src={require('../assets/signup.png')} alt='signup' className='signup-img' />
				</div>
			</Col>
			<Col className='form-register'>
				<Form onSubmit={formSubmitHandler}>
					<div  className='general-details-box'>
						<Row xs='1' sm='2' md='2' lg='2'>
							<Col>
								<Input
									name='firstname'
									label='Firstname'
									type='text'
									placeholder='Enter firstname'
									onChange = {firstnameChangeHandler}
									value={enteredFirstName}
									errorLabel='Firstname Invalid'
									onBlur={firstnameBlurHandler}
									err = {firstNameHasError}
								/>
							</Col>
							<Col>
								<Input
									name='lastname'
									label='Lastname'
									type='text'
									placeholder='Enter lastname'
									onChange = {lastnameChangeHandler}
									value={enteredLastname}
									errorLabel='Lastname Invalid'
									onBlur={lastnameBlurHandler}
									err = {lastnameHasError}									
								/>
							</Col>
						</Row>						
						<Input
							name='homeDetail'
							label='Address'
							type='text'
							placeholder='Building, House No. / Street Name / Brgy.'
							onChange = {homedetailChangeHandler}
							value={enteredHomedetail}
							errorLabel='Address Invalid'
							onBlur={homedetailBlurHandler}
							err = {homedetailHasError}
						/>					
						<Row>							
							<Col>
								<Input
									name='city'
									label='City'
									type='text'
									placeholder='city'
									onChange = {cityChangeHandler}
									value={enteredCity}
									errorLabel='City Invalid'
									onBlur={cityBlurHandler}
									err = {cityHasError}

								/>
							</Col>							
							<Col>
								<Input
									name='province'
									label='Province'
									type='text'
									placeholder='province'
									onChange = {provinceChangeHandler}
									value={enteredProvince}
									errorLabel='Province Invalid'
									onBlur={provinceBlurHandler}
									err = {provinceHasError}
								/>
							</Col>							
							<Col>
								<Input
									name='zipCode'
									label='Zip Code'
									type='number'
									min='0'
									placeholder='zip code'
									onChange = {zipcodeChangeHandler}
									value={enteredZipcode}
									errorLabel='Zip code Invalid'
									onBlur={zipcodeBlurHandler}
									err = {zipcodeHasError}
								/>
							</Col>
						</Row>
					</div>
					<div className='email-details-wrapper'>
						<Row>
							<Col>
								<Input
									name='userName'
									label='Username'
									type='text'
									placeholder='Enter username'
									onChange = {usernameChangeHandler}
									value={enteredUsername}
									errorLabel='Username Invalid'
									onBlur={usernameBlurHandler}
									err = {usernameHasError}
								/>
							</Col>
							<Col>
								<Input
									name='mobileNumber'
									label='Mobile no.'
									type='number'
									placeholder='+09 XXX XXXX XXX'
									min='0'
									onChange = {contactnumberChangeHandler}
									value={enteredContactnumber}
									errorLabel='Contact Number Invalid'
									onBlur={contactnumberBlurHandler}
									err = {contactnumberHasError}
								/>
							</Col>
						</Row>					
						<Input
							name='email'
							label='Email'
							type='email'
							placeholder='juan.delacruz@gmail.com'
							onChange = {emailChangeHandler}
							value={enteredEmail}
							errorLabel='Email Invalid'
							onBlur={emailBlurHandler}
							err = {emailHasError}
						/>
						<Input
							name='password'
							label='Password'
							type='password'
							placeholder='Enter password'
							onChange = {passwordChangeHandler}
							value={enteredPassword}
							errorLabel='Password must contain Special, Uppercase, Lowercase character, Number and length of 8'
							onBlur={passwordBlurHandler}
							err = {passwordHasError}
						/>
					</div>
					<div className='terms-agreement-box'>
						<Form.Check 
							aria-label="Terms and Agreements"
							defaultChecked={isAgreedTerms}
							onChange={() => setIsAgreedTerms(!isAgreedTerms)}
						/>
						<p>By clicking Sign Up, you agree to our <button type='button' className='btn-terms' onClick={showModalHandler}>Terms and Agreement.</button></p>
					</div>
					<div className='recaptcha-box'> 
					<ReCAPTCHA
	    				sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
	    				onChange={recaptchaHandleChange}
	    			/>
	    			</div>
					<button type='submit' className={btnSignupClasses} disabled={!formIsValid}>Signup</button>
				</Form>
				<p className='footer-signup'> Already have an account? <Link to='/login' exact='true'>Log In</Link></p>
			</Col>
		</Row>
	</div>
};

export default Register;