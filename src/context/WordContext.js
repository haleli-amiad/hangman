import { createContext, useState, useEffect } from 'react'
import { words } from '../words'
export const WordContext = createContext()

export const WordProvider = ({ children }) => {
    const [correctLetters, setCorrectLetters] = useState(0)
    const [errors, setErrors] = useState(1)
    const [word, setWord] = useState(null)
    const [inputValues, setInputValues] = useState([])
    const [isLost, setIsLost] = useState(false)
    const [isWon, setIsWon] = useState(false)
    // const [victoryPoints, setVictoryPoints] = useState(0)
    const maxGuesses = 9;

    useEffect(() => {
        if (word) {
            // eslint-disable-next-line no-unused-vars
            const victory = correctLetters === word.length ? setIsWon(true) : null
            // eslint-disable-next-line no-unused-vars
            const lost = errors === maxGuesses ? setIsLost(true) : null
        }
    }, [word, correctLetters, errors, isWon, isLost])

    useEffect(() => {
        if (word && !inputValues.length) {
            word.split('').forEach((l) => setInputValues(inputValues => [...inputValues, { value: '' }]))
        }
    }, [word, inputValues])

    useEffect(() => {
        const values = JSON.parse(JSON.stringify(inputValues))
        const nonEmptyValues = values.filter((input) => input.value !== '')
        setCorrectLetters(nonEmptyValues.length)
    }, [inputValues])

    useEffect(() => {
        const randomWord = (Math.random() * words.length - 1).toFixed();
        if (!word) setWord(words[randomWord])
    }, [word])

    return (
        <WordContext.Provider
            value={{
                errors, setErrors, word, setWord, maxGuesses,
                inputValues, setInputValues, isWon, setIsWon, isLost, setIsLost
            }}>
            {children}
        </WordContext.Provider>
    )
}