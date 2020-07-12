import React, { useEffect, useState } from 'react';
import * as data from './assets/photography';
import { Fade, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    photoContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'flex-start'
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'fit-content',
        paddingLeft: theme.spacing(4),
        borderLeft: '1px solid grey',
        maxWidth: 500
    },
    title: {
      marginBottom: theme.spacing(1),
    },
    location: {
        marginBottom: theme.spacing(1),
    },
    img: {
        maxHeight: '100%',
        maxWidth: '80%',
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(10),
        boxShadow: "5px 5px 15px 0 #f0f0f0"
    }
}))

export default function Photo(props) {
    const classes = useStyles();
    const id = props.match.params.id;

    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        img.src = data[id].img;
    }, [id])

    return (
        <Fade in={isImgLoaded} timeout={1000}>
            <div className={classes.photoContainer}>
                    <img src={data[id].img} alt={data[id].title} className={classes.img} />
                <div className={classes.description}>
                    <Typography variant="h4" className={classes.title}>{data[id].title}</Typography>
                    <Typography variant="body2" className={classes.location}><i>{data[id].location}</i></Typography>
                    { data[id].description && <Typography variant="subtitle1">{data[id].description}</Typography> }
                </div>
            </div>
        </Fade>
    )
}