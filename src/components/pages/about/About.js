import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { ParallaxBanner } from 'react-scroll-parallax';

import useWindowDimensions from '../../utils/WindowListener'
import CoreValues from './CoreValues'
import LPNFacts from './LPNFacts'
import history_sep from '../../../assets/about/Founders.png'
import PieChartWrapper from './PieChartWrapper'
import { chartData } from './PieChartData';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    paragraph: {
        maxWidth: "60%"
    },
    chart: {
        // maxWidth: "85%"
        alignItems: "center",
        justify: "center"
    },
    content: {
        maxWidth: "80%"
    },
    parallax: {
        position: "relative",
        zIndex: 1,
        color: "white",
    },
    divider: {
        width: "70%"
    }
}));

export default function About({setPage}) {
    useEffect(() => {
        setPage("About")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={16} mb={16} className={classes.root}>

            <Box className={classes.paragraph}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mb={6}>
                        Who Are We?
                    </Box>
                </Typography>

                <Typography component="div">
                    <Box fontSize="1.1rem" align="left">
                        Lambda Phi Nu is a co-ed  business leadership fraternity founded at UCI
                        committed to inspiring the best in everyone. Our brothers aspire to become the innovative leaders of tomorrow in fields such as Consulting, Software Engineering, Product Marketing, and more. 
                        To achieve this, we dream big, rally support from our personal and professional networks, and get the job done.
                    </Box>

                    <Box fontSize="1.1rem" mt={4} mb={10} align="left">
                        During their time on campus, each of our brothers left behind a legacy because they saw a need to fill,
                        a problem to solve, or someone to care about. We are inspired to carry on the torch they left us.
                    </Box>
                </Typography>
            </Box>

            <Grid container alignItems="center" item xs={12} className={classes.chart}>
                <Grid item xs={4}>
                    <PieChartWrapper title="Gender" dataIn={chartData["Gender"]["data"]} lightened={chartData["Gender"]["lightened"]} angle={90} isMobile={isMobile}></PieChartWrapper>
                </Grid>
                <Grid item xs={4}>
                    <PieChartWrapper title="Major" dataIn={chartData["Major"]["data"]} lightened={chartData["Major"]["lightened"]} isMobile={isMobile}></PieChartWrapper>
                </Grid>
                <Grid item xs={4}>
                    <PieChartWrapper title="Industry" dataIn={chartData["Industry"]["data"]} lightened={chartData["Industry"]["lightened"]} isMobile={isMobile}></PieChartWrapper>
                </Grid>
            </Grid>
            <Box mb={8}></Box>
          
            <Divider className={classes.divider}></Divider>

            <Box mt={10} mb={10} className={classes.content}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Why ΛΦΝ?
                    </Box>
                </Typography>

                <Box mt={6}>
                    <LPNFacts isMobile={isMobile}></LPNFacts>
                </Box>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={10} mb={18} className={classes.content}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Our Core Values
                    </Box>
                </Typography>

                <Box mt={6}>
                    <CoreValues></CoreValues>
                </Box>
             </Box>   

            <ParallaxBanner
                style={{
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                layers={[
                    {
                        image: `url(${history_sep})`,
                        amount: 0.2,
                        props: {
                            style: {
                                backgroundImage: `url(${history_sep})`
                            }
                        },
                    },
                ]}
            >
                <div className={classes.parallax}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" fontSize="4rem">
                            History
                        </Box>
                    </Typography>
                </div>
            </ParallaxBanner>

            <Box mt={16}>
                <Typography component="div">
                    <Box fontSize="h1.fontSize" fontWeight="fontWeightBold" mb={2}>
                        Our Heritage
                    </Box>
                </Typography>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={6} mb={10} className={classes.paragraph} align="left">
                <Typography component="div">
                    <Box fontSize="h6.fontSize">
                        The 2008 Financial Crisis was the catalyst for starting Lambda Phi Nu. At a macro level, the housing bubble burst, the Dow Jones crashed to a historical low, and 1.2 million jobs were lost within one year. At a micro-level, students felt the impact with rising tuition, curtailed financial aid, and faculty shortages. To make matters worse, UCI’s business program was still young; its undergraduate business program initiated its first 200 students in the Fall of 2008. Thus, UCI was a school many companies considered dropping their sponsorship and support.
                    </Box>
                    <Box fontSize="h6.fontSize" mt={4}>
                        In the midst of these challenging times, a group of student leaders wanted to create opportunities for UCI’s business students. It began with the Accounting Association Officer Board seeking to make UCI a target school for public accounting firms. While pursuing this vision, a deep camaraderie was formed between the Officers – reflecting a brotherhood like that of a Fraternity. In the summer of 2010, our founding Chief Executive Officer decided to extend this spirit of brotherhood to student leaders in other organizations. Subsequently, the Accounting Association Board, President and Founder of Merage Undergraduate Student Association, Senior Advisor of Undergraduate Business Association, President of Undergraduate Finance Association, President and Founder of Management Information Student Society, and a Paul Merage MBA candidate convened to form Lambda Phi Nu.
                    </Box>
                    <Box fontSize="h6.fontSize" mt={4}>
                        Although a majority of the Founders already received full-time offers, they spent their senior years mentoring students, growing sponsorships, and launching new initiatives. Their motive was to give back to UCI and cultivate a legacy of student leaders who also wanted to give back. Lambda Phi Nu continues ther legacy today, working to make our school more competitive in the business world through fostering collaboration among various campus groups and stakeholders. In the words of the Apostle Paul, “do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.” Our reason to exist has been, and will always be, to “Grow Forward, Give Back” – one leader, one community, and one campus at a time.
                    </Box>
                </Typography>
            </Box>
           
            
            <Typography component="div" className={classes.paragraph}>
                <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                    Chapter Founding & Rebranding
                </Box>
            </Typography>
           

            <Box mt={2} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" style={{ textAlign: "left" }}>
                        The Chapter was founded in 2010 as Beta Alpha Psi and re-branded into Lambda Phi Nu in 2014 due to fundamental differences within organizational structures. Standard Beta Alpha Psi chapters operate under an honor society structure; however the Irvine chapter sought to operate as a fraternity. We chose to re-brand under Lambda Phi Nu in order to preserve the culture and mission we believed in.
                    </Box>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" mt={8}>
                        Founding C-Suite
                    </Box>
                    <Box fontSize="h6.fontSize" mt={1}>
                        Mr. Dennis Yu (CEO), Mr. Michael Wen (CFO), Mr. Brandon Shiaw (CIO), Mr. Art Reyes (COO), Ms. Emily Rong (CTO)
                    </Box>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" mt={8}>
                        Founding Fathers
                    </Box>
                    <Box fontSize="h6.fontSize" mt={1}>
                        Ms. Iris Chan, Mr. Edward Chow, Mr. Nathan Kobayashi, Ms. Christine Liao, Ms. Lucy Luxiao, Ms. Michelle Nguyen, Ms. Eva Park, Mr. James Shen, Mr. Adam Whitescarver, Ms. Jessica Wong, Ms. Tonie Zhu
                    </Box>
                </Typography>
            </Box>

        </Box>
    )
}
