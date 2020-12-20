import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const internships = {
    accounting: [
        { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Marcum', position: "Assurance", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/tiffany-chan" color="inherit">Tiffany Chan</Link>, company: 'RSM', position: "Assurance", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/andrew-duong" color="inherit">Andrew Duong</Link>, company: 'Crowe', position: "Tax", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, company: 'EY', position: "Tax", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'KPMG', position: "Tax", industry: "Accounting" },

    ],
    consulting: [
        { name: <Link component={RouterLink} to="/active-brothers/philip-cheung" color="inherit">Philip Cheung</Link>, company: 'COPE Health Solutions', position: "Business Consulting", industry: "Consulting" },
        { name: <Link component={RouterLink} to="/active-brothers/tony-zhou" color="inherit">Tony Zhou</Link>, company: 'EY', position: "Business Consulting", industry: "Consulting" },
        { name: <Link component={RouterLink} to="/active-brothers/linda-woo" color="inherit">Linda Woo</Link>, company: 'KPMG', position: "Risk Advisory", industry: "Consulting" },

    ],
    tech: [
        { name: <Link component={RouterLink} to="/active-brothers/ben-fan" color="inherit">Ben Fan</Link>, company: 'KJ Soft', position: "Data Science", industry: "Tech" },
        { name: 'Ryan Chen', company: 'VMware', position: "Data Science", industry: "Tech" },
        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineering", industry: "Tech" },
        { name: <Link component={RouterLink} to="/active-brothers/julian-rachman" color="inherit">Julian Rachman</Link>, company: 'Amazon Web Services', position: "Technical Consulting", industry: "Tech" },
        
    ],
    finance: [
        { name: <Link component={RouterLink} to="/active-brothers/lucian-liu" color="inherit">Lucian Liu</Link>, company: 'Experian', position: "Corporate Finance", industry: "Finance" },
        { name: <Link component={RouterLink} to="/active-brothers/yong-lin" color="inherit">Yong Lin</Link>, company: 'City National Bank', position: "Specialty Banking", industry: "Finance" },

    ],
    HR: [
        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'Western Digital', position: "Talent Acquisition", industry: "HR" },
        { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'New Relic', position: "Talent Development", industry: "HR" },
        { name: <Link component={RouterLink} to="/active-brothers/ian-han" color="inherit">Ian Han</Link>, company: 'Sunwest Bank', position: "Talent Development", industry: "HR" },

    ],
    marketing: [
        { name: <Link component={RouterLink} to="/active-brothers/astyr-ko" color="inherit">Astyr Ko</Link>, company: 'ServiceNow', position: "Brand Marketing", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'Shiseido', position: "Brand Marketing", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Sunwest Bank', position: "Brand Marketing", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/serina-nguyen" color="inherit">Serina Nguyen</Link>, company: 'Issu', position: "Brand Marketing", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'DiverseVC', position: "Marketing & Content", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'NUDA Juice & Wellness', position: "Marketing Strategy", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Lin</Link>, company: 'Cybra Security', position: "Sales & Marketing", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'ViaLoop', position: "Sales & Marketing", industry: "Marketing" },

    ],
    product: [
        { name: 'Alexis Rivera', company: 'Foundations Jewelry', position: "Product Development", industry: "Product" },
        { name: <Link component={RouterLink} to="/active-brothers/vivi-liu" color="inherit">Vivi Liu</Link>, company: 'CrossBond Brand Consultant', position: "Project Management", industry: "Product" }, 
        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'GoInvo', position: "User Experience Design", industry: "Product" },
        
    ],
    operations: [
        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Pathways to Career Success', position: "Administrative Assistance", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/jasmin-he" color="inherit">Jasmin He</Link>, company: 'Seagate Technology', position: "Strategy", industry: "Product" },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'CreatorUp', position: "Strategy", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/stephen-minn" color="inherit">Stephen Minn</Link>, company: 'Ripplink', position: "Strategy", industry: "Product" },
    ]
};


export default { internships };