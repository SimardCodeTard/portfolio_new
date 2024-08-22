'use client'

import './contact.css';

import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Slide, SlideProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export default function ContactFooter () {
    function SlideTransition(props: SlideProps) {
        return<Slide {...props} direction="up" />;
    }

    const [snackBarState, setSnackBarState] =  React.useState<{
        open: boolean;
        Transition: React.ComponentType<TransitionProps & { children: React.ReactElement<any, any>; }>;
        }>({ open: false, Transition: Slide, }
    );
    
    const mail='simon.menardp03gmail.com'

    const copyMail = () => {
        navigator.clipboard.writeText(mail);
        setSnackBarState({
            open: true,
            Transition: SlideTransition
        });
    }

    const handleClose = (
        _event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackBarState({
            ...snackBarState,
            open: false,
        });
      };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return <div id="contact" className="w-full h-fit px-12 py-24 flex items-center justify-evenly space-x-4">
        <p className='text-center'> <PhoneAndroidIcon/> 06 16 08 08 26</p>
        <p className="text-center cursor-pointer" onClick={copyMail}> <EmailIcon/>{mail}</p>
        <Link href="https://github.com/SimardCodeTard"><GitHubIcon></GitHubIcon> Mes projets</Link>
        <Snackbar open={snackBarState.open} 
            TransitionComponent={snackBarState.Transition} 
            key={snackBarState.Transition.name}
            autoHideDuration={2000} 
            onClose={handleClose} 
            action={action}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Adresse mail copiée !
            </Alert>
        </Snackbar>
    </div>
}