import React, {useEffect, useState} from 'react';
import { Box, makeStyles, Slide, Grid, useMediaQuery } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    img: {
        boxShadow: "5px 5px 10px 0 #f0f0f0",
        "&:hover": {
            opacity: 0.4
        },
        height: 350,
        margin: theme.spacing(1),
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "translate3d(0,0,0)",
        display: 'block'
    },
    div: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    },
}));

export default function TileGrid({list, path}) {
    const isLg = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme => theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
    let columns = 1;
    if (isLg) {
        columns = 4;
    } else if (isMd) {
        columns = 3;
    } else if (isSm) {
        columns = 2;
    }

    return (
        <Grid container>
            {list.map((tile, index) =>
                <Grid item xs={12} sm={6} md={4} lg={3} key={tile.id}>
                    <Tile tile={tile} path={path} index={index} columns={columns} key={tile.title} />
                </Grid>
            )}
        </Grid>
    );
}

function Tile({tile, path, index, columns}) {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout( () => setIsLoaded(true), (Math.floor(index / columns) * 50) + ((index % columns) * 100));
    }, [index, columns])

    return (
         <Slide in={isLoaded} direction="left" key={tile.title} timeout={500}>
            <Box key={tile.title} component={Link} to={path + tile.id + "/" + index} className={classes.img} style={{backgroundImage: `url(${tile.thumb})`}}/>
         </Slide>
    );
}