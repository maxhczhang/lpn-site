import React from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist'

export default function HeaderContent({pageNum}) {
    const msg = "A Business Leadership Fraternity."
    const msg2 = "Grow Forward. Give Back."

    switch(pageNum) {

        case 0:
            return (
                <Typography component="div">
                    <Box ml={6} mt={15} fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                        <Typist cursor={{show: false}}>
                        <Box>{msg}</Box>
                        <Typist.Backspace count={msg.length} delay={300}></Typist.Backspace>
                        <Box>{msg2}</Box>
                        </Typist>
                    </Box>
                </Typography>
            )
            
        case 1:
            return (
                <Typography component="div">
                    <Box ml={6} mt={10} fontWeight="fontWeightMedium" fontSize="h1.fontSize">
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
                <Typography variant="h1">Careers!</Typography>
            )

        case 4:
            return (
                <Typography variant="h1">Fall Rush 2020!</Typography>
            )
    
        default:
            return (
            <Typography variant="h1">Hi :)</Typography>
            )
    }
}
