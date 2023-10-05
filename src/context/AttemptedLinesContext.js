import { createContext, useEffect, useState } from "react";
import { constants } from "../const/constants";
import axios from 'axios';

export const AttemptedLinesContext = createContext();

const AttemptedLinesContextProvider = ({ children }) => {
    const [secretWord, setData] = useState('');
    const [wordGuessedCorrectly, setWordGuessedCorrectly] = useState(false);
    const [attemptedlineValues, setAttemptedLineValues] = useState([]);

    const getWords = () => {
        axios
            .get('https://random-word-api.herokuapp.com/word?length=3&number=10&lang=en')
            .then((res) => {
                console.log('users', res.data)
                const secretWord = res.data[0];
                const split = [...secretWord];
                setData(split);
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    };

    const calculateGuess = (line) => {
        if (secretWord.includes(line.firstLetter.toLowerCase())) {
            line['firstLetterColor'] = constants.YELLOW
            if (line.firstLetter.toLowerCase() === secretWord[0]) {
                line['firstLetterColor'] = constants.GREEN
            }
        } else {
            line['firstLetterColor'] = constants.BLACK;
        }
        if (secretWord.includes(line.secondLetter.toLowerCase())) {
            line['secondLetterColor'] = constants.YELLOW;
            if (line.secondLetter.toLowerCase() === secretWord[1]) {
                line['secondLetterColor'] = constants.GREEN;
            }

        } else {
            line['secondLetterColor'] = constants.BLACK;
        }
        if (secretWord.includes(line.thirdLetter.toLowerCase())) {
            line['thirdLetterColor'] = constants.YELLOW;
            if (line.thirdLetter.toLowerCase() === secretWord[2]) {
                line['thirdLetterColor'] = constants.GREEN;
            }

        } else {
            line['thirdLetterColor'] = constants.BLACK;
        }
    }
    const CheckIfWon = (line) => {
        if (line.firstLetterColor === constants.GREEN &&
            line.secondLetterColor === constants.GREEN &&
            line.thirdLetterColor === constants.GREEN
        ) {
            setWordGuessedCorrectly(true);
        }
    }

    const addLine = (line) => {
        calculateGuess(line);
        CheckIfWon(line);
        setAttemptedLineValues(
            [...attemptedlineValues, line]
        )
    }
    useEffect(() => {
        getWords();
    }, []);


    return (
        <AttemptedLinesContext.Provider value={{ secretWord, attemptedlineValues, setAttemptedLineValues, addLine, getWords, wordGuessedCorrectly, setWordGuessedCorrectly }}>
            {children}
        </AttemptedLinesContext.Provider>
    )
}

export default AttemptedLinesContextProvider;