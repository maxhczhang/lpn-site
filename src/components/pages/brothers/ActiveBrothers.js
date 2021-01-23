import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import { csuite } from './lists/csuite';
import { directors } from './lists/directors'
import { brothers } from './lists/brothers'
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
        <Box mt={12} mb={16} className={classes.root}>
            <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mb={10}>
                C-Suite
            </Box>
            <BrothersList brothers={csuite} isCsuite={true}></BrothersList>

            <Box mt={6}></Box>
            <Divider className={classes.divider}></Divider>

            <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mt={10} mb={10}>
                Directors
            </Box>
            <BrothersList brothers={directors} isCsuite={false}></BrothersList>

            <Box mt={6}></Box>
            <Divider className={classes.divider}></Divider>

            <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mt={10} mb={10}>
                Brothers
            </Box>
            <BrothersList brothers={brothers} isCsuite={false}></BrothersList>
        </Box>
    )
}
