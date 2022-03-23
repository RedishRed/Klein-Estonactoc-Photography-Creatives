
import './Input.css';

const Input = (props) => {

	const inputClasses = props.err 
		? 'input-field invalid'
		: 'input-field';

	return <div>
		<div className={inputClasses}>
			<label htmlFor={props.name}>{props.label}</label>
			<input 
				type={props.type} 
				name={props.name} 
				min={props.min}
				max={props.max} 
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
				placeholder={props.placeholder}/>
			{props.err && <p>{props.errorLabel}</p>}
		</div>		
	</div>
};

export default Input;


