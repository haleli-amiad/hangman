import './index.scss';
import { WordContext } from '../../context/WordContext';
import { useContext, useState } from 'react';

function Letter({ letter }) {
	const { errors, setErrors, word, setInputValues, inputValues } = useContext(WordContext);
	const [ isError, setIsError ] = useState(false);
	const [ isCorrect, setIsCorrect ] = useState(false);
	const handleClick = () => {
		if (word.includes(letter.toLowerCase())) {
			handleInputValues(letter);
			setIsCorrect(true)
		} else {
			setErrors(errors + 1);
			setIsError(true)
		}
	};

	const handleInputValues = (letter) => {
		const updatedInputs = JSON.parse(JSON.stringify(inputValues));
		word.split('').map((l, i) => {
			if (l === letter.toLowerCase()) {
				updatedInputs[i].value = letter.toUpperCase();
				setInputValues(updatedInputs);
			}
			return l;
		});
	};

	return (
		<span className={isError? 'keyboard-letter error-letter' : isCorrect? 'keyboard-letter correct-letter' : 'keyboard-letter'} onClick={handleClick}>
			{letter}
		</span>
	);
}
export default Letter;
