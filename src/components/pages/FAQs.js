import React, {useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        minHeight: "61vh"
    },
    accordian: {
        width: "60%",
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white"
    },
}));

export default function FAQs({setPage}) {
    useEffect(() => {
        setPage("FAQs")
    });

    const classes = useStyles();

    return (
       <Box mt={6} mb={6} className={classes.root}>

            <Box mb={2} border={1} className={classes.accordian}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel0a-content"
                        id="panel0a-header"
                    >
                        <Typography variant="h6">Why Lambda Phi Nu?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            We're kinda cool.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box mb={2} border={1} className={classes.accordian}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h6">What differentiates us from other business fraternities?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            We have different Greek letters.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
          
            <Box mb={2} border={1} className={classes.accordian}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="h6">Are we holding Fall Rush?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Ya.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box mb={2} border={1} className={classes.accordian}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography variant="h6">Can non-business majors join?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            The more the merrier!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Box mb={6} border={1} className={classes.accordian}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography variant="h6">What does the pledging process entail?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">
                            Giving Lucian a haircut.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Divider style={{ width: "70%" }}></Divider>

            <Box mt={4}>
                <Button size="large" variant="contained" className={classes.button} component={Link} to="/contact">
                    Contact Us
                </Button>
            </Box>

            <Box mt={2}>
                <Typography component="div">
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Please reach out to us with any further questions!
                    </Box>
                </Typography>
            </Box>

       </Box>
    )
}
