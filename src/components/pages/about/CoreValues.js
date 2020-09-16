import React from 'react'

import Grid from '@material-ui/core/Grid';
import useWindowDimensions from '../../WindowListener'
import PlainCoreValue from './PlainCoreValue'


export default function CoreValues() {
    const { width } = useWindowDimensions();
    const isMobile = width < 700;
    
    let cols;
    if (isMobile) {
        cols = 12;
    } else {
        cols = 6;
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>

            <Grid item xs={cols} >
                <PlainCoreValue title="Curiosity" description="Our brothers explore 'what could be' and challenge the status quo by continously acquiring knowledge beyond our business concentrations."></PlainCoreValue>
            </Grid>
            
            <Grid item xs={cols}>
                <PlainCoreValue title="Excellence" description="Our brothers work to enhance their capabilities and character. Our pursuit to be remarkable leaders transforms ideas into reality."></PlainCoreValue>           
            </Grid>

            <Grid item xs={cols}>
                <PlainCoreValue title="Relationships" description="Our brotherhood emphasizes relationships, in the business world and community around us. Cultivating relationships means authentically loving people from worlds not of our own."></PlainCoreValue>     
            </Grid>

            <Grid item xs={cols}>
                <PlainCoreValue title="Integrity" description="We persevere for what is true and right in every decision. We aim to be the best versions of ourselves through hard work, tenacity, discipline, and ambition."></PlainCoreValue>    
            </Grid>

            <Grid item xs={cols}>
                <PlainCoreValue title="Altruism" description="Altruism means morally obligating oneself to the welfare of others, including our campus and community."></PlainCoreValue>   
            </Grid>
            
        </Grid>
    )
}
