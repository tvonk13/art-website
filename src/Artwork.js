import React, {useEffect, useState} from 'react';
import * as data from './assets/artwork';
import { makeStyles, Typography, Fade, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    artworkContainer: {
        paddingTop: theme.spacing(5),
    },
    img: {
        maxWidth: '75vw',
        maxHeight: '75vh',
        boxShadow: "5px 5px 15px 0 #f0f0f0",
    }
}))

export default function Artwork(props) {
    const classes = useStyles();
    const id = props.match.params.id;

    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        img.src = data[id].img;
    })

    return (
        <Fade in={isImgLoaded} timeout={1000}>
            <Grid container direction="column" className={classes.artworkContainer} >
                <Grid item container direction="column" style={{marginBottom: "24px"}} alignItems="center">
                    <Typography variant="h4" color="primary" style={{marginBottom: "4px"}}>{data[id].title}</Typography>
                    <Typography variant="body2" color="primary" ><i>{data[id].medium}</i></Typography>
                </Grid>
                <Grid item container justify="center">
                    <img src={data[id].img} alt={data[id].title} className={classes.img} />
                </Grid>
            </Grid>
        </Fade>
    )
}