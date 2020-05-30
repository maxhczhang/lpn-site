import React from 'react'

import Grid from '@material-ui/core/Grid';
import CoreValue from './CoreValue'

import curiosity from '../../../static/coreValues/curiosity.png'
import excellence from '../../../static/coreValues/excellence.png'
import relationships from '../../../static/coreValues/relationships.png'
import integrity from '../../../static/coreValues/integrity.png'
import altruism from '../../../static/coreValues/altruism.png'


export default function CoreValues() {

    return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">

            <Grid item xs >
                <CoreValue 
                    image={curiosity} 
                    title="Curiosity"
                    desc="Our brothers explore what could be and challenge
                        the status quo. We strive to become better versions of ourselves and
                        to better impact our communities."
                ></CoreValue>
            </Grid>
            
            <Grid item xs>
                <CoreValue
                    image={excellence}
                    title="Excellence"
                    desc="Our brothers work to enhance their capabilities
                        and character. Our pursuit to be remarkable leaders transforms
                        ideas into reality."
                ></CoreValue>                
            </Grid>

            <Grid item xs>
                <CoreValue
                    image={relationships}
                    title="Relationships"
                    desc="Our brotherhood emphasizes relationships, in the business world and
                        community around us. Cultivating relationships means authentically loving people
                        from worlds not of our own."
                ></CoreValue>         
            </Grid>

            <Grid item xs>
                <CoreValue
                    image={integrity}
                    title="Integrity"
                    desc="We persevere for what is true and right in every decision. We aim to be the
                        best versions of ourselves through hard work, tenacity, discipline, and ambition."
                ></CoreValue>         
            </Grid>

            <Grid item xs>
                <CoreValue
                    image={altruism}
                    title="Altruism"
                    desc="Altruism means morally obligating oneself to the welfare of others. Success means
                        having an impact on our campus and community."
                ></CoreValue>        
            </Grid>
            
        </Grid>
    )
}
