import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Avatar from '@material-ui/core/Avatar';

import sfSkyline from '../../static/images/sf_skyline.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: "50vh",
    backgroundImage: `url(${sfSkyline})`
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({setPageNum}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Typography variant="h1">
              ΛΦΝ
           </Typography>
          <Button color="inherit" onClick={(event) => setPageNum(0)}>Home</Button>
          <Button color="inherit" onClick={(event) => setPageNum(1)}>About Us</Button>
          <Button color="inherit" onClick={(event) => setPageNum(2)}>Leadership</Button>
          <Button color="inherit" onClick={(event) => setPageNum(3)}>Careers</Button>
          <Button color="inherit" onClick={(event) => setPageNum(4)}>Fall Rush 2020</Button>
        </div>
    )
}
