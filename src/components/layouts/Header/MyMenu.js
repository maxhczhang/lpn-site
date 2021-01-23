import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
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


export default function MyMenu({mainTitle, menuItems, buttonStyle}) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Button size="large" className={buttonStyle} onClick={handleClick} onMouseOver={handleClick}>
                {mainTitle}
            </Button>

            <Menu
                classes={{
                    paper: classes.paper,
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <Typography component="div">
                    {menuItems.map((item, i) => (
                        <MenuItem component={Link} to={item.url} onClick={handleClose} className={classes.menuItem} key={i}>
                            <Box fontWeight={500} fontSize={13} letterSpacing={2}>
                                {item.title}
                            </Box>
                        </MenuItem>
                    ))}
                 </Typography>
            </Menu>

        </React.Fragment>
    )
}
