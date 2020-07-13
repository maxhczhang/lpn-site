import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { csuite } from './lists/csuite';
import {directors} from './lists/directors'
import {brothers} from './lists/brothers'
import BrothersList from './BrothersList'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
}));

export default function ActiveBrothers({ setPage }) {
    useEffect(() => {
        setPage("Active Brothers")
    });

    const classes = useStyles();

    return (
        <Box mt={8} mb={8} className={classes.root}>
            <Box fontWeight="fontWeightBold" fontSize="h3.fontSize" mb={2}>
                C-Suite
            </Box>
            <BrothersList brothers={csuite} isCsuite={true}></BrothersList>

            <Box fontWeight="fontWeightBold" fontSize="h3.fontSize" mt={8} mb={2}>
                Directors
            </Box>
            <BrothersList brothers={directors} isCsuite={false}></BrothersList>

            <Box fontWeight="fontWeightBold" fontSize="h3.fontSize" mt={8}>
                Brothers
            </Box>
            <BrothersList brothers={brothers} isCsuite={false}></BrothersList>
        </Box>
    )
}
