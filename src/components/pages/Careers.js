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


export default function Careers({ setPage }) {
    useEffect(() => {
        setPage("Careers")
    });

    const classes = useStyles();

    return (
        <Box mt={8} mb={8} className={classes.root}>

            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize">
                    Our Brothers have achieved excellence in the professional world in the form of 
                    internships during their time at UCI and full-time positions after graduation. Here are a few
                    of the many companies where you could find your future mentor.
                </Box>
            </Typography>

            <Box mt={6} style={{ width: "80%" }}>
                <MaterialTable
                    title="2020 Full-times"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Company', field: 'company' },
                        { title: 'Position', field: 'position' },
                        { title: 'Industry', field: 'industry' },
                        
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

                    ]}
                    options={{
                        grouping: true,
                        headerStyle: {
                            backgroundColor: '#580C1F',
                            color: '#FFF',
                        },
                        pageSize: 10,
                    }}
                    localization={{
                        grouping: {
                            placeholder: 'Drag Name, Company, Position, or Industry here to group by'
                        }
                    }}
                />
            </Box>

            <Box mt={8} style={{ width: "80%" }}>
                <MaterialTable
                    title="2020 Interns"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Company', field: 'company' },
                        { title: 'Industry', field: 'industry' },
                        { title: 'Position', field: 'position' },
                    ]}
                    data={[
                        { name: 'Tiffany Wong', company: 'KPMG', position: "Tax Intern", industry: "Accounting" },
                        { name: 'Alexis Rivera', company: 'Foundations Jewelry', position: "Product Development Intern", industry: "Marketing" },
                        { name: 'Ryan Miranda', company: 'Microsoft', position: "Software Engineer Intern", industry: "Software Engineering" },
                        { name: 'Le An Pham', company: 'Sunwest Bank', position: "Marketing Intern", industry: "Marketing" },
                        { name: 'Julian Rachman', company: 'Amazon Web Services', position: "Professional Services Technical Intern", industry: "Tech Consulting" },
                        { name: 'Astyr Ko', company: 'ServiceNow', position: "Global Talent Brand & Marketing Intern", industry: "Marketing" },
                        { name: 'Ryan Chen', company: 'VMware', position: "Data Engineer Intern", industry: "Data Science" },
                        { name: 'Jenny Cheung', company: 'Shiseido', position: "Marketing Intern", industry: "Marketing" },
                        { name: 'Sandy Nguyen', company: 'GoInvo', position: "User Experience Design Intern", industry: "UI/UX" },
                        { name: 'Catherine Nguyen', company: 'NUDA Juice & Wellness', position: "Marketing Strategy Intern", industry: "Marketing" },
                        { name: 'Tony Zhou', company: 'EY', position: "Risk Advisory Intern", industry: "Consulting" },
                        { name: 'Serina Nguyen', company: 'Issu', position: "Marketing Projects Intern", industry: "Marketing" },
                        { name: 'David Sonq', company: 'EY', position: "Tax Intern", industry: "Accounting" },
                        { name: 'Vivi Liu', company: 'UCI Biological Sciences', position: "Marketing Intern", industry: "Marketing" },
                        { name: 'Jasmin He', company: 'Seagate Technology', position: "Consumer Pricing Analytics & Strategy Intern", industry: "Product" },
                        { name: 'Joshua Tong', company: 'Anteater Recreation Center', position: "Marketing Assistant", industry: "Marketing" },
                        { name: 'Jeffrey Cho', company: 'Western Digital', position: "RAMP Human Resources Intern", industry: "HR" },
                        { name: 'Omar Naji', company: 'NUDA Juice & Wellness', position: "Marketing Strategy Intern", industry: "Marketing" },

                    ]}
                    options={{
                        grouping: true,
                        headerStyle: {
                            backgroundColor: '#580C1F',
                            color: '#FFF',
                        },
                        pageSize: 15,
                        pageSizeOptions: [5, 15, 25]
                    }}
                    localization={{
                        grouping: {
                            placeholder: 'Drag Name, Company, Position, or Industry here to group by'
                        }
                    }}
                />
            </Box>

        </Box>
    )
}


