import React, {useEffect, useState} from 'react';
import * as data from './assets/artwork';
import { makeStyles, Typography, Fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    artworkContainer: {
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
    medium: {
        marginBottom: theme.spacing(1),
    },
    img: {
        //maxHeight: '100%',
        //maxWidth: '80%',
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(10),
        boxShadow: "5px 5px 15px 0 #f0f0f0",
    }
}))

export default function Artwork(props) {
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
    })

    return (
        <div className={classes.artworkContainer}>
            {
                data[id]
                ? <>
                    <Fade in={isImgLoaded} timeout={1000}>
                        <img src={data[id].img} alt={data[id].title} style={{width: imgWidth, height: imgHeight}} className={classes.img} />
                    </Fade>
                    <div className={classes.description}>
                        <Typography variant="h4" className={classes.title}>{data[id].title}</Typography>
                        <Typography variant="body2" className={classes.medium}><i>{data[id].medium}</i></Typography>
                        { data[id].description && <Typography variant="subtitle1">{data[id].description}</Typography> }
                    </div>
                </>
                : "Image not found"
            }

        </div>
    )
}