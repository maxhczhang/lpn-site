import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import colorLogo from '../../../assets/lpn_assets/logo.png'
import useWindowDimensions from '../../utils/WindowListener'


const useStyles = makeStyles((theme) => ({
    formStyle: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    },
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    logo: {
        height: 200,
        width: 200
    },
    mobileLogo: {
        height: 150,
        width: 150
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(150,74,93)"
        }
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    snack: {
        backgroundColor: "#580C1F",
        color: "white"
    },
    field: {
        width: "60%"
    }
}));


const postToServer = async (newRow, setMessage, setOpen) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRow)
    };

    const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : 'https://silver-stroopwafel-31bcbb.netlify.app/';

    fetch(baseURL + 'submit-form', requestOptions)
        .then((response) => {
            if (!response.ok) {
                setMessage("Error with your submission! Please contact us through any of our socials.");
            }
            else {
                setMessage("We'll get back to you soon!");
            }
            setOpen(true);
            return response.json();
        });
        //.then(data => console.log(data));
};


export default function Contact({ setPage }) {
    useEffect(() => {
        setPage("Contact")
    });

    const classes = useStyles();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    const resetState = () => {
        setName('');
        setYear('');
        setEmail('');
        setQuestion('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = [name, year, email, question, new Date(Date.now()).toString()];
        postToServer(newRow, setMessage, setOpen).then(resetState);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box mt={8} mb={14} className={classes.root}>
            
            <Box mt={4}></Box>
            <img className={isMobile ? classes.mobileLogo : classes.logo} src={colorLogo} alt="LPN"></img>
            
            <form onSubmit={handleSubmit}>
                <Grid container spacing={7}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            multiline
                            id="firstName"
                            name="firstName"
                            label="Name"
                            onInput={e => setName(e.target.value)}
                            value={name}
                            className={classes.field}
                        />
                    </Grid>
                
                    <Grid item xs={12} >
                        <TextField
                            id="year"
                            name="year"
                            label="Year"
                            onInput={e => setYear(e.target.value)}
                            value={year}
                            className={classes.field}
                            multiline
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            required
                            multiline
                            onInput={e => setEmail(e.target.value)}
                            value={email}
                            className={classes.field}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="question"
                            name="question"
                            label="Question"
                            required
                            multiline
                            onInput={e => setQuestion(e.target.value)}
                            value={question}
                            className={classes.field}
                        />
                    </Grid>

                </Grid>

                <Box mt={11} className={classes.buttonWrapper} style={{maxWidth: "80%"}}>
                    <Button className={classes.button} type="submit">Submit</Button>
                </Box>
            </form>

            <Snackbar
                className={classes.snack}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent 
                    className={classes.snack} 
                    message={message} action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                ></SnackbarContent>
            </Snackbar>
            
        </Box>
    )
}
