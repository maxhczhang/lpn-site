import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    paragraph: {
        maxWidth: "80%"
    },
}));

export default function CampusInvolvement({ setPage }) {
    useEffect(() => {
        setPage("Campus Involvement")
    });

    const classes = useStyles();

    return (
        <Box mt={6} mb={6} className={classes.root}>

            
            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize">
                    Our brothers have founded nine of Merage's premier business organizations, including Beta Alpha Psi, Management Information Student Society, Undergraduate Finance Association, and more.
                    Many of our active brothers still hold positions in some of these amazing organizations. 
                    We strive to continuously develop ourselves as leaders to impact the community around us.
                </Box>
            </Typography>

            <Box mt={6}>
                <MaterialTable
                    title="2020 - 2021 Involvements"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Organization', field: 'org' },
                        { title: 'Position', field: 'position' },
                    ]}
                    data={[
                        { name: 'Le An Pham', org: 'Management Information Student Society', position: "President" },
                        { name: 'Yong Lin', org: 'Undergraduate Finance Association', position: 'President' },
                        { name: 'Sandy Nguyen', org: 'Marketing Association', position: "President" },
                        { name: 'Tiffany Chan', org: 'UCI Dragon Boat', position: "President" },

                        { name: 'Lucian Liu', org: 'Undergraduate Finance Association', position: 'Executive Vice President' },
                        { name: 'Tiffany Wong', org: 'Beta Alpha Psi', position: "Vice President" },

                        { name: 'Matthew Nagata', org: 'Management Information Student Society', position: "VP of Finance" },
                        { name: 'Lucian Liu', org: 'Merage Undergraduate Student Association', position: 'VP of Finance' },

                        { name: 'David Sonq', org: 'Accounting Association', position: 'Director of Professional Development' },
                        { name: 'Ryan Miranda', org: 'Management Information Student Society', position: "VP of Professional Development" },

                        { name: 'Ian Han', org: 'Management Information Student Society', position: "VP of Marketing" },
                        { name: 'Serina Nguyen', org: 'Undergraduate Finance Association', position: 'Marketing Director' },
                        { name: 'Faith Chia', org: 'Undergraduate Business Association', position: 'Marketing Director' },
                        
                        { name: 'Tyler Newman', org: 'Management Information Student Society', position: "VP of Community Development" },
                        { name: 'Sahana Vairavaraj', org: 'Human Resources Management Association', position: "VP of Operations" },
                     
                        { name: 'Tiffany Chan', org: 'Accounting Association', position: "Mentor" },
                        { name: 'Naishal Shah', org: 'Management Information Student Society', position: "Mentor" },
                        { name: 'Joshua Tong', org: 'Management Information Student Society', position: 'Mentor' },
                        { name: 'Sahana Vairavaraj', org: 'Accounting Association', position: "Mentor" },  
                        
                        { name: 'Joshua Tong', org: 'ASUCI', position: 'Content Creation Commissioner' },
                        { name: 'Linda Woo', org: 'Phi Zeta Tau', position: 'Fundraising Chair' },
                        { name: 'Jeffrey Cho', org: 'Anteater Ambassadors Network', position: 'Supervisor' },
                        { name: 'Naishal Shah', org: 'Student Managed Investment Fund', position: "Analyst" },
                        { name: 'Linda Woo', org: 'Phi Zeta Tau', position: 'Webmistress' },
                    ]}
                    options={{
                        grouping: true,
                        headerStyle: {
                            backgroundColor: '#003273',
                            color: '#FFF',
                        },
                        pageSize: 10
                    }}
                    localization={{
                        grouping: {
                            placeholder: 'Drag Name, Organization, or Position here to group by'
                        }
                    }}
                    
                />
            </Box>

        </Box>
    )
}
