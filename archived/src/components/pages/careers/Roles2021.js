import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2021 = {

    "Internships" : {

        "Accounting": [
            { name: 'Cathy Yun', company: 'BDO', position: "Tax Intern" },
            { name: 'Cathy Yun', company: 'Holthouse Carlin & Van Trigt', position: "Tax Intern" },
            { name: 'Sahana Vairavaraj', company: 'Baker Tilly', position: "Tax Intern" },
        ],

        "Consulting": [
            { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'Sizigi', position: "Strategy Consulting Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Mentor Global Consultants', position: "Management Consulting Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: '180 Degrees Consulting', position: "Associate Consultant" },
        ],

        "Finance": [
            { name: 'Julian Rachman', company: 'Two Sigma Ventures', position: "Summer Investor" },
            { name: 'Khoa Tran', company: 'JPMorgan Chase & Co.', position: "MMBSI Summer Analyst" },
            { name: 'Tiffany Wong', company: 'JPMorgan Chase & Co.', position: "GFBM Summer Analyst" },
            { name: 'Lucian Liu', company: 'Prudential Private Capital', position: "Summer Investment Analyst" },
        ],

        "Human Resources": [
            { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'TikTok', position: "Talent Acquisition Intern" },
            { name: 'Sahana Vairavaraj', company: 'Capital One', position: "HR Rotational Program Intern" },
        ],

        "Marketing": [
            { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Westhaven Power', position: "Marketing Intern" },
            { name: 'Le An Pham', company: 'Fiddler', position: "Marketing Intern" },
            { name: 'Serina Nguyen', company: 'EtherWAN Systems', position: "Marketing Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'HashiCorp', position: "Marketing Demand Generation Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/courtney-tsao" color="inherit">Catherine Nguyen</Link>, company: 'SoundOff', position: 'Brand Management & PR Intern' },
            { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, company: 'TJX Companies', position: "Merchandising Intern" },
            { name: 'Jenny Cheung', company: 'Saks OFF 5th', position: "Social Media Intern" },
            { name: 'Joshua Tong', company: 'United Exchange Corporation', position: "Marketing Assistant" },
            { name: <Link component={RouterLink} to="/active-brothers/naveen-sastri" color="inherit">Naveen Sastri</Link>, company: 'eBay', position: "Marketing Planning Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/raj-singh" color="inherit">Raj Singh</Link>, company: 'Sencha Credit', position: "Content Marketer" },
        ],

        "Operations": [
            { name:'Emily Nguyen', company: 'Samba TV', position: "Business Operations Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'BlackBerry', position: "Managed Security Service Provider" },
            { name: 'Jasmin He', company: 'Henkel', position: "Brand Management Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Agora Néos', position: "Project Management Intern", },
        ],

        "Product": [
            { name: 'Sandy Nguyen', company: 'McAfee', position: "Product Design Intern", },
            { name: 'Sandy Nguyen', company: 'MongoDB', position: "Product Design Intern", },
        ],

        "Technology": [
            { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern" },
        ], 
    },

    "Full Times" : {
        "Accounting" : [
            { name: 'David Sonq', company: 'EY', position: "Tax Staff" },
            { name: 'Tiffany Chan', company: 'RSM', position: "Audit Associate" },
        ],
        "Consulting" : [
            { name: 'Philip Cheung', company: 'Deloitte', position: "Application & Program Analyst" },
            { name: 'Naishal Shah', company: 'Green Street Advisors', position: "Market Research Associate"},
            { name: 'Matthew Nagata', company: 'Workday', position: "Field Readiness Architect" },
        ],
        "Marketing": [
            { name: 'Astyr Ko', company: 'Western Digital', position: "Marketing Communications Specialist"},
            {name: 'Jenny Cheung', company: 'SAP', position: "Marketing Coordinator"},
            {name: 'Le An Pham', company: 'Redbubble', position: "Brand Partnerships Coordinator"},
            {name: 'Jasmin He', company: 'Henkel Beauty', position: "Brand Management/Product Development"},
        ],
       "Finance": [
            { name: 'Yong Lin', company: 'Capital One', position: "Commercial Rotational Program Associate" },
        ],
        "Human Resources": [
            {name: 'Jeffrey Cho', company: 'Western Digital', position: "HR Coordinator"},
            {name: 'Andrew Duong', company: 'Armanino LLP', position: "Sourcing Recruiter"},
        ],
    }
};


export default { roles2021 };