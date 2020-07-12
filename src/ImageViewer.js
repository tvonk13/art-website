import React, {useEffect, useState} from 'react';
import { makeStyles, Typography, Fade, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(5),
    },
    img: {
        maxWidth: '75vw',
        maxHeight: '75vh',
        boxShadow: "5px 5px 15px 0 #f0f0f0",
    }
}))

export default function ImageViewer(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const data = props.data;

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
            <Grid container direction="column" className={classes.container} >
                <Grid item container direction="column" style={{marginBottom: "24px"}} alignItems="center">
                    <Typography variant="h4" color="primary" style={{marginBottom: "4px"}}>{data[id].title}</Typography>
                    <Typography variant="body2" color="primary" style={{marginBottom: "4px"}}><i>{data[id].subtitle}</i></Typography>
                    { data[id].description && <Typography variant="subtitle1" color="primary">{data[id].description}</Typography> }
                </Grid>
                <Grid item container justify="center">
                    <img src={data[id].img} alt={data[id].title} className={classes.img} />
                </Grid>
            </Grid>
        </Fade>
    )
}