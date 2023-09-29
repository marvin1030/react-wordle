import React, { useContext } from 'react';
import Line from './Line';
import AttemptedLines from './AttemptedLines';
import { AttemptedLinesContext } from '../context/AttemptedLinesContext';
const Grid = () => {

    const { attemptedlineValues } = useContext(AttemptedLinesContext)
    return (
        <div>
            {
                attemptedlineValues.length ?
                attemptedlineValues.map((line) => {
                        return (
                            <AttemptedLines key={line.id}
                                firstLetter={line.firstLetter}
                                secondLetter={line.secondLetter}
                                thirdLetter={line.thirdLetter}
                                firstLetterColor={line.firstLetterColor}
                                secondLetterColor={line.secondLetterColor}
                                thirdLetterColor={line.thirdLetterColor}                               
                                >
                            </AttemptedLines>)
                    })
                    :
                    <p>Make your first guess!</p>
            }
                    <Line></Line>
        </div>

    )
}
export default Grid;