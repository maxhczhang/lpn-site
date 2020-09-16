import React from 'react'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function PlainCoreValue({title, description}) {
    return (
        <Box border={1}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel0a-content"
                    id="panel0a-header"
                >
                    <Typography variant="h6">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div" align="left">
                        <Box fontSize="h6.fontSize">{description}</Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
