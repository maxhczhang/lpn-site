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
import { companyLogos } from './CompanyLogos'
import { roles2022 } from './Roles2022'
import { roles2021 } from './Roles2021'
import { roles2020 } from './Roles2020'
import { roles2019 } from './Roles2019'
import { roles2018 } from './Roles2018'
import Chart from '../../utils/Chart'


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
    divider: {
        width: "70%"
    },
    content: {
        width: "80%"
    },
    image: {
        width: 185,
        height: 115,
        objectFit: 'scale-down',
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    mobileImage: {
        width: 120,
        height: 90,
        objectFit: 'scale-down',
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    logoGrid: {
        maxWidth: "90%"
    },
    tabs: {
        backgroundColor: "#580C1F",
    },
    tabPanel: {
        width: "80%"
    },
    mobileTabPanel: {
        width: "95%"
    },
}));

const FT_SHEET_RANGE = "2023 Full Times!A2:D";
const INTERN_SHEET_RANGE = "2023 Internships!A2:D"
const CAREERS_SHEET_ID = "1sVdF-tigs9apHHrjGmtARlX6gRPlZlP72qboEE77gz4";


export default function Careers({ setPage }) {

    async function getCareers(_sheetRange, callback) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : 'https://modern-yeti-376205.uw.r.appspot.com/';

        const url = baseURL + 'positions?' + new URLSearchParams({
            sheetRange: _sheetRange,
            sheetId: CAREERS_SHEET_ID 
        });

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => callback(data));
    }

    // Note the empty array as the 2nd parameter, we only want useEffect to execute once
    useEffect(() => {
        setPage("Careers")
        getCareers(INTERN_SHEET_RANGE, setCurrentInternships);
        getCareers(FT_SHEET_RANGE, setCurrentFullTimes);
    }, []);

    const classes = useStyles();

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    const [tabValue, setTabValue] = React.useState(0);
    // const [currentCareers, setCurrentCareers] = React.useState({ [START_INTERNSHIPS]: {}, [START_FULLTIMES]: {}});
    const [currentInternships, setCurrentInternships] = React.useState({ "Loading...": [] });
    const [currentFullTimes, setCurrentFullTimes] = React.useState({ "Loading...": [] });
    const handleChange = (event, newTabValue) => {
        console.log(newTabValue);
        setTabValue(newTabValue);
    }

    const tabPanelClass = isMobile ? classes.mobileTabPanel : classes.tabPanel;


    return (
        <Box mt={16} mb={16} className={classes.root} component="div">

            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.logoGrid} spacing={3}>
                {companyLogos.map((tile) => (
                    <Grid item xs key={tile.img}>
                        <img src={tile.img} alt={tile.title} className={isMobile ? classes.mobileImage : classes.image} />
                    </Grid>
                ))}
            </Grid>

            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize" mt={8} mb={8} align="left">
                    Our Brothers achieve excellence in the professional world in the form of 
                    internships during their time at UCI and full-time positions after graduation. Our network is continously expanding, and these are a few
                    of the places where we've worked over the years! Hopefully, you'll join us and find your future mentor at one of the many companies
                    where our Active and Alumni Brothers have left their mark.
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>
            <Box mt={8}></Box>

            <Tabs value={tabValue} onChange={handleChange} aria-label="toggle between different years"
                TabIndicatorProps={{ className: classes.tabs }} className={isMobile ? classes.content : {}}>
                <Tab label={
                    <Typography variant="h6">2023</Typography>
                } {...a11yProps(0)} />
                <Tab label={
                    <Typography variant="h6">2022</Typography>
                } {...a11yProps(1)} />
                <Tab label={
                    <Typography variant="h6">2021</Typography>
                } {...a11yProps(2)} />
                <Tab label={
                    <Typography variant="h6">2020</Typography>
                } {...a11yProps(3)} />
                <Tab label={
                    <Typography variant="h6">2019</Typography>
                } {...a11yProps(4)} />
                <Tab label={
                    <Typography variant="h6">2018</Typography>
                } {...a11yProps(5)} />
            </Tabs>
            

            <TabPanel value={tabValue} index={0} className={tabPanelClass}>
                <Chart title="2023 Internships" positions={currentInternships} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2023 Full Times" positions={currentFullTimes} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={tabValue} index={1} className={tabPanelClass}>
                <Chart title="2022 Internships" positions={roles2022["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2022 Full Times" positions={roles2022["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={tabValue} index={2} className={tabPanelClass}>
                <Chart title="2021 Internships" positions={roles2021["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2021 Full Times" positions={roles2021["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={tabValue} index={3} className={tabPanelClass}>
                <Chart title="2020 Internships" positions={roles2020["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2020 Full Times" positions={roles2020["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={tabValue} index={4} className={tabPanelClass}>
                <Chart title="2019 Internships" positions={roles2019["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2019 Full Times" positions={roles2019["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={tabValue} index={5} className={tabPanelClass}>
                <Chart title="2018 Internships" positions={roles2018["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2018 Full Times" positions={roles2018["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>


        </Box>
    )
}


