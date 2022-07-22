import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2022 = {

    "Internships" : {

        "Accounting": [
            { name:'Jasraj Singh', company: 'Valleysoft Directions', position: 'Director'},
            { name:'Ashley London', company: 'Revolution Entertainment Services', position: 'Accounting Assistant'},
            { name:'Qui Hoang', company: 'Grant Thornton', position: 'Rotational Intern'},
            { name:'Sydney Yu', company: 'EY', position: 'Audit Intern'},
            { name:'Tali Yip', company: 'PwC', position: 'Audit Intern'},
            // { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'BDO', position: "Tax Intern" },
            // { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'Holthouse Carlin & Van Trigt', position: "Tax Intern" },
            // { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Baker Tilly', position: "Tax Intern" },
        ],

        "Consulting": [
            { name:'Sera Xu', company: 'Glassdoor', position: 'Business Operations Intern'},
            { name:'Raymond Dinh', company: 'Salesforce', position: 'Business Systems Analyst'},
            { name:'Eddie Rios', company: 'Mentor Global Consultants', position: 'Research and Business Analyst'},
            { name:'Will Bordessa', company: 'Slalom', position: 'Business Advisory Services'},
            { name:'Lumin Oo', company: 'Deloitte', position: "Consulting Discovery Intern" }
        ],

        "Finance": [
            { name: <Link component={RouterLink} to="/active-brothers/Haley-Kim" color="inherit">Haley Kim</Link>, company: 'Wells Fargo', position: "Corporate Banking Summer Analyst" },
            { name: <Link component={RouterLink} to="/active-brothers/Haley-Kim" color="inherit">Deena Toofan</Link>, company: 'Comfort Keepers', position: "Finance Intern" },
        ],

        "Human Resources": [
            { name: "Justin Chao", company: 'Unilever', position: "Human Resources Intern" },
            { name: "Omar Naji", company: 'Captial One', position: "Human Resource Information Professional" },
            { name: "Kaylie Zhou", company: 'Adobe', position: "Global Rewards Intern" },
            // { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Capital One', position: "HR Rotational Program Intern" },
        ],

        "Marketing": [
            { name: <Link component={RouterLink} to="/active-brothers/courtney-tsao" color="inherit">Courtney Tsao</Link>, company: 'NBCUniversal', position: "Consumer Insights Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/courtney-tsao" color="inherit">Stephen Minn</Link>, company: 'Cox Automotive', position: "Product Management Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/courtney-tsao" color="inherit">Faith Chia</Link>, company: 'ServiceNow', position: "Product Marketing Co-Op" },
            { name:'Catherine Lin', company: 'UCI Esports', position: "Stream production Intern" },
            { name:'Catherine Nguyen', company: 'Amazon', position: "AWS Sales Intern" },
            { name:'Adrian Siu', company: 'ServiceNow', position: "Solutions Marketing Intern" },
            { name:'Naveen Sastri', company: 'MasterCard', position: "Cyber & Intelligence Solutions" },
            { name:'Lilian Luu', company: 'Comcast', position: "Public Relations Intern" },
            { name:'Nicole Nguyen', company: "Moody's Analytics", position: "Data Solutions Marketing Intern" },
            { name:'Yllana Casim', company: "Intel", position: "Ecosystem Portfolio Scale and Enablement Intern" },
            { name:'Julie Hsieh', company: "Day and Night International Co.", position: "Marketing Intern" },
            { name:'Ruby Ko', company: "Smith & Associates", position: "Sales Assistant Intern" },
            { name:'Hans Chang', company: "BENQ", position: "Ecommerce Marketing Intern" },
            { name:'Jamie Zhao', company: 'ServiceNow', position: "Strategic Events Marketing Intern" },
            { name:'Josh Tong', company: 'UFC', position: "Content Marketing Intern" },
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
            { name: 'Kayla Wong', company: 'Accenture', position: "Salesforce Project: Business Analyst Intern" },
        ],

        "Product": [
            { name:'Hanui Lee', company: 'JP Morgan Chase & Co.', position: "Summer Design Analyst	" },
            // { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'McAfee', position: "Product Design Intern", },
            // { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'MongoDB', position: "Product Design Intern", },
        ],

        "Real Estate": [
            { name:'Jodie Tai', company: 'The Walt Disney Company', position: "Real Estate Controls Intern" },
        ],

        "Technology": [
            { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineer Intern" },
            { name: <Link component={RouterLink} to="/active-brothers/Rithu-Eswaramoorthy" color="inherit">Rithu Eswaramoorthy</Link>, company: 'MongoDB', position: 'Software Engineer Intern'},
        ], 
    },

    "Full Times" : {
        "Accounting" : [
    //         { name: 'David Sonq', company: 'EY', position: "Tax Staff" },
            { name: 'Tiffany Wong', company: 'KPMG', position: "Audit Associate" },
        ],
        "Consulting" : [
            { name: 'Ethan Canavan', company: 'Deloitte', position: "Application & Program Analyst" },
            { name: 'Linda Woo', company: 'Deloitte', position: "Application & Program Analyst" },
        ],
    //     "Marketing": [
    //         { name: 'Astyr Ko', company: 'Western Digital', position: "Marketing Communications Specialist"},
    //         {name: 'Jenny Cheung', company: 'SAP', position: "Marketing Coordinator"},
    //         {name: 'Le An Pham', company: 'Redbubble', position: "Brand Partnerships Coordinator"},
    //         {name: 'Jasmin He', company: 'Henkel Beauty', position: "Brand Management/Product Development"},
    //     ],
        "Finance": [
            { name: 'Lucian Liu', company: 'Prudential Private Capital', position: "Investment Analyst" },
            { name: 'Khoa Tran', company: 'JP Morgan Chase & Co.', position: "MMBSI Analyst" },
        ],
        "Human Resources": [
            {name: 'Sahana Vairavaraj', company: 'Capital One', position: 'Human Resources Rotational Program Associate'},
        ],
        "Management": [
            { name: 'Cathy Yun', company: 'Capital One', position: "Management Rotational Program" },
        ],
        "Product": [
            { name: 'Sandy Nguyen', company: 'MongoDB', position: 'Product Designer'}
        ],
        "Tech Sales" : [
            { name: 'Ian Han', company: 'Oracle', position: "Business Development Consultant" },
        ],
    }
};


export default { roles2022 };