import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import {csuite} from './lists/csuite';
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
    divider: {
        height: 1,
        width: "70%",
        marginTop: 50
    }
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

            <Divider className={classes.divider}></Divider>

            <Box fontWeight="fontWeightBold" fontSize="h3.fontSize" mt={6} mb={2}>
                Directors
            </Box>
            <BrothersList brothers={directors} isCsuite={false}></BrothersList>

            <Divider className={classes.divider}></Divider>

            <Box fontWeight="fontWeightBold" fontSize="h3.fontSize" mt={6}>
                Brothers
            </Box>
            <BrothersList brothers={brothers} isCsuite={false}></BrothersList>
        </Box>
    )
}
