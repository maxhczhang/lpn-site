import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import colorLogo from '../../../assets/lpn_assets/logo.png'
// import { GoogleSpreadsheet } from 'google-spreadsheet'


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
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white"
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const isEmail = (_email) => {
    return _email.includes("@") && _email.includes(".com")
}

export default function Contact({ setPage }) {
    useEffect(() => {
        setPage("Contact")
    });

    const classes = useStyles();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('@gmail.com');
    const [question, setQuestion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // const doc = new GoogleSpreadsheet('1LkEtI4cG36YZE6bWFR-ZqMcWcX7yMu7nXWuNyPCVevU')

        // const appendSpreadsheet = async (row) => {
        //     try {
        //         await doc.useServiceAccountAuth(require('./config.json'));
        //         await doc.loadInfo();
        //         const sheet = doc.sheetsById['0'];
        //         const result = await sheet.addRow(row);
        //     } catch (e) {
        //         console.error('Error: ', e);
        //     }
        // };

        const newRow = {Name: name, Year: year, Email: email, Question: question};
        // appendSpreadsheet(newRow);
    };

    return (
        <Box mt={6} mb={10} className={classes.root}>
            <img className={classes.logo} src={colorLogo} alt="LPN"></img>
            
            <form onSubmit={handleSubmit} style={{maxWidth: "80%"}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Name"
                            onInput={e => setName(e.target.value)}
                        />
                    </Grid>
                
                    <Grid item xs={4} >
                        <TextField
                            id="year"
                            name="year"
                            label="Year"
                            onInput={e => setYear(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            required
                            onInput={e => setEmail(e.target.value)}
                            error={!isEmail(email)}
                            helperText={!isEmail(email) && "Enter a valid email."}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="question"
                            name="question"
                            label="Question"
                            required
                            style={{width:"70%"}}
                            multiline
                            onInput={e => setQuestion(e.target.value)}
                        />
                    </Grid>

                </Grid>

                <Box mt={4} className={classes.buttonWrapper}>
                    <Button className={classes.button} type="submit">Submit</Button>
                </Box>
            </form>
        </Box>
    )
}
