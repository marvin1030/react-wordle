import React, { useContext, useState } from 'react';
import { AttemptedLinesContext } from '../context/AttemptedLinesContext';


const Line = () => {

    const { secretWord, addLine, getWords, setAttemptedLineValues, setWordGuessedCorrectly, wordGuessedCorrectly } = useContext(AttemptedLinesContext);

    const [lineValues, setLineValues] = useState(
        { firstLetter: '', secondLetter: '', thirdLetter: '' }
    )

    const [revealWord, setRevealWord] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addLine(lineValues);
        setLineValues({ firstLetter: '', secondLetter: '', thirdLetter: '', id: '' })

    }

    const handleOnChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        switch (id) {
            case 'firstLetter':
                setLineValues(
                    { ...lineValues, 'firstLetter': value, id: Math.random() }
                );
                break;
            case 'secondLetter':
                setLineValues(
                    { ...lineValues, 'secondLetter': value, id: Math.random() }
                );
                break;
            case 'thirdLetter':
                setLineValues(
                    { ...lineValues, 'thirdLetter': value, id: Math.random() }
                )
                break;
            default:
                return lineValues;
        }
    }

    const startOver = () => {
        setAttemptedLineValues([]);
        setWordGuessedCorrectly(false);
        setRevealWord(false);
        getWords();
    }

    const onRevealWord = () => {
        setRevealWord(true);

    }

    return (
        <div>{
            wordGuessedCorrectly ?
                <div>
                    <p>You Guessed Correctly!!</p>
                    <button onClick={startOver}> Play Again</button>
                </div>

                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <input id='firstLetter' value={lineValues.firstLetter} onChange={handleOnChange} maxLength={1} style={{ backgroundColor: '', fontSize: '25px', width: '64px', textAlign: 'center' }}></input>
                        <input id='secondLetter' name='joe' value={lineValues.secondLetter} onChange={handleOnChange} maxLength={1} style={{ backgroundColor: '', fontSize: '25px', width: '64px', textAlign: 'center' }}></input>
                        <input id='thirdLetter' value={lineValues.thirdLetter} onChange={handleOnChange} maxLength={1} style={{ backgroundColor: '', fontSize: '25px', width: '64px', textAlign: 'center' }}></input>
                        <button>Submit</button>
                    </form>
                    <div>
                        {revealWord? 
                         <p>{secretWord}</p>
                        :
                        <a onClick={onRevealWord}>Reveal Word</a>
                    }
                        
                    </div>
                    
                </div>

        }
        </div>
    )
}

export default Line;