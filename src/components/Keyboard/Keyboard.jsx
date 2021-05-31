import './index.scss';
import Letter from '../Letter/Letter'
function Keyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
        <div className="keyboard-container">{letters.split('').map((letter, index)=> <Letter letter={letter} key={index}/>)}</div>
    )
}
export default Keyboard