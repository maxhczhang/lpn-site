import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2020 = {

    "Internships" : {

        Accounting: [
            { name: 'Sahana Vairavaraj', company: 'Marcum', position: "Assurance Intern", industry: "Accounting" },
            { name: 'Tiffany Chan', company: 'RSM', position: "Assurance Intern", industry: "Accounting" },
            { name: 'Andrew Duong', company: 'Crowe', position: "Tax Intern", industry: "Accounting" },
            { name: 'David Sonq', company: 'EY', position: "Tax Intern", industry: "Accounting" },
            { name: 'Tiffany Wong', company: 'KPMG', position: "Tax Intern", industry: "Accounting" },
        ],

        Consulting: [
            { name: 'Philip Cheung', company: 'COPE Health Solutions', position: "eMoney Consultant Intern", industry: "Consulting" },
            { name: 'Tony Zhou', company: 'EY', position: "Business Consulting Intern", industry: "Consulting" },
            { name: 'Linda Woo', company: 'KPMG', position: "Advisory Intern", industry: "Consulting" },

        ],

        Finance: [
            { name: 'Lucian Liu', company: 'Experian', position: "Corporate Finance Intern", industry: "Finance" },
            { name: 'Yong Lin', company: 'City National Bank', position: "Specialty Banking Summer Analyst", industry: "Finance" },
            { name: 'Stephen Minn', company: 'KLK Capital Management', position: "Finance Intern", industry: "Finance" },
        ],

        "Human Resources": [
            { name: 'Jeffrey Cho', company: 'Western Digital', position: "Talent Acquisition Intern", industry: "HR" },
            { name: 'Emily Nguyen', company: 'New Relic', position: "Talent Development Intern", industry: "HR" },
            { name: 'Ian Han', company: 'Sunwest Bank', position: "Talent Development Intern", industry: "HR" },
            { name: 'Sera Xu', company: 'CreatorUp', position: "Training Solutions Intern", industry: "Marketing" },

        ],
        
    
        Marketing: [
            { name: 'Astyr Ko', company: 'ServiceNow', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: 'Jenny Cheung', company: 'Shiseido', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: 'Le An Pham', company: 'Sunwest Bank', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: 'Serina Nguyen', company: 'Issu', position: "Brand Marketing Intern", industry: "Marketing" },
            { name: 'Joshua Tong', company: 'DiverseVC', position: "Marketing & Content Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'NUDA Juice & Wellness', position: "Marketing Strategy Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Cybra Security', position: "Sales & Marketing Intern", industry: "Marketing" },
            { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'ViaLoop', position: "Sales & Marketing Intern", industry: "Marketing" },

        ],

        Operations: [
            { name: 'Jessica Lee', company: 'The Walt Disney Company', position: "Enterprise Sourcing Associate", industry: "Operations" },
            { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Pathways to Career Success', position: "Administrative Assistant", industry: "Marketing" },
            { name: 'Stephen Minn', company: 'Ripplink', position: "Strategy & Operations Intern", industry: "Product" },
            { name: 'Vivi Liu', company: 'CrossBond Brand Consultant', position: "Project Manager", industry: "Product" }, 
        ],

        Product: [
            { name: 'Alexis Rivera', company: 'Foundations Jewelry', position: "Product Development", industry: "Product" },
            { name: 'Jasmin He', company: 'Seagate Technology', position: "Product Line Management Intern", industry: "Product" },
            { name: 'Sandy Nguyen', company: 'GoInvo', position: "UX Design Intern", industry: "Product" },
            
        ],
    
        Technology: [
            { name: 'Ben Fan', company: 'KJ Soft', position: "Data Science Intern", industry: "Tech" },
            { name: 'Ryan Chen', company: 'VMware', position: "Data Science Intern", industry: "Tech" },
            { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern", industry: "Tech" },
            { name: 'Julian Rachman', company: 'Amazon Web Services', position: "Technical Consultant", industry: "Tech" },

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