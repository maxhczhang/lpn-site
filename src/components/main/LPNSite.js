import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter, Switch, Route, } from "react-router-dom";

import BckgrndSelector from './BckgrndSelector'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import ActiveBrothers from '../pages/brothers/ActiveBrothers'
import Profile from '../pages/brothers/profile/Profile'
import CampusInvolvement from '../pages/campusInvolvements/CampusInvolvement'
import Careers from '../pages/Careers'
import Rush from '../pages/Rush'
import FAQs from '../pages/FAQs'
import Gallery from '../pages/gallery/Gallery'
import Contact from '../pages/Contact'
import Footer from '../layouts/Footer'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        minHeight: "100vh"
    },
}));

export default function LPNSite() {
    useEffect(() => {
        console.log("I am in LPNSite!")
    });

    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    const pages = new Map(
        [
            ['Home', 0], ['About', 1], ['Active Brothers', 2], ['Campus Involvement', 3],
            ['Careers', 4], ['Rush', 5], ['FAQs', 6], ['Gallery', 7], ['Contact', 8],
            ['About Me', 9], ['Profile', 10]
        ]
    )

    const setPage = (page) => {
        setPageNum(pages.get(page))
    }

    return (
       <HashRouter>
           
            <div className={classes.app}>
                <ThemeProvider theme={theme}>
                <BckgrndSelector pageNum={pageNum}></BckgrndSelector>

                <Switch>

                    <Route exact path="/about">
                        <About setPage={setPage}/>
                    </Route>

                    <Route exact path="/active-brothers">
                        <ActiveBrothers setPage={setPage} />
                    </Route>

                    <Route exact path="/active-brothers/:name"
                        render={(props) => <Profile {...props} setPage={setPage} />}>
                    </Route>

                    <Route exact path="/campus-involvement">
                        <CampusInvolvement setPage={setPage} />
                    </Route>
                    <Route exact path="/careers">
                        <Careers setPage={setPage} />
                    </Route>

                    <Route exact path="/fall-rush-2020">
                        <Rush setPage={setPage} />
                    </Route>
                    <Route exact path="/faqs">
                        <FAQs setPage={setPage} />
                    </Route>

                    <Route exact path="/gallery">
                        <Gallery setPage={setPage} />
                    </Route>

                    <Route exact path="/contact">
                        <Contact setPage={setPage} />
                    </Route>

                    <Route path="/">
                        <Home setPage={setPage} />
                    </Route>
                   
                </Switch>
    
                <Footer></Footer>
                </ThemeProvider>
            
            </div>
        </HashRouter>
    );
}