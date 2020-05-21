import React, {useState} from 'react'

import Main from './Main'
import Footer from '../layouts/Footer';
import BckgrndSelector from './BckgrndSelector'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    app: {
        backgroundColor: "white",
        color: "black",
        flexGrow: 1,
        // alignItems: "center",
        // display: flex;
        // flex - direction: column;
    },
    appMain: {
        // minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // font - size: calc(10px + 2vmin);
    },
}));


export default function LPNSite() {
    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    const pages = new Map(
        [
            ['Home', 0], ['About', 1], ['Active Brothers', 2], ['Campus Involvement', 3],
            ['Careers', 4], ['Fall Rush 2020', 5], ['FAQs', 6], ['Gallery', 7], ['Contact', 8]
        ]
    )

    const setPage = (page) => {
        setPageNum(pages.get(page))
    }

    return (
        <div>
            <div className={classes.app}>

                <BckgrndSelector pageNum={pageNum} setPage={setPage}></BckgrndSelector>
                
                <div className={classes.appMain}>
                    <Main pageNum={pageNum} setPage={setPage}></Main>
                </div>
                
                <Footer></Footer>
            </div>
        </div>
    )
}