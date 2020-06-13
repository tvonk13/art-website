import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import * as data from './assets/artwork';
import TileGrid from "./TileGrid";

const useStyles = makeStyles((theme) => ({
    home: {
        width: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    artGrid: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'center',
        width:  1000,
        overflow: 'hidden',
    },
    list: {
        width: '100%',
        height: '100%'
    },
}));

export default function Home() {
    const classes = useStyles();

    return(
        <div className={classes.home}>
            <Typography variant="h5"><i>Featured</i></Typography>
            <div className={classes.artGrid}>
                <TileGrid list={data.featured} columns={3}/>
            </div>

        </div>
    )
}