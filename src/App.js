import React from "react";
import Grid from './components/Grid';
import AttemptedLinesContextProvider from "./context/AttemptedLinesContext";
import './styles.css';
import { Typography, Container, ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Stack } from "@mui/material";
import Info from "./components/Info"
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Chip from '@mui/material/Chip';
import Footer from "./components/Footer";


const defaultTheme = createTheme();


function App() {
  return (
    <><ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "orange" }}>
            <VideogameAssetIcon sx={{ mr: 2 }}> </VideogameAssetIcon>
            <Typography variant="h6">Marvin's Game Room</Typography>
            <Typography style={{ marginLeft: 'auto'}}>About this App </Typography>
            <Info></Info>
          </Toolbar>
        </AppBar>

      <main>
        <Container maxWidth={"sm"} style={{ marginBottom: 50 }}>
          <Stack direction="row" spacing={2} justifyContent={"center"}>
            <Typography variant="h2" align="center">
              Wordle
            </Typography>
          </Stack >

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="left">
            <Chip style={{ backgroundColor: '#70c269' }}></Chip>
            <Typography variant="h5">
              Letter exist and is in the correct spot
            </Typography>
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="left">
            <Chip style={{ backgroundColor: '#e6cb7c' }}></Chip>
            <Typography variant="h5" >
              Letter exist but is not in the correct spot
            </Typography>
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            marginBottom={3}
            justifyContent="left">
            <Chip style={{ backgroundColor: '#d9d6d0' }}></Chip>
            <Typography variant="h5">
              Letter does not exist
            </Typography>
          </Stack>
          <AttemptedLinesContextProvider>
            <Grid></Grid>
          </AttemptedLinesContextProvider>
        </Container>
      </main>
      <Footer></Footer>
      </CssBaseline>
    </ThemeProvider>
    </>

  );
}

export default App;
