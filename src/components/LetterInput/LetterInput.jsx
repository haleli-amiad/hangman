import './index.scss';
import { useContext } from 'react';
import { WordContext } from '../../context/WordContext';

export default function LetterInput({ letterIndex }) {
	const { errors, setErrors, word, inputValues, setInputValues } = useContext(WordContext);

	const handleInput = (e) => {
		if (!word.includes(e.target.value.toLowerCase())) handleError(e);
		else {
			handleInputValues(e.target.value);
			e.target.value = e.target.value.toUpperCase();
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

	const handleError = (e) => {
		setErrors(errors + 1);
		setTimeout(() => (e.target.value = null), 1000);
	};

	return (
		<span>
			{inputValues.length > 1 && (
				<input
					className="letter-input"
					onInput={handleInput}
					type="text"
					value={inputValues[letterIndex].value}
					maxLength="1"
					disabled={inputValues[letterIndex].value}
					style={inputValues[letterIndex].value ? { color: 'rgba(255, 255, 255, 0.66)' } : null}
				/>
			)}
		</span>
	);
}
