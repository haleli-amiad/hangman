import './index.scss';
import LetterInput from '../LetterInput/LetterInput'
import {WordContext} from '../../context/WordContext'
import {useContext} from 'react'
function Word() {
    const {word} = useContext(WordContext)
    return (
        <span className="word-container">
        {word && <p>{word.split('').map((letter, index)=> <LetterInput  letterIndex={index} key={index}/>)}</p>}
        </span>
    )
}
export default Word