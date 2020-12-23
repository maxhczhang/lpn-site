import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useWindowDimensions from '../../WindowListener';
import { companyLogos } from './CompanyLogos'
import { roles2021 } from './Roles2021'
import { roles2020 } from './Roles2020'
import { roles2019 } from './Roles2019'
import { roles2018 } from './Roles2018'
import Chart from './Chart'

// import MaterialTable from 'material-table';


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
                    <Typography>{children}</Typography>
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
        textAlign: "center"
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
    }
}));


export default function Careers({ setPage }) {
    useEffect(() => {
        setPage("Careers")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box mt={16} mb={16} className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" className={classes.logoGrid} spacing={3}>
                {companyLogos.map((tile) => (
                    <Grid item xs key={tile.img}>
                        <a href={tile.link} target="_blank" rel="noopener noreferrer">
                            <img src={tile.img} alt={tile.title} className={isMobile ? classes.mobileImage : classes.image} />
                        </a>
                    </Grid>
                ))}
            </Grid>

            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize" mt={8} mb={8} align="left">
                    Our Brothers achieve excellence in the professional world in the form of 
                    internships during their time at UCI and full-time positions after graduation. Our network is continously expanding, and these are a few
                    of the places where we worked this year! Hopefully, you'll join us and find your future mentor at one of the many companies
                    where our Active and Alumni Brothers have left their mark.
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>
            <Box mt={8}></Box>

            <Tabs value={value} onChange={handleChange} aria-label="toggle between different years"
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
                } {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0} className={classes.tabPanel}>
                <Chart title="2021 Internships" positions={roles2021} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={1} className={classes.tabPanel}>
                <Chart title="2020 Internships" positions={roles2020["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2020 Full Times" positions={roles2020["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={2} className={classes.tabPanel}>
                <Chart title="2019 Internships" positions={roles2019["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2019 Full Times" positions={roles2019["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            <TabPanel value={value} index={3} className={classes.tabPanel}>
                <Chart title="2018 Internships" positions={roles2018["Internships"]} isMobile={isMobile}></Chart>
                <Box mb={8}></Box>
                <Chart title="2018 Full Times" positions={roles2018["Full Times"]} isMobile={isMobile}></Chart>
            </TabPanel>

            

            {/* <Box mt={12} className={classes.content}>
                <MaterialTable
                    title={<Box fontSize={isMobile ? "body2.fontSize" : "h2.fontSize"} fontWeight="fontWeightMedium" m={2}>2020 Internships</Box>}
                    columns={[
                        { title: 'Name', field: 'name', grouping: false },
                        { title: 'Company', field: 'company' },
                        { title: 'Position', field: 'position' },
                        { title: 'Practice', field: 'industry' },
                    ]}
                    data={[
                        { name: <Link component={RouterLink} to="/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'KPMG', position: "Tax Intern", industry: "Accounting" },
                        { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'Shiseido', position: "Marketing Intern", industry: "Marketing" },

                        { name: <Link component={RouterLink} to="/active-brothers/tony-zhou" color="inherit">Tony Zhou</Link>, company: 'EY', position: "Business Consulting Intern", industry: "Consulting" },
                        { name: <Link component={RouterLink} to="/active-brothers/astyr-ko" color="inherit">Astyr Ko</Link>, company: 'ServiceNow', position: "Global Talent Brand & Marketing Intern", industry: "Marketing" },
                        
                        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern", industry: "Tech" },
                        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Sunwest Bank', position: "Marketing Intern", industry: "Marketing" },

                        { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, company: 'Amazon Web Services', position: "Professional Services Technical Intern", industry: "Tech" },
                        { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, company: 'Issu', position: "Marketing Projects Intern", industry: "Marketing" },

                        { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, company: 'EY', position: "Tax Intern", industry: "Accounting" },
                        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'DiverseVC', position: "Marketing & Content Intern", industry: "Marketing" },

                        { name: 'Ryan Chen', company: 'VMware', position: "Data Solutions Architect Intern", industry: "Tech" },
                        { name: 'Alexis Rivera', company: 'Foundations Jewelry', position: "Product Development Intern", industry: "Product" },
                       
                        { name: <Link component={RouterLink} to="/active-brothers/jasmin-he" color="inherit">Jasmin He</Link>, company: 'Seagate Technology', position: "Consumer Pricing Analytics & Strategy Intern", industry: "Product" },
                        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'Western Digital', position: "RAMP Human Resources Intern", industry: "HR" },
                      
                        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'GoInvo', position: "User Experience Design Intern", industry: "Product" },
                        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'ViaLoop', position: "Sales & Marketing Coordinator", industry: "Marketing" },
                       
                        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, company: 'Experian', position: "Corporate Finance Intern", industry: "Finance" },
                        { name: <Link component={RouterLink} to="/active-brothers/ben-fan" color="inherit">Ben Fan</Link>, company: 'KJ Soft', position: "Data Science Intern", industry: "Tech" },
                        { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Cybra Security', position: "Sales & Marketing Intern", industry: "Marketing" },

                        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, company: 'Crowe', position: "Tax Intern", industry: "Accounting" },
                        { name: <Link component={RouterLink} to="/active-brothers/vivi-liu" color="inherit">Vivi Liu</Link>, company: 'CrossBond Brand Consultant', position: "Project Manager", industry: "Product" },
                       
                        { name: <Link component={RouterLink} to="/active-brothers/philip-cheung" color="inherit">Philip Cheung</Link>, company: 'COPE Health Solutions', position: "Business Development Intern", industry: "Consulting" },
                        { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'NUDA Juice & Wellness', position: "Marketing Strategy Intern", industry: "Marketing" },
                        
                        {name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Marcum', position: "Assurance Intern", industry: "Accounting" },
                        { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'New Relic', position: "Talent & Organizational Development Intern", industry: "HR" },

                        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'KPMG', position: "Advisory Intern", industry: "Consulting" },
                        { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, company: 'Ripplink', position: "Strategy & Operations Intern", industry: "Product" },

                        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'CreatorUp', position: "Training Solution Intern", industry: "Marketing" },
                        { name: <Link component={RouterLink} to="/active-brothers/ian-han" color="inherit">Ian Han</Link>, company: 'Sunwest Bank', position: "Human Capital Intern", industry: "HR" },

                        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'City National Bank', position: "Specialty Banking Summer Analyst", industry: "Finance" },
                        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Pathways to Career Success', position: "Administrative Intern", industry: "Marketing" },

                        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, company: 'RSM', position: "Assurance Intern", industry: "Accounting" },

                    ]}
                    options={{
                        grouping: true,
                        sorting: false,
                        headerStyle: {
                            backgroundColor: '#580C1F',
                            color: '#FFF',
                        },
                        pageSize: 15,
                        pageSizeOptions: [10, 15, 25]
                    }}
                    localization={{
                        grouping: {
                            placeholder: 'Drag column titles here to group by Company, Position, or Practice.'
                        }
                    }}
                />
            </Box> */}

            {/* <Box mt={18} className={classes.content}>
                <MaterialTable
                    title={<Box fontSize={isMobile ? "body2.fontSize" : "h2.fontSize"} fontWeight="fontWeightMedium" m={2}>2020 Full Time Offers</Box>}
                    columns={[
                        { title: 'Name', field: 'name', grouping: false },
                        { title: 'Company', field: 'company' },
                        { title: 'Position', field: 'position' },
                        { title: 'Practice', field: 'industry' },

                    ]}
                    data={[
                        { name: 'Jeff Lu', company: 'Accenture', position: "Management Consultant", industry: "Consulting" },
                        { name: 'Nicholas Tam', company: 'RSM', position: "Tax Associate", industry: "Accounting" },
                        { name: 'Kevin Loc', company: 'Amazon', position: "Software Development Engineer", industry: "Software Engineering" },
                        { name: 'Andrew Kusnohadi', company: 'Optum', position: "Competitive Intellgience Analyst", industry: "Analytics" },
                        { name: 'Jessica Lee', company: 'Deloitte', position: "Risk Advisory", industry: "Consulting" },
                        { name: 'Romeo Li', company: 'EY', position: "Assurance Staff", industry: "Accounting" },
                        { name: 'Dominic Wright', company: 'Paramount Residential Mortage Group', position: "Junior Business Analyst", industry: "Analytics" },
                        { name: 'Tri Do', company: 'KPMG', position: "Audit Associate", industry: "Accounting" },
                        { name: 'Emily Nguyen', company: 'EY', position: "Risk Advisory Staff", industry: "Consulting" },
                        { name: 'Joy Huang', company: 'RSM', position: "Auditor", industry: "Accounting" },
                        { name: 'Janessa Paredes', company: 'Hochburg Sports Marketing', position: "Social Media Specialist", industry: "Marketing" },
                        { name: 'Katie Xiong', company: 'Prudential Private Capital', position: "Investment Analyst", industry: "Private Capital" },
                        { name: 'Jessica Lee', company: 'The Walt Disney Company', position: "Enterprise Sourcing Undergraduate Associate", industry: "Operations" },
                        { name: 'Alexis Rivera', company: 'United Exchange Corporation', position: "Marketing Product Associate", industry: "Product" },

                    ]}
                    options={{
                        grouping: true,
                        sorting: false,
                        headerStyle: {
                            backgroundColor: '#580C1F',
                            color: '#FFF',
                        },
                        pageSize: 10,
                    }}
                    localization={{
                        grouping: {
                            placeholder: 'Drag column titles here to group by Company, Position, or Practice.'
                        }
                    }}
                />
            </Box> */}

        </Box>
    )
}


