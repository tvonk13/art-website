import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Link, Slide, Fade, Grid } from "@material-ui/core";
import Profile from "./assets/profile.jpg";

const useStyles = makeStyles(theme => ({
    profile: {
        maxWidth: "90%",
        maxHeight: "517.33px",
        marginBottom: theme.spacing(2),
    },
    link: {
        "&:hover": {
            color: theme.palette.logoColors.pink,
        },
    },
    typography: {
        marginBottom: theme.spacing(1),
    }
}));

export default function About() {
    const classes = useStyles();

    const [isContentLoaded, setIsContentLoaded] = useState(false);
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(true);

        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        img.src = Profile;
    }, [])

    return(
        <Slide in={isContentLoaded} timeout={500} mountOnEnter unmountOnExit direction="left">
            <Grid container justify="center" style={{marginTop: "40px", marginBottom: "40px"}}>
                <Grid item xs={12} lg={4} container justify="center" >
                    <Fade in={isImgLoaded} timeout={500}>
                        <img src={Profile} className={classes.profile} alt="profile"/>
                    </Fade>
                </Grid>
                <Grid item xs={10} sm={8} lg={4} container justify="center">
                    <Grid item container direction="column" justify="flex-start">
                        <Typography variant="h2" color="primary">Hi, I'm Taylor</Typography>
                        <Grid item container direction="column" style={{maxWidth: '100%'}}>
                            <Typography variant="body1" className={classes.typography} color="primary">
                                Welcome to my website! I am a California-based artist who works as a software
                                engineer and likes to create art for fun. During my free time I also enjoy rock
                                climbing, hiking and camping, and playing board games. I have been drawing since
                                I was a kid and have explored many different mediums, including pencil, ink, paint,
                                linoleum block carving, and now digital art. I have always loved the outdoors and
                                nature so a lot of my work is inspired by the world around me. However, I am always
                                experimenting with different styles and striving to improve my techniques so stayed
                                tuned as I continue to upload new artwork!
                            </Typography>
                            <Typography variant="body1" className={classes.typography}>
                                If you want to learn more about my technical skills, check out my personal website at
                                <Link href="http://taylorvonk.com" target="_blank" color="secondary" className={classes.link}> www.taylorvonk.com</Link>.
                            </Typography>
                            <Typography variant="body1" className={classes.typography}>
                                Have questions? Shoot me an email at
                                <Link href="mailto:tvonk.art@gmail.com" target="_blank" color="secondary" className={classes.link}> tvonk.art@gmail.com</Link>.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Slide>
    )
}