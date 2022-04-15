import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2022 = {

    "Internships" : {

        // "Accounting": [
        //     { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'BDO', position: "Tax Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'Holthouse Carlin & Van Trigt', position: "Tax Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Baker Tilly', position: "Tax Intern" },
        // ],

        // "Consulting": [
        //     { name: <Link component={RouterLink} to="/active-brothers/lumin-oo" color="inherit">Lumin Oo</Link>, company: 'Deloitte', position: "Consulting Intern" },
        
        // ],

        "Finance": [
            { name: <Link component={RouterLink} to="/active-brothers/Haley-Kim" color="inherit">Haley Kim</Link>, company: 'Wells Fargo', position: "Corporate Banking Summer Analyst" },
        ],

        "Human Resources": [
            { name: "Justin Chao", company: 'Unilever', position: "Human Resources Intern" },
            // { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Capital One', position: "HR Rotational Program Intern" },
        ],

        "Marketing": [
            { name: <Link component={RouterLink} to="/active-brothers/courtney-tsao" color="inherit">Courtney Tsao</Link>, company: 'Ingram Micro', position: "Global IOT Marketing Intern" },
            { name:'Josh Tong', company: 'UFC', position: "Content Marketing Intern" },
            { name: 'Jamie Zhao', company: 'ServiceNow', position: "Strategic Events Marketing Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Westhaven Power', position: "Marketing Intern" },
        //     { name: 'Le An Pham', company: 'Fiddler', position: "Marketing Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, company: 'EtherWAN Systems', position: "Marketing Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'HashiCorp', position: "Marketing Demand Generation Intern" },
        //     { name: <Link color="inherit">Courtney Tsao</Link>, company: 'SoundOff', position: 'Brand Management & PR Intern' },
        //     { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, company: 'TJX Companies', position: "Merchandising Intern" },
        //     { name: 'Jenny Cheung', company: 'Saks OFF 5th', position: "Social Media Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'United Exchange Corporation', position: "Marketing Assistant" },
        //     { name: <Link component={RouterLink} to="/active-brothers/naveen-sastri" color="inherit">Naveen Sastri</Link>, company: 'eBay', position: "Marketing Planning Intern" },
        //     { name: <Link component={RouterLink} to="/active-brothers/raj-singh" color="inherit">Raj Singh</Link>, company: 'Sencha Credit', position: "Content Marketer" },
        ],

        "Operations": [
            { name:'Aaron Lee', company: 'Oppti', position: "Business Development Intern" },
            { name: 'Kayla Wong', company: 'Accenture', position: "Business Analyst Intern" },
        ],

        // "Product": [
        //     { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'McAfee', position: "Product Design Intern", },
        //     { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'MongoDB', position: "Product Design Intern", },
        // ],

        "Technology": [
            { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/Rithu-Eswaramoorthy" color="inherit">Rithu Eswaramoorthy</Link>, company: 'MongoDB', position: 'Software Engineer Intern'},
        ], 
    },

    "Full Times" : {
    //     "Accounting" : [
    //         { name: 'David Sonq', company: 'EY', position: "Tax Staff" },
    //         { name: 'Tiffany Chan', company: 'RSM', position: "Audit Associate" },
    //     ],
        "Consulting" : [
            { name: 'Linda Woo', company: 'Deloitte', position: "Application & Program Analyst" },
            { name: 'Ethan Canavan', company: 'Deloitte', position: "Application & Program Analyst" },
        ],
    //     "Marketing": [
    //         { name: 'Astyr Ko', company: 'Western Digital', position: "Marketing Communications Specialist"},
    //         {name: 'Jenny Cheung', company: 'SAP', position: "Marketing Coordinator"},
    //         {name: 'Le An Pham', company: 'Redbubble', position: "Brand Partnerships Coordinator"},
    //         {name: 'Jasmin He', company: 'Henkel Beauty', position: "Brand Management/Product Development"},
    //     ],
       "Finance": [
            { name: 'Khoa Tran', company: 'JP Morgan Chase & Co', position: "Analyst" },
        ],
        "Human Resources": [
            {name: 'Sahana Vairavaraj', company: 'Capital One', position: 'Human Resources Rotational Program Associate'},
        ],
        "Product": [
            { name: 'Sandy Nguyen', company: 'MongoDB', position: 'Product Designer'}
        ]
    }
};


export default { roles2022 };