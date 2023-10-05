import React, { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { Modal, Typography, Box } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import { info } from "../const/constants";


const style = {
    position: 'absolute',
    overflowY: 'auto',
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Info = () => {
    const [modalOpen, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
        console.log('icon!')
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <div>
            <InfoIcon sx={{ mr: 2 }} onClick={handleOpen}></InfoIcon>
            <Modal
                open={modalOpen}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" textAlign={'center'} component="h2">
                        App Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ReactMarkdown>{info}</ReactMarkdown>
                    </Typography>
                </Box>
            </Modal>

        </div>

    )
}

export default Info;