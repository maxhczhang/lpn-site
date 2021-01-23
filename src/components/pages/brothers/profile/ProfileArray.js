import React from 'react'

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function ProfileArray({ data, title, isMobile }) {

    if ((Array.isArray(data) && data.length > 0)) {

        return (
            <Box align="left">
                <Box fontWeight="fontWeightBold" fontSize={isMobile ? "h5.fontSize" : "h4.fontSize"}>
                    {title}
                </Box>
                <Box fontSize={isMobile ? "body1.fontSize" : "h6.fontSize"}>
                    <List>
                        {data.map((item, i) => (
                            <ListItem disableGutters={true}>
                                <ListItemText
                                    primary={isMobile ? item : <Box fontSize="h5.fontSize">{item}</Box>}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        )      
    }
    
    else {
        return ( <React.Fragment></React.Fragment> )
    }
}
