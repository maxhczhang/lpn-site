import React from 'react'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


export default function LPNFacts({isMobile}) {
    if (isMobile) {
        return (
            <Typography component="div">
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">8</Box>
                        <Box fontSize="h5.fontSize">Business Orgs Founded</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">39</Box>
                        <Box fontSize="h5.fontSize">Current Leadership Positions</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">5</Box>
                        <Box fontSize="h5.fontSize">Current President Positions</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">100%</Box>
                        <Box fontSize="h5.fontSize">Internship Placement Rate</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">2.5</Box>
                        <Box fontSize="h5.fontSize">Internships Per Active On Average</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">94%</Box> 
                        <Box fontSize="h5.fontSize">Full-time Offer Rate Prior To Graduation</Box>
                    </Grid>
                </Grid>
            </Typography>
        )
    } 
    
    else {
        return (
            <Typography component="div">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">8</Box>
                        <Box fontSize="h4.fontSize">Business Orgs Founded</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">39</Box>
                        <Box fontSize="h4.fontSize">Current Leadership Positions</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">5</Box>
                        <Box fontSize="h4.fontSize">Current President Positions</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">100%</Box>
                        <Box fontSize="h4.fontSize">Internship Placement Rate</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">2.5</Box>
                        <Box fontSize="h4.fontSize">Internships Per Active On Average</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">94%</Box> 
                        <Box fontSize="h4.fontSize">Full-time Offer Rate Prior To Graduation</Box>
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}
