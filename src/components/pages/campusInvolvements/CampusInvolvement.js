import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useWindowDimensions from '../../utils/WindowListener';
import { orgsLogos } from './OrgsLogos'
import { involvements2021 } from './Involvements2021';
import { involvements2020 } from './Involvements2020';
import { involvements2019 } from './Involvements2019';
import { involvements2018 } from './Involvements2018';
import Chart from '../../utils/Chart';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    paragraph: {
        maxWidth: "60%"
    },
    content: {
        width: "80%"
    },
    divider: {
        width: "70%",
    },
    image: {
        width: 200,
        height: 150,
        objectFit: 'scale-down',
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    mobileImage: {
        width: 106,
        height: 80,
        objectFit: 'scale-down',
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    tabs: {
        backgroundColor: "#580C1F"
    },
    tabPanel: {
        width: "80%"
    }
}));


export default function CampusInvolvement({ setPage }) {
    useEffect(() => {
        setPage("Campus Involvement")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box mt={18} mb={18} className={classes.root}>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.content} spacing={5}>
                {orgsLogos.map((tile) => (
                    <Grid item xs key={tile.img}>
                        <a href={tile.link} target="_blank" rel="noopener noreferrer">
                            <img src={tile.img} alt={tile.title} className={isMobile ? classes.mobileImage : classes.image} />
                        </a>
                    </Grid>
                ))}
            </Grid>
            
            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize" mt={6} mb={8} align="left">
                    Our brothers have founded eight of Merage's premier business organizations, including Beta Alpha Psi's Nu Pi Chapter, Management Information Student Society, Undergraduate Finance Association, and more!
                    Many of our Active Brothers still hold positions in these amazing organizations,
                    developing themselves as leaders and impacting the community around them in the process.
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>
            <Box mt={8}></Box>

            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                TabIndicatorProps={{ className: classes.tabs }}>
                <Tab label={
                    <Typography variant="h6">2021</Typography>
                } {...a11yProps(0)} />
                <Tab label={
                    <Typography variant="h6">2020</Typography>
                } {...a11yProps(1)} />
                <Tab label={
                    <Typography variant="h6">2019</Typography>
                } {...a11yProps(2)} />
                <Tab label={
                    <Typography variant="h6">2018</Typography>
                } {...a11yProps(3)} />
            </Tabs>

            <TabPanel value={value} index={0} className={classes.tabPanel}>
                <Chart title="2021 Campus Involvement" positions={involvements2021} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={1} className={classes.tabPanel}>
                <Chart title="2020 Campus Involvement" positions={involvements2020} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={2} className={classes.tabPanel}>
                <Chart title="2019 Campus Involvement" positions={involvements2019} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={3} className={classes.tabPanel}>
                <Chart title="2018 Campus Involvement" positions={involvements2018} isMobile={isMobile}></Chart>
            </TabPanel>

        </Box>
    )
}
