import React from 'react'

import Box from '@material-ui/core/Box';


export default function ProfileSingle({title, data, isMobile}) {
    
    if (data !== "") {

        if (isMobile) {
            return (
                <Box align="left" mb={2}>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize" mb={1}>
                        {data}
                    </Box>
                </Box>
            )
        } 
        
        else {
            return (
                <Box align="left" mb={2}>
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" display="inline">
                        {title}:
                    </Box>
                    <Box fontSize="h4.fontSize" ml={1} mb={4} display="inline">
                        {data}
                    </Box>
                </Box>
            )
        }
    }
    
    else {
        return ( <React.Fragment></React.Fragment> )
    }
}
