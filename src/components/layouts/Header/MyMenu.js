import React from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { usePopupState, bindHover, bindMenu, } from 'material-ui-popup-state/hooks'

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
}));

export default function MyMenu({mainTitle, title1, title2, setPage}) {
    const classes = useStyles();

    const popupState = usePopupState({ variant: 'popover', popupId: 'myMenu' })

    const titleToPath = (title) => {
        const path = title.toLowerCase().replace(/ +/g, '-')
        return '/' + path
    }

    return (
        <React.Fragment>
            <Button size="large" className={classes.button} {...bindHover(popupState)}>
                {mainTitle}
            </Button>
            <Menu {...bindMenu(popupState)}
                className={classes.menu} classes={{
                    paper: classes.paper,
                }}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <Typography component="div">
                    <MenuItem component={Link} to={titleToPath(title1)} onClick={popupState.close}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title1}
                        </Box>                        
                    </MenuItem>
                    <MenuItem component={Link} to={titleToPath(title2)} onClick={popupState.close}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title2}
                        </Box>  
                    </MenuItem>
                 </Typography>
                 
            </Menu>
        </React.Fragment>
    )
}
