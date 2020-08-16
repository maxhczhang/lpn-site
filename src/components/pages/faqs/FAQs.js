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

import { faqsList } from './faqsList'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    accordian: {
        width: "70%",
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
       <Box mt={8} mb={10} className={classes.root}>

            {faqsList.map((content, i) => (
                <Box mb={4} border={1} className={classes.accordian}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={'panel' + i + '-content'}
                            id={'panel' + i + '-header'}
                        >
                            <Typography variant="h6">{content.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">{content.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}

            <Divider style={{ width: "70%", marginTop: 50 }}></Divider>

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
