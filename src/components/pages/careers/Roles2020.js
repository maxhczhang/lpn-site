import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2020 = {

    "Internships" : {

        Accounting: [
            { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Marcum', position: "Assurance Intern", industry: "Accounting" },
            { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, company: 'RSM', position: "Assurance Intern", industry: "Accounting" },
            { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, company: 'Crowe', position: "Tax Intern", industry: "Accounting" },
            { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, company: 'EY', position: "Tax Intern", industry: "Accounting" },
            { name: <Link component={RouterLink} to="/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'KPMG', position: "Tax Intern", industry: "Accounting" },

        ],

        Consulting: [
            { name: <Link component={RouterLink} to="/active-brothers/philip-cheung" color="inherit">Philip Cheung</Link>, company: 'COPE Health Solutions', position: "eMoney Consultant Intern", industry: "Consulting" },
            { name: <Link component={RouterLink} to="/active-brothers/tony-zhou" color="inherit">Tony Zhou</Link>, company: 'EY', position: "Business Consulting Intern", industry: "Consulting" },
            { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'KPMG', position: "Advisory Intern", industry: "Consulting" },

        ],

        Finance: [
            { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, company: 'Experian', position: "Corporate Finance Intern", industry: "Finance" },
            { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'City National Bank', position: "Specialty Banking Summer Analyst", industry: "Finance" },
            { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, company: 'KLK Capital Management', position: "Finance Intern", industry: "Finance" },
        ],

        "Human Resources": [
            { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'Western Digital', position: "Talent Acquisition Intern", industry: "HR" },
            { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'New Relic', position: "Talent Development Intern", industry: "HR" },
            { name: <Link component={RouterLink} to="/active-brothers/ian-han" color="inherit">Ian Han</Link>, company: 'Sunwest Bank', position: "Talent Development Intern", industry: "HR" },
            { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'CreatorUp', position: "Training Solutions Intern", industry: "Marketing" },

        ],
        
    
        Marketing: [
            { name: <Link component={RouterLink} to="/active-brothers/astyr-ko" color="inherit">Astyr Ko</Link>, company: 'ServiceNow', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'Shiseido', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Sunwest Bank', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, company: 'Issu', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'DiverseVC', position: "Marketing & Content Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'NUDA Juice & Wellness', position: "Marketing Strategy Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Cybra Security', position: "Sales & Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'ViaLoop', position: "Sales & Marketing Intern", industry: "Marketing" },

        ],

        Operations: [
            { name: 'Jessica Lee', company: 'The Walt Disney Company', position: "Enterprise Sourcing Associate", industry: "Operations" },
            { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Pathways to Career Success', position: "Administrative Assistant", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, company: 'Ripplink', position: "Strategy & Operations Intern", industry: "Product" },
            { name: <Link component={RouterLink} to="/active-brothers/vivi-liu" color="inherit">Vivi Liu</Link>, company: 'CrossBond Brand Consultant', position: "Project Manager", industry: "Product" }, 
        ],

        Product: [
            { name: 'Alexis Rivera', company: 'Foundations Jewelry', position: "Product Development", industry: "Product" },
            { name: <Link component={RouterLink} to="/active-brothers/jasmin-he" color="inherit">Jasmin He</Link>, company: 'Seagate Technology', position: "Product Line Management Intern", industry: "Product" },
            { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'GoInvo', position: "UX Design Intern", industry: "Product" },
            
        ],
    
        Technology: [
            { name: <Link component={RouterLink} to="/active-brothers/ben-fan" color="inherit">Ben Fan</Link>, company: 'KJ Soft', position: "Data Science Intern", industry: "Tech" },
            { name: 'Ryan Chen', company: 'VMware', position: "Data Science Intern", industry: "Tech" },
            { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern", industry: "Tech" },
            { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, company: 'Amazon Web Services', position: "Technical Consultant", industry: "Tech" },

        ],
    },

    "Full Times" : {
        Accounting: [
            { name: 'Romeo Li', company: 'EY', position: "Assurance Associate", industry: "Accounting" },
            { name: 'Joy Huang', company: 'RSM', position: "Assurance Associate", industry: "Accounting" },
            { name: 'Tri Do', company: 'KPMG', position: "Audit Associate", industry: "Accounting" },
            { name: 'Nicholas Tam', company: 'RSM', position: "Tax Associate", industry: "Accounting" },

        ],
        Analytics: [
            { name: 'Dominic Wright', company: 'Paramount Residential Mortage Group', position: "Junior Business Analyst", industry: "Analytics" },
            { name: 'Andrew Kusnohadi', company: 'Optum', position: "Business Analyst", industry: "Analytics" },
        ],
        Consulting: [
            { name: 'Jeff Lu', company: 'Accenture', position: "Strategy & Management Consulting Analyst", industry: "Consulting" },
            { name: 'Emily Nguyen', company: 'EY', position: "Business Consultant", industry: "Consulting" },
            { name: 'Jessica Lee', company: 'Deloitte', position: "Risk Advisory Analyst", industry: "Consulting" },

        ],
        Finance: [
            { name: 'Katie Xiong', company: 'Prudential Private Capital', position: "Investment Analyst", industry: "Finance" },
        ],
        Marketing: [
            { name: 'Alexis Rivera', company: 'United Exchange Corporation', position: "Product Marketing Associate", industry: "Product" },
            { name: 'Janessa Paredes', company: 'Hochburg Sports Marketing', position: "Social Media Specialist", industry: "Marketing" },
        ],
        Technology: [
            { name: 'Kevin Loc', company: 'Amazon', position: "Software Development Engineer", industry: "Software Engineering" },
        ],
    }
};


export default { roles2020 };