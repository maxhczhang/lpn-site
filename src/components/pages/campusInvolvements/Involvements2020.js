import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export const involvements2020 = {
    "Accounting Association": [
        { name: 'David Sonq', company: 'Accounting Association', position: 'Director of Professional Development' },
        { name: 'Andrew Duong', company: 'Accounting Association', position: 'Committee Board Officer' },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'Accounting Association', position: "Committee Board Officer" },
        { name: 'Cathy Yun', company: 'AA Leadership Development Program', position: 'Coordinator' },
        { name: 'Andrew Duong', company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: 'Cathy Yun', company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: 'David Sonq', company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: 'Sahana Vairavaraj', company: 'AA Leadership Development Program', position: "Mentor" },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: 'Tiffany Chan', company: 'AA Leadership Development Program', position: 'Mentor' },
    ],

    "Associated Students of UCI": [
        { name: 'Emily Nguyen', company: 'ASUCI', position: "Media & Technology Commissioner" },
        { name: 'Ian Han', company: 'ASUCI', position: "Concerts Commissioner" },
        { name: 'Joshua Tong', company: 'ASUCI', position: 'Content Creation Commissioner' },
        { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'ASUCI', position: 'Organizing Commission Staffer' },
        { name: <Link component={RouterLink} to="/active-brothers/vivian-tran" color="inherit">Vivian Tran</Link>, company: 'ASUCI', position: 'Speakers Commission Staffer' },
    ],

    "Beta Alpha Psi": [
        { name: 'Tiffany Wong', company: 'Beta Alpha Psi', position: "Vice President" },
    ],

    "Greek Life" : [
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'Panhellenic Association', position: 'VP of Scholarship' },
        { name: 'Linda Woo', company: 'Phi Zeta Tau', position: 'Fundraising Chair' },
        { name: 'Linda Woo', company: 'Phi Zeta Tau', position: 'Webmistress' },
        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'Phi Delta Theta', position: 'Phikeia Educator' },
    ],

    "Human Resources Management Association": [
        { name: 'Sahana Vairavaraj', company: 'HRMA', position: "VP of Operations" },
    ],

    "Management Information Student Society": [
        { name: 'Le An Pham', company: 'MAISS', position: "President", logo: '../../../assets/companysLogos/MAISS.png' },
        { name: 'Matthew Nagata', company: 'MAISS', position: "VP of Finance" },
        { name: 'Ian Han', company: 'MAISS', position: "VP of Marketing" },
        { name: 'Tyler Newman', company: 'MAISS', position: "VP of Community Development" },
        { name: <Link component={RouterLink} to="/active-brothers/Ryan-Miranda" color="inherit">Ryan Miranda</Link>, company: 'MAISS', position: "VP of Professional Development" },
        { name: <Link component={RouterLink} to="/active-brothers/haley-kim" color="inherit">Haley Kim</Link>, company: 'MAISS', position: 'Professional Development Intern' },
        { name: <Link component={RouterLink} to="/active-brothers/omar-naji" color="inherit">Omar Naji</Link>, company: 'MAISS', position: 'Professional Development Intern' },
        { name: <Link component={RouterLink} to="/active-brothers/julio-cano" color="inherit">Julio Cano</Link>, company: 'MAISS', position: 'Marketing Intern' },
        { name: 'Emily Nguyen', company: 'MAISS', position: 'Mentor' },
        { name: 'Joshua Tong', company: 'MAISS', position: 'Mentor' },
        { name: 'Linda Woo', company: 'MAISS', position: 'Mentor' },
        { name: 'Naishal Shah', company: 'MAISS', position: 'Mentor' },
        { name: 'Philip Cheung', company: 'MAISS', position: 'Mentor' },
        { name: 'Yong Lin', company: 'MAISS', position: 'Mentor' },
    ],

    "Marketing Association": [
        { name: 'Sandy Nguyen', company: 'MA', position: "President" },
        { name: 'Serina Nguyen', company: 'MA', position: 'VP of Internal Affairs' },
        { name: <Link component={RouterLink} to="/active-brothers/raj-singh" color="inherit">Raj Singh</Link>, company: 'MA', position: 'External Affairs Intern' },
    ],

    "Merage Undergraduate Student Association": [
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'MUSA', position: 'Associate' },
        { name: <Link component={RouterLink} to="/active-brothers/raymond-dinh" color="inherit">Raymond Dinh</Link>, company: 'MUSA', position: 'Associate' },
        { name: 'Joshua Tong', company: 'MUSA', position: 'VP of Technology' },
        { name: 'Lucian Liu', company: 'MUSA', position: 'VP of Finance' },
        { name: <Link component={RouterLink} to="/active-brothers/vivian-tran" color="inherit">Vivian Tran</Link>, company: 'MUSA', position: 'Representative' },
    ],

    "Real Estate Association" : [
        { name: <Link component={RouterLink} to="/active-brothers/julio-cano" color="inherit">Julio Cano</Link>, company: 'Real Estate Association', position: 'Intern' },
    ],

    "Student Managed Investment Fund": [
        { name: 'Yong Lin', company: 'SMIF', position: 'Macroeconomics Team Lead' },
        { name: 'Matthew Nagata', company: 'SMIF', position: "Analyst" },
        { name: 'Naishal Shah', company: 'SMIF', position: "Analyst" },
    ],

    "Undergraduate Business Association": [
        { name: 'Stephen Minn', company: 'UBA', position: 'President' },
        { name: 'Julian Rachman', company: 'UBA', position: 'Vice President' },
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'UBA', position: 'Finance Director' },
        { name: <Link component={RouterLink} to="/active-brothers/faith-chia" color="inherit">Faith Chia</Link>, company: 'UBA', position: 'Marketing Director' },
        { name: <Link component={RouterLink} to="/active-brothers/catherine-nguyen" color="inherit">Catherine Nguyen</Link>, company: 'UBA', position: 'Marketing Director' },
    ],

    "Undergraduate Finance Association": [
        { name: 'Yong Lin', company: 'UFA', position: 'President' },
        { name: 'Lucian Liu', company: 'UFA', position: 'Executive Vice President' },
        { name: 'Serina Nguyen', company: 'UFA', position: 'VP of Marketing' },
        { name: <Link component={RouterLink} to="/active-brothers/adrian-siu" color="inherit">Adrian Siu</Link>, company: 'UFA', position: 'VP of Technology' },
        { name: 'Khoa Tran', company: 'UFA', position: 'VP of Internal Affairs' },
        { name: 'Lucian Liu', company: 'UFA', position: 'Mentor' },
        { name: 'Yong Lin', company: 'UFA', position: 'Mentor' }
    ],
    
    "Other": [
        { name: <Link component={RouterLink} to="/active-brothers/sera-xu" color="inherit">Sera Xu</Link>, company: 'ISBA', position: 'President' },
        { name: 'Tiffany Chan', company: 'UCI Dragon Boat', position: "President" },
        { name: 'Cathy Yun', company: 'FRESH Basic Needs Hub', position: 'Administrative Intern' },
        { name: 'Cathy Yun', company: 'TEDxUCIrvine', position: 'Finance Director' },
        { name: <Link component={RouterLink} to="/active-brothers/catherine-lin" color="inherit">Catherine Line</Link>, company: 'UCI Esports Arena', position: 'Stream Production Intern' },
        { name: 'Jeffrey Cho', company: 'Anteater Ambassadors Network', position: 'Supervisor' },
        { name: 'Jennifer Lin', company: 'Crossroads Campus Ministry', position: 'Inreach Team' },
        { name: <Link component={RouterLink} to="/active-brothers/julio-cano" color="inherit">Julio Cano</Link>, company: 'Undergraudate/Undeclared Mentoring Program', position: 'Mentor' },
    ]

};

export default { involvements2020 };