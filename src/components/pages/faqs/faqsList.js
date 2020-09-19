import React from 'react';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


export const faqsList = [
    {
        question: "Are we holding Fall 2020 recruitment?",
        answer: "Yes! We are holding our first virtual recruitment cycle this Fall. Our Talent team has been working hard this summer to ensure the Omicron Class’s experience is just as meaningful, challenging, and memorable as the classes that came before them. Our first Rush event is October 5th, head to our Recruitment page for more details!",
        link: <Link component={RouterLink} to="/fall-rush-2020">Rush Page.</Link>
    },
    {
        question: "Why Lambda Phi Nu?",
        answer: "We’re a close-knit fraternity with 10 years of history at UCI. When you join us, all our Active Brothers and Alumni become part of your family! You’ll make memories, lead campus organizations, and work at Fortune 500 companies. Our C-suite and Directors also have the unique opportunity to exert full control over the direction of our fraternity. This allows us to start new initiatives, transform our brand the way we want to, and shape our future ourselves. Head to our About page for more details!",
        link: <Link component={RouterLink} to="/about">About Page.</Link>
    },
    {
        question: "What differentiates us from other business fraternities?",
        answer: "Lambda Phi Nu is devoted to serving our community and we have an unparalleled presence on campus. We’ve founded nine of Merage’s business organizations, and every one of our Brothers has achieved Leadership positions in different campus organizations since. Additionally, we have direct relationships with all our Alumni, including our founders! As the only business fraternity founded at UC Irvine, our network is extremely tight knit and we foster relationships with all of our alumni. Each year alumni from all classes, even our founders, come back for fraternity events, to bond with their families, or just to have casual hang outs. This gives our Active Brothers the opportunity to receive first-hand mentorship to help them thrive in the professional world.",
    },
    {
        question: "What is Rush?",
        answer: "Our rushing process consists of four events where interested candidates get to meet our Active Brothers, Alumni, and fellow Rushees to help them decide if Lambda Phi Nu is an organization they want to join. It culminates in one invite-only event and a series of interviews with our Brothers. If everything goes well, candidates receive bids to begin the Pledging process!",
    },
    {
        question: "Can non-business majors join?",
        answer: "Yes! We value diverse perspectives from all kinds of backgrounds. Even though the majority of our brothers are majoring in Business Administration, some of our Active Brothers are pursuing degrees in Computer Science and Economics. Furthermore, our Brothers work in fields from all sorts of disciplines, including Consulting, UI/UX Design, Project Management, and more! As long as you are interested in learning more about the world of business, we encourage you to rush.",
    },
    {
        question: "What qualities do you look for in a candidate?",
        answer: "We look for students with a variety of skills, personalities, and backgrounds! Some common themes include: a genuine growth mindset, a desire to help those in need, and an aptitude for leadership. We accept students in all stages of their personal and professional development, and we encourage you to attend our rush events to learn more about what we value in candidates.",
    },
    {
        question: "What is a bid?",
        answer: "Rushee’s receive a “bid” after successfully completing our interview process. The decision to accept a bid and become a Lambda Phi Nu Associate should not be taken lightly! Our Pledging curriculum is demanding; we expect all Associates to be pushed to their limits. However, accepting a bid is the first step you must take in order to grow and become part of our family. ",
    },
    {
        question: "If I don't get a bid, can I recruit again?",
        answer: "Yes! If you feel that Lambda Phi Nu is the place for you, we encourage you to rush again. That being said, Lambda Phi Nu is not the only professional fraternity at UCI! We encourage you to look at other organizations if you feel you mesh better with their culture.",
    },
    {
        question: "What is pledging?",
        answer: "Our Pledging process consists of a seven-week curriculum designed to emulate the professional world. Associates must work together to complete a variety of tasks that teach them useful skills, including how to fundraise, market oneself, develop business plans, and more. Our Associates learn how to solve problems, all while forming strong relationships along the way.",
    },
];

export default { faqsList };