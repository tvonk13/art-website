import React, { useEffect, useState } from 'react';
import * as data from './assets/photography';
import { Fade, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    photoContainer: {
        paddingTop: 50,
        display: 'flex',
        height: '100%',
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
        //maxHeight: 700,
        //maxWidth: 700,
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(10),
        boxShadow: "5px 5px 15px 0 #f0f0f0"
    }
}))

export default function Photo(props) {
    const classes = useStyles();
    const id = props.match.params.id;

    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [imgWidth, setImageWidth] = useState(0);
    const [imgHeight, setImageHeight] = useState(0);

    useEffect(() => {
        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        var scale = .15;
        img.src = data[id].img;
        setImageWidth(img.naturalWidth * scale)
        setImageHeight(img.naturalHeight * scale)
        console.log(img.naturalWidth + " -> " + img.naturalWidth * scale)
        console.log(img.naturalHeight + " -> " + img.naturalHeight * scale)
    }, [id])

    return (
        <div className={classes.photoContainer}>
            {
                data[id]
                ? <>
                    <Fade in={isImgLoaded} timeout={1000}>
                        <img src={data[id].img} alt={data[id].title} style={{width: imgWidth, height: imgHeight}} className={classes.img} />
                    </Fade>
                    <div className={classes.description}>
                        <Typography variant="h4" className={classes.title}>{data[id].title}</Typography>
                        <Typography variant="body2" className={classes.location}><i>{data[id].location}</i></Typography>
                        { data[id].description && <Typography variant="subtitle1">{data[id].description}</Typography> }
                    </div>
                </>
                : "Image not found"
            }

        </div>
    )
}