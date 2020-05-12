import React from 'react'

import '../../../App.css'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import curiosity from '../../../static/coreValues/curiosity.png'
import excellence from '../../../static/coreValues/excellence.png'
import relationships from '../../../static/coreValues/relationships.png'
import integrity from '../../../static/coreValues/integrity.png'
import altruism from '../../../static/coreValues/altruism.png'


export default function CoreValues() {
    return (
        <Typography variant="body1">
            <Grid container spacing={3}>
                <Grid item xs>
                    <div class="container">
                        <img src={curiosity} alt="Curiosity" class="image"></img>
                        <div class="overlay">
                            <div class="text">
                                Curisoity Our brothers consistently explore what could be and challenge
                                the status quo. We strive to become better versions of ourselves and
                                to better impact our communities.
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>
                    <div class="container">
                        <img src={excellence} alt="Excellence" class="image"></img>
                        <div class="overlay">
                            <div class="text">
                                Excellence Our brothers persistently work to enhance their capabilities
                                and character. The pursuit to be remarkable leaders transforms
                                ideas into reality.
                             </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>
                    <div class="container">
                        <img src={relationships} alt="Relationships" class="image"></img>
                        <div class="overlay">
                            <div class="text">
                                Relationships Our brotherhood emphasizes relationships, in the business world and
                                community around us. Cultivating relationships means authentically loving people
                                from worlds not of one's own and appreciating the diversity of
                                the world around them.
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>
                    <div class="container">
                        <img src={integrity} alt="Integrity" class="image"></img>
                        <div class="overlay">
                            <div class="text">
                                Integrity Persevering for what is true and right in every decision. We aim to be the
                                best versions of ourselves through hard work, tenacity, discipline, and ambition.
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>
                    <div class="container">
                        <img src={altruism} alt="Altruism" class="image"></img>
                        <div class="overlay">
                            <div class="text">
                                Altruism Morally obligating oneself to the welfare of others. Success means
                                having an impact on our campus and community.
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Typography>
    )
}
