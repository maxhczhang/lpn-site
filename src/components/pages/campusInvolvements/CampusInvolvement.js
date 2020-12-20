import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

// import { Link as RouterLink } from 'react-router-dom';
// import MaterialTable from 'material-table';

import useWindowDimensions from '../../WindowListener';
import { orgsLogos } from './OrgsLogos'
import {involvements } from './Involvements';
import Chart from '../careers/Chart';


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
    content: {
        width: "80%"
    },
    divider: {
        width: "70%"
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
    }
}));

export default function CampusInvolvement({ setPage }) {
    useEffect(() => {
        setPage("Campus Involvement")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={18} mb={18} className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" className={classes.content} spacing={5}>
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
                    Our brothers have founded eight of Merage's premier business organizations, including Beta Alpha Psi, Management Information Student Society, Undergraduate Finance Association, and more!
                    Many of our Active Brothers still hold positions in these amazing organizations,
                    developing themselves as leaders and impacting the community around them in the process.
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>

            <Typography component="div">
                <Box fontSize="h2.fontSize" fontWeight="fontWeightMedium" mt={8}>2020 Campus Involvements</Box>
            </Typography>
            <Chart title="Accounting Association" jsonHeading="AA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Associated Students of UCI" jsonHeading="ASUCI" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Beta Alpha Psi" jsonHeading="BAP" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Human Resources Management Association" jsonHeading="HRMA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Management Information Student Society" jsonHeading="maiss" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Marketing Association" jsonHeading="MA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Merage Undergraduate Student Association" jsonHeading="MUSA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Student Managed Investment Fund" jsonHeading="SMIF" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Undergraduate Business Association" jsonHeading="UBA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Undergraduate Finance Association" jsonHeading="UFA" positions={involvements} isMobile={isMobile}></Chart>
            <Chart title="Other" jsonHeading="other" positions={involvements} isMobile={isMobile}></Chart>
         

            {/* <Box mt={12} className={classes.content}>
                <MaterialTable
                    title={<Box fontSize={isMobile ? "body2.fontSize" : "h2.fontSize"} fontWeight="fontWeightMedium" m={2}>2020 - 2021 Involvements</Box> }
                    columns={[
                        { title: 'Name', field: 'name', grouping: false },
                        { title: 'Organization', field: 'org' },
                        { title: 'Position', field: 'position' },
                    ]}
                    data={[
                        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, org: 'Management Information Student Society', position: "President" },
                        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, org: 'Undergraduate Finance Association', position: 'President' },
                        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, org: 'Marketing Association', position: "President" },
                        { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, org: 'Undergraduate Business Association', position: 'President' },
                        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, org: 'UCI Dragon Boat', position: "President" },

                        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, org: 'Undergraduate Finance Association', position: 'Executive Vice President' },
                        { name: <Link component={RouterLink} to="/#/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, org: 'Beta Alpha Psi', position: "Vice President" },
                        { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, org: 'Undergraduate Business Association', position: 'Vice President' },

                        { name: <Link component={RouterLink} to="/active-brothers/matthew-nagata" color="inherit">Matthew Nagata</Link>, org: 'Management Information Student Society', position: "VP of Finance" },
                        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, org: 'Merage Undergraduate Student Association', position: 'VP of Finance' },
                        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, org: 'Human Resources Management Association', position: "VP of Finance" },
                        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, org: 'Undergraduate Business Association', position: 'Finance Director' },

                        { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, org: 'Accounting Association', position: 'Director of Professional Development' },
                        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, org: 'Management Information Student Society', position: "VP of Professional Development" },

                        { name: <Link component={RouterLink} to="/active-brothers/ian-han" color="inherit">Ian Han</Link>, org: 'Management Information Student Society', position: "VP of Marketing" },
                        { name: <Link component={RouterLink} to="/active-brothers/serian-nguyen" color="inherit">Serina Nguyen</Link>, org: 'Undergraduate Finance Association', position: 'Marketing Director' },
                        { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, org: 'Undergraduate Business Association', position: 'Marketing Director' },
                        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, org: 'Undergraduate Business Association', position: 'Marketing Director' },
                        
                        { name: <Link component={RouterLink} to="/active-brothers/tyler-newman" color="inherit">Tyler Newman</Link>, org: 'Management Information Student Society', position: "VP of Community Development" },
                        { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, org: 'Human Resources Management Association', position: "VP of Operations" },

                        { name: <Link component={RouterLink} to="/active-brothers/emily_nguyen" color="inherit">Emily Nguyen</Link>, org: 'ASUCI', position: "Media & Technology Commissioner" },
                        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, org: 'ASUCI', position: 'Content Creation Commissioner' },
                        
                        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, org: 'Accounting Association', position: "Committee Board Officer" },
                        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, org: 'Accounting Association', position: 'Committee Board Officer' },
                        
                        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, org: 'Phi Zeta Tau', position: 'Fundraising Chair' },
                        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, org: 'Anteater Ambassadors Network', position: 'Supervisor' },
                        { name: <Link component={RouterLink} to="/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, org: 'Student Managed Investment Fund', position: "Analyst" },
                        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, org: 'Phi Zeta Tau', position: 'Webmistress' },
                        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, org: 'Merage Undergraduate Student Association', position: 'VP of Technology' },
                        { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, org: 'Marketing Association', position: 'VP of Internal Affairs' },
                        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, org: 'Student Managed Investment Fund', position: 'Macroeconomics Team Lead' },

                        { name: <Link component={RouterLink} to="/active-brothers/philip-cheung" color="inherit">Philip Cheung</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, org: 'Accounting Association Leadership Development Program', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, org: 'Accounting Association Leadership Development Program', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        
                    ]}
                    onRowClick={((evt, selectedRow) => console.log(selectedRow))}
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
                            placeholder: 'Drag column titles here to group by Organization or Position.'
                        }
                    }}
                   
                />
            </Box> */}

        </Box>
    )
}
