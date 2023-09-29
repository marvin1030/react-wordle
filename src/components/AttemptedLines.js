const AttemptedLines = (props) => {

    const lineValues = props;

    return (
           <div style={{overflowY:'auto'}}>
                <input value={lineValues.firstLetter} readOnly style={{backgroundColor: lineValues.firstLetterColor, fontSize:'25px', width: '64px', textAlign: 'center'}}></input>
                <input value={lineValues.secondLetter} readOnly style={{backgroundColor: lineValues.secondLetterColor, fontSize:'25px', width: '64px', textAlign: 'center'}}></input>
                <input value={lineValues.thirdLetter} readOnly style={{backgroundColor: lineValues.thirdLetterColor, fontSize:'25px', width: '64px', textAlign: 'center'}}></input>
           </div>
    )
}

export default AttemptedLines;