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
    paper: {
        color: "white",
        backgroundColor: "rgb(90,90,90)"
    },
    menuItem: {
        "&:hover": {
            backgroundColor: "rgb(70,70,70)"
        }
    }
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
                    
                    <Menu {...bindMenu(popupState)} classes={{ paper: classes.paper }}>

                        <MenuItem onClick={popupState.close} component={Link} to="/" className={classes.menuItem}>Home</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/about" className={classes.menuItem}>About</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/active-brothers" className={classes.menuItem}>Active Brothers</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/campus-involvement" className={classes.menuItem}>Campus Involvements</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/careers" className={classes.menuItem}>Careers</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/recruitment" className={classes.menuItem}>Winter Rush 2021</MenuItem>
                        {/* <MenuItem onClick={popupState.close} component={Link} to="/fall-rush-2020" className={classes.menuItem}>Fall Rush 2020</MenuItem> */}
                        <MenuItem onClick={popupState.close} component={Link} to="/faqs" className={classes.menuItem}>FAQs</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/gallery" className={classes.menuItem}>Gallery</MenuItem>
                        <MenuItem onClick={popupState.close} component={Link} to="/contact" className={classes.menuItem}>Contact</MenuItem>

                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}
