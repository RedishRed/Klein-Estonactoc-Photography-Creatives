import './Textarea.css';

const Textarea = (props) => {
	return <div className='textarea-box'>
		<label htmlFor={props.name}>{props.label}</label>
		<textarea name={props.name} id={props.id} cols={props.cols} rows={props.rows} placeholder={props.placeholder}></textarea>
	</div>
}

export default Textarea;