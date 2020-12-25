import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2019 = {

    "Internships" : {

        "Accounting": [
            { name: 'Joy Huang', company: 'RSM', position: "Audit", industry: "Accounting" },
            { name: 'Tri Do', company: 'KPMG', position: "Audit", industry: "Accounting" },
            { name: 'Katherine Jiang', company: 'Deloitte', position: "Audit & Assurance", industry: "Accounting" },
            { name: 'Romeo Li', company: 'EY', position: "Assurance", industry: "Accounting" },
            { name: 'Nicholas Tam', company: 'RSM', position: "Tax", industry: "Accounting" },
        ],

        "Consulting": [
            { name: 'Emily Nguyen', company: 'EY', position: "Risk Advisory", industry: "Consulting" },
            { name: "Jeff Lu", company: 'Accenture', position: "Consulting Analyst", industry: "Consulting" },
        ],

        "Finance": [
            { name: "Aira Samontina", company: 'Benefit Funding Retirement Services', position: "Wealth Management", industry: "Finance" },
            { name: 'Katie Xiong', company: 'Season Two Ventures', position: "Venture Capital" },
            { name: <Link component={RouterLink} to="/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'City of Redwood City', position: "Finance & Revenue Services", industry: "Finance" },
        ],

        "Human Resources": [
            { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'Optum', position: "Client Management", industry: "Human Resources" },
            { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'Greenhouse Agency', position: "HR Assistant", industry: "Human Resources" },
            { name: 'Jessica Lee', company: 'Western Digital', position: "RAMP Compensation", industry: "Human Resources" },
        ],

        "Marketing": [
            { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'BlackBerry', position: "Corporate Marketing", industry: "Marketing" },
            { name: 'Julia Wong', company: 'Ytel', position: "Digital Marketing", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Polar Holidays', position: "Digital Marketing", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/karen-ching" color="inherit">Karen Ching</Link>, company: 'HomeTown Financial Services', position: "Marketing Intern", industry: "Marketing" },       
            { name: <Link component={RouterLink} to="/active-brothers/vivi-liu" color="inherit">Vivi Liu</Link>, company: 'OC Visitors Association', position: "Marketing Coordinator", industry: "Marketing" },
        ],

        "Product": [
            { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: '4S Education Foundation', position: "Product Designer & Developer", industry: "Product" },
            { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'Aeromates Co.', position: "UX/UI Design Associate", industry: "Product" },
        ],

        "Strategy": [
            { name: 'Dominic Wright', company: 'Cox Communications', position: "Competitive Insights", industry: "Strategy" },
            { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'Lumentum', position: "WorkPlace Services Business Operations", industry: "Operations" },
            { name: 'Ivy Chen', company: 'Danone', position: "Category Strategy & Insights", industry: "Operations" },
        ],

        "Technology": [
            { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, company: 'Pollenly', position: "Data Science Engineer", industry: "Tech" },
            { name: "Kevin Loc", company: 'Siemens Software', position: "Software Development", industry: "Tech" },
            { name: "Ryan Chen", company: 'Effect-Tech', position: "Software Engineering", industry: "Tech" },
        ],
    },

    "Full Times" : {
        "Accounting": [
            { name: 'Carol Lai', company: 'EY', position: "Tax Staff", industry: "Accounting" },
            { name: 'Philip Au', company: 'EY', position: "Assurance Staff", industry: "Accounting" },
        ],

        "Consulting" : [
            { name: "Erica Truong", company: "Deloitte", position: "Business Analyst" },
            { name: 'Prachi Athavale', company: 'Deloitte', position: "Business Technology Analyst"},
        ],

        "Finance" : [
            { name: "Ethan Chee", company: "Deloitte", position: "Engagement Financial Advisor" },
            { name: "Jessica Cheng", company: "Goldman Sachs", position: "Private Equity Analyst"}
        ],

        "Human Resources" :[
            { name: 'LeAnne Do', company: 'Google', position: "GCP Training Campaign Coordinator" },
            { name: 'Huyen Nguyen', company: 'Brown & Streza', position: "HR Assistant" },
        ],

        "Operations" : [
            { name: "Ivy Chen", company: "DoorDash", position: "Merchant Associate" },
            { name: 'Resanna Li', company: 'Amazon', position: "Area Manager", industry: "Operations" },
        ],

        "Technology" :[
            { name: 'Kenny Huynh', company: 'Amazon', position: "Software Development Engineer" },
        ]
    }

};


export default { roles2019 };