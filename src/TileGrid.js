import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    img: {
        boxShadow: "5px 5px 10px 0 #f0f0f0",
        '&:hover': {
            opacity: 0.4
        },
        height: 350,
        margin: theme.spacing(1),
        flex: '1 1 20%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
}));

export default function TileGrid({list, path}) {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            {list.map(tile =>
                <Box key={tile.title} component={Link} to={path + tile.id} className={classes.img} style={{backgroundImage: `url(${tile.thumb})`}}/>
            )}
        </div>
    );
}