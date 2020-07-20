import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import Link from '@material-ui/core/Link';


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
        <Box mt={8} mb={8} className={classes.root}>
            
            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h6.fontSize">
                    Our brothers have founded nine of Merage's premier business organizations, including Beta Alpha Psi, Management Information Student Society, Undergraduate Finance Association, and more.
                    Many of our active brothers still hold positions in some of these amazing organizations. 
                    We strive to continuously develop ourselves as leaders to impact the community around us.
                </Box>
            </Typography>

            <Box mt={6} style={{width: "80%"}}>
                <MaterialTable
                    title="2020 - 2021 Involvements"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Organization', field: 'org' },
                        { title: 'Position', field: 'position' },
                    ]}
                    data={[
                        { name: <Link href="/#/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, org: 'Management Information Student Society', position: "President" },
                        { name: <Link href="/#/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, org: 'Undergraduate Finance Association', position: 'President' },
                        { name: <Link href="/#/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, org: 'Marketing Association', position: "President" },
                        { name: <Link href="/#/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, org: 'UCI Dragon Boat', position: "President" },

                        { name: <Link href="/#/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, org: 'Undergraduate Finance Association', position: 'Executive Vice President' },
                        { name: <Link href="/#/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, org: 'Beta Alpha Psi', position: "Vice President" },

                        { name: <Link href="/#/active-brothers/matthew-nagata" color="inherit">Matthew Nagata</Link>, org: 'Management Information Student Society', position: "VP of Finance" },
                        { name: <Link href="/#/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, org: 'Merage Undergraduate Student Association', position: 'VP of Finance' },

                        { name: <Link href="/#/active-brothers/david-sonq" color="inherit">David Sonq</Link>, org: 'Accounting Association', position: 'Director of Professional Development' },
                        { name: <Link href="/#/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, org: 'Management Information Student Society', position: "VP of Professional Development" },

                        { name: <Link href="/#/active-brothers/ian-han" color="inherit">Ian Han</Link>, org: 'Management Information Student Society', position: "VP of Marketing" },
                        { name: <Link href="/#/active-brothers/serian-nguyen" color="inherit">Serina Nguyen</Link>, org: 'Undergraduate Finance Association', position: 'Marketing Director' },
                        { name: <Link href="/#/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, org: 'Undergraduate Business Association', position: 'Marketing Director' },
                        
                        { name: <Link href="/#/active-brothers/tyler-newman" color="inherit">Tyler Newman</Link>, org: 'Management Information Student Society', position: "VP of Community Development" },
                        { name: <Link href="/#/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, org: 'Human Resources Management Association', position: "VP of Operations" },
                     
                        { name: <Link href="/#/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, org: 'Accounting Association', position: "Mentor" },
                        { name: <Link href="/#/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, org: 'Management Information Student Society', position: "Mentor" },
                        { name: <Link href="/#/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, org: 'Management Information Student Society', position: 'Mentor' },
                        { name: <Link href="/#/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, org: 'Accounting Association', position: "Mentor" },  
                        
                        { name: <Link href="/#/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, org: 'ASUCI', position: 'Content Creation Commissioner' },
                        { name: <Link href="/#/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, org: 'Phi Zeta Tau', position: 'Fundraising Chair' },
                        { name: <Link href="/#/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, org: 'Anteater Ambassadors Network', position: 'Supervisor' },
                        { name: <Link href="/#/active-brothers/naishal-shah" color="inherit">Naishal Shah</Link>, org: 'Student Managed Investment Fund', position: "Analyst" },
                        { name: <Link href="/#/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, org: 'Phi Zeta Tau', position: 'Webmistress' },
                    ]}
                    onRowClick={((evt, selectedRow) => console.log(selectedRow))}
                    options={{
                        grouping: true,
                        headerStyle: {
                            backgroundColor: '#580C1F',
                            color: '#FFF',
                        },
                        pageSize: 20,
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
