import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import ReactMarkdown from 'react-markdown';
import GitHubIcon from '@mui/icons-material/GitHub';
import { vistLinkedIn } from '../const/constants';
import { Stack } from '@mui/material';
import Info from './Info';

const Footer = () => {

    return (
        <AppBar position="static">
            <Toolbar style={{ backgroundColor: "orange" }}>
                <Stack direction={'row'} style={{ marginLeft: 'auto' }}>
                <Typography >
                    Author: Marvin Sankar
                    <a href="https://www.linkedin.com/in/marvin-sankar-1508947/" target="_blank" rel="noopener noreferrer">
                        <IconButton color="primary" aria-label="LinkedIn Profile">
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                </Typography>               
                <Typography >
                    Source code
                    <a href="https://github.com/marvin1030/react-wordle" target="_blank" rel="noopener noreferrer">
                        <IconButton color="primary" aria-label="github">
                            <GitHubIcon />
                        </IconButton>
                    </a>
                </Typography>
                </Stack>


            </Toolbar>
        </AppBar>
    );
};

export default Footer;
