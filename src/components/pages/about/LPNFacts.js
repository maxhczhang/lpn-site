import React from 'react'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


export default function LPNFacts({isMobile}) {
    if (isMobile) {
        return (
            <Typography variant="h6">
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightMedium">9 Business Orgs Founded</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightMedium">30 Current Leadership Positions</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box  fontWeight="fontWeightMedium">33 President Positions Held</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightMedium">100% Internship Placement Rate</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightMedium">2.2 Internships Per Active On Average</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box fontWeight="fontWeightMedium">94% Full-time Offer Rate Prior To Graduation</Box>
                    </Grid>
                </Grid>
            </Typography>
        )
    } 
    
    else {
        return (
            <Typography variant="h5">
                <Grid container spacing={10}>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">9 Business Orgs Founded</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">30 Current Leadership Positions</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">5 Current President Positions</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">100% Internship Placement Rate</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">2.2 Internships Per Active On Average</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box fontWeight="fontWeightMedium">94% Full-time Offer Rate Prior To Graduation</Box>
                    </Grid>
                </Grid>
            </Typography>
        )
    }
}
