import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "auto",
    },
    popover: {
        pointerEvents: 'none',
        width: "50%",
    },
    popoverContent: {
        textAlign: "center"
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function CoreValue({image, title, desc}) {
    const classes = useStyles();

    return (
        <PopupState variant="popover" popupId="0">
            {(popupState) => (
                <div>

                    <img src={image} alt="Curiosity" className={classes.image} {...bindHover(popupState)}></img>
                    <Popover
                        {...bindPopover(popupState)}
                        className={classes.popover}
                        classes={{
                            paper: classes.paper,
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        disableRestoreFocus
                    >
                        <Typography className={classes.popoverContent}>
                            <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                                {title}
                                </Box>
                            <Box> {desc} </Box>
                        </Typography>
                    </Popover>
                </div>
        )}
        </PopupState>
    )
}
