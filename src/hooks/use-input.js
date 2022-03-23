import {useState} from 'react';

const useInput = (validateValueFunc) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValueFunc(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = e => {
		setEnteredValue(e.target.value);
	};
	const inputBlurHandler = e => {
		setIsTouched(true);
	};
	const resetValue = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		resetValue,
	};
};

export default useInput