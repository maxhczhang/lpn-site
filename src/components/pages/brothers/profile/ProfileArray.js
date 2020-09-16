import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    li: {
        marginBottom: 10
    },
    liMobile: {
        marginBottom: 8
    }
}));


export default function ProfileArray({profile, field, title, isMobile}) {
    const classes = useStyles();
    
    if ((Array.isArray(profile[field]) && profile[field].length > 0)) {

        if (isMobile) {
            return (
                <Box mb={2} align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" mb={1}>
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize" mb={1}>
                        {profile[field].map((item, i) => <li key={i} className={classes.liMobile}>{item}</li>)}
                    </Box>
                </Box>
            )
        } else {
            return (
                <Box mb={2} align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" mb={1}>
                        {title}
                    </Box>
                    <Box fontSize="h6.fontSize" mb={4}>
                        {profile[field].map((item, i) => <li key={i} className={classes.li}>{item}</li>)}
                    </Box>
                </Box>
            )
        }
    }
    else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
