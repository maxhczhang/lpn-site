import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "12vh"
    }
}));

export default function HeaderContent({pageNum}) {
    const msgs = ["A Business Leadership Fraternity.", "ΛΦΝ", "UC Irvine"]
    const classes = useStyles();

    switch(pageNum) {

        case 0:
            return (
                <Box className={classes.content}>
                    <Typography>
                        <Typist cursor={{show: false}}>

                        <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">{msgs[0]}</Box>
                        <Typist.Backspace count={msgs[0].length} delay={300}></Typist.Backspace>

                        <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">{msgs[1]}</Box>
                        <Box fontSize="h3.fontSize">{msgs[2]}</Box>

                        </Typist>
                    </Typography>
                </Box>
                
            )
            
        case 1:
            return (
                <Typography component="div">
                    <Box ml={6} mt={6} fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        About Us
                    </Box>
                </Typography>
            )

        case 2:
            return (
                <Box ml={6} mt={10} fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                    Active Brothers
                </Box>
            )

        case 3:
            return (
                <Typography variant="h1">Campus Involvement</Typography>
            )

        case 4:
            return (
                <Typography variant="h1">Careers</Typography>
            )
        case 5:
            return (
                <Typography variant="h1">Fall 2020</Typography>
            )
        case 6:
            return (
                <Typography variant="h1">Common Questions</Typography>
            )
        case 7:
            return (
                <Typography variant="h1">Our Memories</Typography>
            )
        case 8:
            return (
                <Typography variant="h1">Contact Us</Typography>
            )
    
        default:
            return (
                <Typography variant="h1">Hi :)</Typography>
            )
    }
}
