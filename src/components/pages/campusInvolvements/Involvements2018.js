import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

export const involvements2018 = {

    "Accounting Association": [
        { name: "Andrew Ly", company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: "Emily Nguyen", company: 'AA Leadership Development Program', position: 'Mentor' },
        { name: "Katherine Jiang", company: 'AA Leadership Development Program', position: "Mentor" },
        { name: "Nicholas Tam", company: 'AA Leadership Development Program', position: "Mentor" },
        { name: "Philip Au", company: 'AA Leadership Development Program', position: "Mentor" },
        { name: "Tri Do", company: 'AA Leadership Development Program', position: "Mentor" },
    ],

    "Associated Students of UCI": [
        { name: <Link component={RouterLink} to="/active-brothers/emily-nguyen" color="inherit">Emily Nguyen</Link>, company: 'ASUCI', position: "Media & Technology Intern" },
        { name: <Link component={RouterLink} to="/active-brothers/jasmin-he" color="inherit">Jasmin He</Link>, company: 'ASUCI', position: 'Student Services Business Intern' },
        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'ASUCI', position: "Student Programming Fund Board Intern" },
    ],

    "Beta Alpha Psi": [
        { name: "Carol Lai", company: 'BAP', position: "President" },
        { name: "Philip Au", company: 'BAP', position: "External Vice President" },
        { name: "Tri Do", company: 'BAP', position: "Treasurer" },
    ],

    "Marketing Association": [
        { name: <Link component={RouterLink} to="/active-brothers/jeffrey-cho" color="inherit">Jeffrey Cho</Link>, company: 'MA', position: 'Company Relations Intern' },
        { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jenny Cheung</Link>, company: 'MA', position: 'Internal Relations Intern' },
    ],

    "Merage Undergraduate Student Association": [
        { name: "Ethan Chee", company: 'MUSA', position: "Executive Vice President" },
        { name: "Jeff Lu", company: 'MUSA', position: "Finance Associate" },
        { name: "Katie Xiong", company: 'MUSA', position: "VP of Community Development" },
        { name: <Link component={RouterLink} to="/active-brothers/jenny-cheung" color="inherit">Jeffrey Cho</Link>, company: 'MUSA', position: 'Community Development Associate' },
    ],

    "Paul Merage School of Business": [
        { name: "Ivy Chen", company: 'Merage', position: "Peer Career Advisor" },
        { name: "Jessica Lee", company: 'Merage', position: "Peer Career Advisor" },
        { name: "Katie Xiong", company: 'Merage', position: "Peer Career Advisor" },
        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Merage', position: 'Student Assistant' },
    ],

    "Undergraduate Business Association": [
        { name: "Andrew Kusnohadi", company: 'UBA', position: "President" },
        { name: "Jessica Lee", company: 'UBA', position: "Director of Mentorship" },
        { name: "Joy Huang", company: 'UBA', position: "Internal Relations Director" },
    ],

    "Undergraduate Finance Association": [
        { name: "Dominic Wright", company: 'UFA', position: "VP of Corporate Outreach" },
    ],

    "Other": [
        { name: "Aira Samontina", company: 'UCI School of Law', position: "Finance Student Assistant" },
        { name: "Astyr Ko", company: 'UC Irvine', position: "Peer Advisor & Marketing Assistant" },
        { name: "Emily Nguyen", company: 'TEDxUCIrvine', position: 'Project Management Core Team' },
        { name: "Jessica Lee", company: 'SCNO', position: "Associate Consultant" },
        { name: "Nicholas Tam", company: 'Anteater Amabassador Network', position: "Treasurer" },
        { name: <Link component={RouterLink} to="/active-brothers/david-sonq" color="inherit">David Sonq</Link>, company: 'Student Success Initiatives', position: 'Mentor' },
        { name: <Link component={RouterLink} to="/active-brothers/le-an-pham" color="inherit">Le An Pham</Link>, company: 'Student Success Initiatives', position: 'Marketing Intern' },
    ]

};

export default { involvements2018 };