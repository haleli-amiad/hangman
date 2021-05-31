import './index.scss';
import { useState, useEffect, useContext } from 'react';
import { WordContext } from '../../context/WordContext';
function HangmanFigure() {
	const { errors, maxGuesses } = useContext(WordContext);
	const [ bodyParts, setBodyParts ] = useState([]);

	useEffect(
		() => {
			for (let i = 1; i <= maxGuesses; i++) {
				if (i === errors && bodyParts.length === errors - 1)
					setBodyParts([ ...bodyParts, <span key={i} className={`hangman hangman-${i}`} /> ]);
			}
		},
		[ errors, maxGuesses, bodyParts ]
	);

	return <div className="hangman-container">{bodyParts}</div>;
}

export default HangmanFigure;
