import React from 'react'

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function ProfileSingle({profile, field, title, isMobile}) {
    
    if (profile[field] !== "") {

        if (isMobile) {
            return (
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize" mb={1}>
                        {profile[field]}
                    </Box>
                </Typography>
            )
        } else {
            return (
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="h6.fontSize" mb={2}>
                        {profile[field]}
                    </Box>
                </Typography>
            )
        }
    }
    else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
