import React from 'react'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { usePopupState, bindHover, bindMenu, } from 'material-ui-popup-state/hooks'

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
}));

export default function MyMenu({title1, title2, setPage}) {
    const classes = useStyles();

    const popupState = usePopupState({ variant: 'popover', popupId: 'myMenu' })

    const menuClose1 = () => {
        popupState.close()
        setPage(title1)
    }

    const menuClose2 = () => {
        popupState.close()
        setPage(title2)
    }

    return (
        <React.Fragment>
            <Button size="large" className={classes.button} {...bindHover(popupState)}>
                Brothers
            </Button>
            <Menu {...bindMenu(popupState)}
                className={classes.menu} classes={{
                    paper: classes.paper,
                }}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <Typography>
                    <MenuItem onClick={menuClose1}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title1}
                        </Box>                        
                    </MenuItem>
                    <MenuItem onClick={menuClose2}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title2}
                        </Box>  
                    </MenuItem>
                 </Typography>
                 
            </Menu>
        </React.Fragment>
    )
}
