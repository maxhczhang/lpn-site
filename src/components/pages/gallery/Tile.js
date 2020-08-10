import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles((theme) => ({
    gridList: {
        width: "80%",
    },
    bar: {
        height: "12%"
    }
}));


export default function Tile({tile}) {
    const classes = useStyles();



    const [isShown, setIsShown] = useState(false);

    function f(_change) {
       console.log(isShown);
       setIsShown(_change);
    }
    
    return (
        // <GridListTile key={tile.img} cols={isMobile ? 3 : (tile.cols || 1)} style={{ pointerEvents: "none" }}>
            <React.Fragment>
                <img src={tile.img} alt={tile.title}
                    onMouseEnter={() => f(true)}
                    onMouseLeave={() => f(false)} 
                />
                
                {tile.title !== "" && isShown && 
                    <GridListTileBar
                        classes={{ root: classes.bar, }}
                        title={tile.title}
                    />
                }
            </React.Fragment>
        // </GridListTile>
     
    )
}
