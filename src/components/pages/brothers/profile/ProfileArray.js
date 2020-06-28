import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function ProfileArray({profile, field, title, isMobile}) {
    
    if ((Array.isArray(profile[field]) && profile[field].length > 0)) {

        if (isMobile) {
            return (
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize" mb={1}>
                        {profile[field].map((item, i) => <li key={i}>{item}</li>)}
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
                        {profile[field].map((item, i) => <li key={i}>{item}</li>)}
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
