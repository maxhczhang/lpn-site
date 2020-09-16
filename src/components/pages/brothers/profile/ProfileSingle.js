import React from 'react'

import Box from '@material-ui/core/Box';


export default function ProfileSingle({profile, field, title, isMobile}) {
    
    if (profile[field] !== "") {

        if (isMobile) {
            return (
                <Box align="left" mb={2}>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize" mb={1}>
                        {profile[field]}
                    </Box>
                </Box>
            )
        } else {
            return (
                <Box align="left" mb={2}>
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" mb={1}>
                        {title}
                    </Box>
                    <Box fontSize="h6.fontSize" mb={4}>
                        {profile[field]}
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
