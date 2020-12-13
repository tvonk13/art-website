import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, Fade, Grid, CircularProgress } from "@material-ui/core";
import Client from './prismic-configuration';
import Prismic from 'prismic-javascript';

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    img: {
        maxWidth: "75vw",
        maxHeight: "75vh",
        boxShadow: "5px 5px 15px 0 #f0f0f0",
    }
}))

export default function ImageViewer(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const documentValue = props.location.pathname.split('/')[1] === 'art' ? 'artwork' : 'photo';

    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [image, setImage] = React.useState(null)

    useEffect(() => {
        Client.query([
            Prismic.Predicates.at('document.type', documentValue),
            Prismic.Predicates.at('my.' + documentValue + '.uid', id)
        ])
            .then(response => setImage(response.results[0]));
    }, [id, documentValue])


    useEffect(() => {
        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        if (image) img.src = image.data.image.url
    })

    return (
        <>
            {
                image ?
                <Fade in={isImgLoaded} timeout={500}>
                    <Grid container direction="column" className={classes.container} >
                        <Grid item container justify="center">
                            <img src={image.data.image.url} alt={image.data.image.url} className={classes.img} />
                        </Grid>
                        <Grid item container direction="column" style={{marginTop: "24px"}} alignItems="center">
                            <Typography variant="h4" color="primary" style={{marginBottom: "4px"}}>{image.data.title[0].text}</Typography>
                            <Typography variant="body2" color="primary" style={{marginBottom: "4px"}}><i>{image.data.subtitle[0].text}</i></Typography>
                            { image.data.description[0] && <Typography variant="subtitle1" color="primary">{image.data.description[0].text}</Typography> }
                        </Grid>
                    </Grid>
                </Fade> :
                <Grid container direction="column" className={classes.container} >
                    <Grid item container justify="center" alignContent="center" style={{marginTop: 80}}>
                        <CircularProgress color="secondary"/>
                    </Grid>
                </Grid>
            }
        </>
    )
}