import './index.scss';
import { WordContext } from '../../context/WordContext';
import { useContext } from 'react';

export default function Message({ title, cta }) {
	const { setWord, setIsLost, setIsWon, setErrors, setInputValues } = useContext(WordContext);

	const resetGame = () => {
		setWord(null);
		setErrors(1);
		setIsWon(false);
		setIsLost(false);
		setInputValues([]);
	};

	return (
		<div className="msg">
			<h1>{title}</h1>
			<button onClick={resetGame}>{cta}</button>
		</div>
	);
}
