import React, { useState } from 'react';

import { PieChart } from 'react-minimal-pie-chart';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import ReactTooltip from 'react-tooltip';

// function makeTooltipContent(entry) {
//     console.log('fo')
//     return entry.value + "%";
// }

export default function PieChartWrapper({dataIn, lightened, title, angle, isMobile}) {

    // const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    const data = dataIn.map((entry, i) => {
        if (hovered === i) {
            return {
                ...entry,
                color: lightened[i],
            };
        }

        // else if (selected === i) {
        //     return {
        //         ...entry,
        //         title: entry.title + "\n" + entry.value + "%",
        //     }
        // }

        return entry;
    });

    return (

        <React.Fragment>

            <Typography component="div">
                <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize" mb={1}>
                    {title}
                </Box>
            </Typography>

            <PieChart
                data={data}
                lineWidth={20}
                // paddingAngle={18}
                // rounded
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={(index) => ({
                    fill: data[index].color,
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                })}
                labelPosition={120}
                animate
                radius={35}
                style={{ height: isMobile ? 200 : 251 }}
                startAngle={angle}

                // segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                // segmentsShift={(index) => (index === selected ? 6 : 1)}
                // onClick={(event, index) => {
                //     setSelected(index === selected ? undefined : index);
                // }}
                onMouseOver={(_, index) => {
                    setHovered(index);

                }}
                onMouseOut={() => {
                    setHovered(undefined);
                }}
            />
            {/* <ReactTooltip
                id="chart"
                getContent={() =>
                    typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
                }
            /> */}

        </React.Fragment>
    )
}
