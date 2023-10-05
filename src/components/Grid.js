import React, { useContext, useEffect , useRef} from 'react';
import Line from './Line';
import AttemptedLines from './AttemptedLines';
import { AttemptedLinesContext } from '../context/AttemptedLinesContext';
import { Container, Typography } from '@mui/material';
const Grid = () => {

    const { attemptedlineValues } = useContext(AttemptedLinesContext)
    return (
        <Container maxWidth={"sm"}>
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
                    <Typography style={{ marginTop: 20 }} variant="h5" align="center"> Make your first guess!</Typography>
            }
            <Line></Line>
        </Container>

    )
}
export default Grid;