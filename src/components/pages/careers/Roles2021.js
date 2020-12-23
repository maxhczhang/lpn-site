import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const roles2021 = {

    "Accounting": [
        { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'BDO', position: "Tax", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/cathy-yun" color="inherit">Cathy Yun</Link>, company: 'Holthouse Carlin & Van Trigt', position: "Tax", industry: "Accounting" },
        { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Baker Tilly', position: "Tax", industry: "Accounting" },
    ],

    "Consulting": [
        { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'Sizigi', position: "Strategy Consulting", industry: "Consulting" },
        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Mentor Global Consultants', position: "Management Consulting", industry: "Strategy" },
    ],

    "Finance": [
        { name: <Link component={RouterLink} to="/active-brothers/khoa-tran" color="inherit">Khoa Tran</Link>, company: 'JPMorgan Chase & Co.', position: "MMBSI Summer Analyst", industry: "Finance" },
        { name: <Link component={RouterLink} to="/active-brothers/tiffany-wong" color="inherit">Tiffany Wong</Link>, company: 'JPMorgan Chase & Co.', position: "GFBM Summer Analyst", industry: "Finance" },
    ],

    "Human Resources": [
        { name: <Link component={RouterLink} to="/active-brothers/sahana-vairavaraj" color="inherit">Sahana Vairavaraj</Link>, company: 'Capital One', position: "HR Rotational Program", industry: "Human Resources" },
    ],

    "Marketing": [
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'HashiCorp', position: "Marketing Demand Generation", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, company: 'TJX Companies', position: "Merchandising", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'Saks OFF 5th', position: "Social Media", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/joshua-tong" color="inherit">Joshua Tong</Link>, company: 'United Exchange Corporation', position: "Marketing Assistant", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/naveen-sastri" color="inherit">Naveen Sastri</Link>, company: 'Instaboost Media', position: "Marketing & PR", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'Quokka Brew', position: "Campus Ambassador", industry: "Marketing" },
        { name: <Link component={RouterLink} to="/active-brothers/raj-singh" color="inherit">Raj Singh</Link>, company: 'Sencha Credit', position: "Content Marketer", industry: "Marketing" },
    ],

    "Operations": [
        { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'BlackBerry', position: "Managed Security Service Provider", industry: "Analytics" },
        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Agora Néos', position: "Project Management", industry: "Strategy" },
    ],

    "Product": [
        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'McAfee', position: "Product Design", industry: "Product" },
        { name: <Link component={RouterLink} to="/active-brothers/sandy-nguyen" color="inherit">Sandy Nguyen</Link>, company: 'MongoDB', position: "Product Design", industry: "Product" },
    ],

    "Technology": [
        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'Microsoft', position: "Software Engineering", industry: "Tech" },
    ],
};


export default { roles2021 };