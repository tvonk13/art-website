import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    img: {
        boxShadow: "5px 5px 10px 0 #f0f0f0",
        '&:hover': {
            opacity: 0.4
        },
    },

}));

export default function Tile({tile, imgWidth, margin}) {
    const classes = useStyles();
    return (
        <Link to={"/art/" + tile.id}>
            <img src={tile.img} alt={tile.title} style={{width: imgWidth, margin: margin}} className={classes.img}/>
        </Link>
    )
}