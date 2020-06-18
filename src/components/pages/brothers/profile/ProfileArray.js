import React from 'react'
import Box from '@material-ui/core/Box';

export default function ProfileArray({profile, field, title}) {
    
    if ((Array.isArray(profile[field]) && profile[field].length > 0)) {
        return (
            <React.Fragment>
                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                    {title}
                </Box>
                <Box fontSize="h6.fontSize">
                    {profile[field].map((item) => <li>{item}</li>)}
                </Box>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
