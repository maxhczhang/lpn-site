import React from 'react'

import Home from './pages/Home'

import Typography from '@material-ui/core/Typography';

export default function Main({pageNum}) {

    switch(pageNum) {
    
        case 0:
          return <Home></Home>
          
        case 1:
          return (
            <Typography variant="h1">About tings</Typography>
          )

        case 2:
            return (
              <Typography variant="h1">Brother tings</Typography>
            )

        case 3:
            return (
                <Typography variant="h1">Careers tings</Typography>
            )

        case 4:
            return (
                <Typography variant="h1">Fall Rush tings</Typography>
            )
    
        default:
          return (
            <Typography variant="h1">so many tings</Typography>
          )
    }
}