import React from 'react'
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const facts = [
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">8</Link>,
        title: "Business Orgs Founded",
    },
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">55</Link>,
        title: "Current Leadership Positions",
    },
    {
        answer: <Link component={RouterLink} to="/campus-involvement" color="inherit" underline="none">5</Link>,
        title: "Current President Positions",
    },
    {
        answer: <Link component={RouterLink} to="/careers" color="inherit" underline="none">100%</Link>,
        title: "Internship Placement Rate",
    },
    {
        answer: <Link component={RouterLink} to="/careers" color="inherit" underline="none">2.5</Link>,
        title: "Average Internship Internships Per Active",
    },
    {
        answer: <Link component={RouterLink} to="/careers" color="inherit" underline="none">94%</Link>,
        title: "Full-time Offer Rate Prior To Graduation",
    },
];

export default { facts };