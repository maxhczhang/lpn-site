import React from 'react'
import Box from '@material-ui/core/Box';

export default function ProfileSingle({profile, field, title}) {
    
    if (profile[field] !== "") {
        return (
            <React.Fragment>
                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                    {title}
                </Box>
                <Box fontSize="h6.fontSize">
                    {profile[field]}
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
