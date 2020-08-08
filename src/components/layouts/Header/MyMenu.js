import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
    paper: {
        color: "white",
        backgroundColor: "rgb(120,120,120)"
    }
}));

const titleToPath = (title) => {
    const path = title.toLowerCase().replace(/ +/g, '-')
    return '/' + path
}

export default function MyMenu({mainTitle, title1, title2}) {
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
            <Button size="large" className={classes.button} onClick={handleClick} onMouseOver={handleClick}>
                {mainTitle}
            </Button>

            <Menu
                className={classes.menu} classes={{
                    paper: classes.paper,
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                <Typography component="div">
                    <MenuItem component={Link} to={titleToPath(title1)} onClick={handleClose}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title1}
                        </Box>                        
                    </MenuItem>
                    
                    <MenuItem component={Link} to={titleToPath(title2)} onClick={handleClose}>
                        <Box fontWeight="fontWeightMedium" fontSize="body1.fontSize">
                            {title2}
                        </Box>  
                    </MenuItem>
                 </Typography>
            </Menu>

        </React.Fragment>
    )
}
