import { Stack, TextField } from '@mui/material';

const AttemptedLines = (props) => {

    const lineValues = props;

    return (
        <Stack direction={'row'} spacing={2}>
            <TextField value={lineValues.firstLetter} variant="standard"
                inputProps={{ style: { fontSize: '26px', backgroundColor: lineValues.firstLetterColor, textAlign: 'center' } }}
            ></TextField>
            <TextField value={lineValues.secondLetter} variant="standard"
                inputProps={{ style: { fontSize: '26px', backgroundColor: lineValues.secondLetterColor, textAlign: 'center' } }}
            ></TextField>
            <TextField value={lineValues.thirdLetter} variant="standard"
                inputProps={{ style: { fontSize: '26px', backgroundColor: lineValues.thirdLetterColor, textAlign: 'center' } }}
            ></TextField>
        </Stack>
    )
}

export default AttemptedLines;