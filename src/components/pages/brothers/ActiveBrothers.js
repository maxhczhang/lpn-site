import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { csuite } from './lists/csuite';
import {directors} from './lists/directors'
import BrothersList from './BrothersList'

import styles from './brothers.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
}));

export default function ActiveBrothers({ setPage }) {
    useEffect(() => {
        setPage("Active Brothers")
    });

    const classes = useStyles();
    const [isAboutMe, setAboutMe] = useState(0);
    const [brother, setBrother] = useState('');
   
    const goToAbout = (name) => {
        setAboutMe(1);
        setBrother(name)
    }

    return (
        <div className={classes.root}>
            <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mt={6} mb={2}>
                C-Suite
            </Box>
            <BrothersList brothers={csuite}></BrothersList>

            <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mt={6} mb={2}>
                Directors
            </Box>
            <BrothersList brothers={directors}></BrothersList>

            <Box mt={6}>

            </Box>
        </div>
    )
}
