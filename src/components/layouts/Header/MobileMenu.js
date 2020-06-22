import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
}));

export default function MobileMenu() {
    const classes = useStyles();

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" {...bindTrigger(popupState)}>
                        <MenuIcon />
                    </IconButton>
                    
                    <Menu {...bindMenu(popupState)}>

                        <MenuItem onClick={popupState.close} component={Link} to="/">Home</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/about">About</MenuItem>
                        
                        <MenuItem onClick={popupState.close} component={Link} to="/active-brothers">Active Brothers</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/campus-involvement">Campus Involvements</MenuItem>

                        <MenuItem onClick={popupState.close} component={Link} to="/careers">Careers</MenuItem>

                        <MenuItem onClick={popupState.close} component={Link} to="/fall-rush-2020">Rush</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/faqs">FAQs</MenuItem>

                        <MenuItem onClick={popupState.close} component={Link} to="/gallery">Gallery</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/contact">Contact</MenuItem>

                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}
