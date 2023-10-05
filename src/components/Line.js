import React, { useContext, useEffect, useRef, useState } from 'react';
import { AttemptedLinesContext } from '../context/AttemptedLinesContext';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
    {
        field: {
            margintop: 20,
            marginBottom: 20,
            marginRight: 20,
            display: 'block',
        },
        underline: {
            '&:before': {
                borderBottom: 'none',
            },
            '&:after': {
                borderBottom: '2px solid ' + 'black',
            },
            '&:hover:not($disabled):not($focused):not($error):before': {
                borderBottom: '2px solid ' + 'black',
            },
        },
    }
);

const Line = () => {
    const classes = useStyles();

    const { secretWord, addLine, getWords, setAttemptedLineValues, setWordGuessedCorrectly, wordGuessedCorrectly } = useContext(AttemptedLinesContext);

    const [lineValues, setLineValues] = useState(
        { firstLetter: '', secondLetter: '', thirdLetter: '' }
    );

    const [playAgainClicked, setPlayAgainClicked] = useState(true);

    const [revealWord, setRevealWord] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addLine(lineValues);
        setLineValues({ firstLetter: '', secondLetter: '', thirdLetter: '', id: '' })
        inputRef1.current.focus();
        setPlayAgainClicked(false);
    }

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (playAgainClicked) {
            inputRef1.current.focus();
        }
    }, [playAgainClicked]);

    const handleOnChange = (e) => {
        const value = e.target.value.toUpperCase();
        const id = e.target.id;

        switch (id) {
            case 'firstLetter':
                setLineValues(
                    { ...lineValues, 'firstLetter': value, id: Math.random() }
                );
                inputRef2.current.focus();
                break;
            case 'secondLetter':
                setLineValues(
                    { ...lineValues, 'secondLetter': value, id: Math.random() }
                );
                inputRef3.current.focus();
                break;
            case 'thirdLetter':
                setLineValues(
                    { ...lineValues, 'thirdLetter': value, id: Math.random() }
                )
                buttonRef.current.focus();
                break;
            default:
                return lineValues;
        }
    }

    const playAgain = () => {
        setAttemptedLineValues([]);
        setWordGuessedCorrectly(false);
        setRevealWord(false);
        getWords();
        setPlayAgainClicked(true);

    }

    const onRevealWord = () => {
        setRevealWord(true);
    }

    return (
        <Container>{
            wordGuessedCorrectly ?
                <Stack justifyItems={'center'}>
                    <Typography style={{ marginTop: 20 }} variant="h5" align="center"> You Guessed Correct!!</Typography>
                    <Button onClick={playAgain} variant='contained' style={{ margin: '10px', backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'darkorange' } }}> Play Again</Button>
                </Stack>
                :
                <div>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <Stack direction={'row'} spacing={2}>
                            <TextField inputRef={inputRef1} variant="standard" id='firstLetter' value={lineValues.firstLetter} onChange={handleOnChange} inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '26px' } }}  ></TextField>
                            <TextField inputRef={inputRef2} variant="standard" id='secondLetter' value={lineValues.secondLetter} onChange={handleOnChange} inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '26px' } }}  ></TextField>
                            <TextField inputRef={inputRef3} variant="standard" id='thirdLetter' value={lineValues.thirdLetter} onChange={handleOnChange} inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '26px' } }}  ></TextField>
                            <Button ref={buttonRef} variant='contained' style={{ margin: '10px', backgroundColor: 'orange', color: 'white', '&:hover': { backgroundColor: 'darkorange' } }} onClick={handleSubmit}> Submit</Button>
                        </Stack>
                    </form>
                    <div>
                        {revealWord ?
                            <Typography style={{ marginTop: 20 }} variant="h5" align="center">{secretWord}</Typography>
                            :
                            <Typography style={{ marginTop: 20 }} variant="h5" align="center" onClick={onRevealWord}>Reveal Word</Typography>
                        }
                    </div>

                </div>

        }
        </Container>
    )
}

export default Line;