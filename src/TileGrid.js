import React, {useEffect, useState} from 'react';
import { Box, makeStyles, Slide } from '@material-ui/core';
import { Link } from "react-router-dom";

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
        transform: 'translate3d(0,0,0)',
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
            {list.map((tile, index) =>
                <Tile tile={tile} path={path} index={index} key={tile.title} />
            )}
        </div>
    );
}

function Tile({tile, path, index}) {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout( () => setIsLoaded(true), (Math.floor(index / 4) * 50) + ((index % 4) * 100));
    }, [])

    return (
        <Slide in={isLoaded} direction="left" key={tile.title} timeout={500}>
            <Box key={tile.title} component={Link} to={path + tile.id} className={classes.img} style={{backgroundImage: `url(${tile.thumb})`}}/>
        </Slide>
    );
}