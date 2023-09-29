import React from "react";
import Grid from './components/Grid';
import AttemptedLinesContextProvider from "./context/AttemptedLinesContext";
import './styles.css'; 

function App() {
  return (
    <div className="App">
      <h2>Guess the word!</h2>
      <p style={{backgroundColor: '#70c269', fontSize:'20px', width: '424px', textAlign: 'center'}}>Letter exist and is in the correct spot</p>
      <p style={{backgroundColor: '#e6cb7c', fontSize:'20px', width: '424px', textAlign: 'center'}}>Letter exist but is not in the correct spot</p>
      <p style={{backgroundColor: '#d9d6d0', fontSize:'20px', width: '424px', textAlign: 'center'}}>Letter does not exist</p>
      <AttemptedLinesContextProvider>
        <Grid></Grid>
      </AttemptedLinesContextProvider>
    </div>
  );
}

export default App;
