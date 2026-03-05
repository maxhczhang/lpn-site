import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export const involvements2021 = {
   
    "Associated Students of UCI": [
        { name: 'Adrian Siu', company: 'ASUCI', position: "Media & Technology Intern" },
        { name: 'Kaylie Zhou', company: 'ASUCI', position: "Marketing Strategy Intern" },
    ],    

    "Beta Alpha Psi": [
        { name: 'Cathy Yun', company: 'Beta Alpha Psi', position: "Vice President" },
    ],

    "Human Resources Management Association": [
        { name: 'Jennifer Lin', company: 'HRMA', position: "VP of Operations" },
        { name: 'Omar Naji', company: 'HRMA', position: "VP of Membership" },
        { name: <Link component={RouterLink} to="/active-brothers/vivian-tran" color="inherit">Vivian Tran</Link>, company: 'HRMA', position: "VP of Outreach" },
    ],

    "Management Information Student Society": [
        { name: 'Tyler Newman', company: 'MAISS', position: "Co-President" },
        { name: 'Ryan Miranda', company: 'MAISS', position: "Executive Vice President" },
        { name: 'Haley Kim', company: 'MAISS', position: 'VP of Finance' },
        { name: 'Omar Naji', company: 'MAISS', position: 'VP of Community Development' },
    ],    

    "Marketing Association": [
        { name: 'Courtney Tsao', company: 'MA', position: "VP of Internal Affairs" },
        { name: <Link component={RouterLink} to="/active-brothers/lumin-oo" color="inherit">Lumin Oo</Link>, company: 'MA', position: "Alumni and Campus Relations Director" },
        { name: <Link component={RouterLink} to="/active-brothers/jamie-zhao" color="inherit">Jamie Zhao</Link>, company: 'MA', position: "Member Relations Director" },
        { name: 'Naveen Sastri', company: 'MA', position: "Finance Director" },
    ],

    "Merage Undergraduate Student Association": [
        { name: 'Catherine Nguyen', company: 'MUSA', position: 'VP of Academic Affairs' },
        { name: 'Raymond Dinh', company: 'MUSA', position: 'VP of Internal Relations' },
        { name: <Link component={RouterLink} to="/active-brothers/vivian-tran" color="inherit">Vivian Tran</Link>, company: 'MUSA', position: 'VP of Community Development' },
    ],

    "Undergraduate Business Association": [
        { name: 'Catherine Nguyen', company: 'UBA', position: 'President' },
        { name: 'Faith Chia', company: 'UBA', position: 'Executive Vice President' },
        { name: 'Kaylie Zhou', company: 'UBA', position: "VP of Professional Development" },
        { name: 'Naveen Sastri', company: 'UBA', position: "VP of Professional Development" },
        { name: 'Courtney Tsao', company: 'UBA', position: 'VP of Marketing' },
        { name: <Link component={RouterLink} to="/active-brothers/lumin-oo" color="inherit">Lumin Oo</Link>, company: 'UBA', position: 'VP of Marketing' },
        { name: <Link component={RouterLink} to="/active-brothers/lilian-luu" color="inherit">Lilian Luu</Link>, company: 'UBA', position: 'VP of Company Relations' },
    ],

    "Undergraduate Finance Association": [
        { name: 'Lucian Liu', company: 'UFA', position: 'President' },
        { name: 'Khoa Tran', company: 'UFA', position: 'Executive Vice President' },
        { name: 'Adrian Siu', company: 'UFA', position: 'VP of Marketing Engagement' },
        { name: 'Haley Kim', company: 'UFA', position: 'VP of Corporate Relations' },
    ],    

};

export default { involvements2021 };