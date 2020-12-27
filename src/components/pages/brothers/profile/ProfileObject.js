import React from 'react'

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function ProfileObject({data, title, isMobile}) {
    
    if (data) {

        if (isMobile) {
            return (
                <Box align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize">
                        <List>
                            {Object.keys(data).map((position, i) => (
                                <ListItem disableGutters={true}>
                                    <ListItemText
                                        primary={position}
                                        secondary={data[position] && data[position]} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            )
        } 
        
        else {
            return (
                <Box align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="h6.fontSize">
                        <List>
                            <List>
                            {Object.keys(data).map((position, i) => (
                                <ListItem disableGutters={true}>
                                    <ListItemText
                                        primary={<Box fontSize="h5.fontSize">{position}</Box>}
                                        secondary={data[position] && <Box fontSize="h6.fontSize">{data[position]}</Box>} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                        </List>
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
