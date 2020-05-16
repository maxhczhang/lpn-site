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
    }
}));


export default function LPNSite() {
    const [pageNum, setPageNum] = useState(0);
    const classes = useStyles();

    return (
        <div>
            <div className={classes.app}>

                <BckgrndSelector pageNum={pageNum} setPageNum={setPageNum}></BckgrndSelector>
                
                <div className={classes.appMain}>
                    <Main pageNum={pageNum} setPageNum={setPageNum}></Main>
                </div>
                
                <Footer></Footer>
            </div>
        </div>
    )
}