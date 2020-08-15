import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Link, Slide, Grid, Paper } from "@material-ui/core";
import Profile from "./assets/profile.png";

const useStyles = makeStyles(theme => ({
    profile: {
        width: '200px',
        height: '200px',
        margin: theme.spacing(1),
    },
    link: {
        "&:hover": {
            color: theme.palette.logoColors.pink,
        },
    },
    typography: {
        marginBottom: theme.spacing(2),
        maxWidth: theme.spacing(80)
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
            <Grid container justify="center" style={{margin: '40px 0'}}>
                <Paper elevation={2}>
                    <Grid container direction="column" alignItems="center" style={{padding: '20px 40px'}}>
                        <Grid item>
                            <img src={Profile} alt="profile" className={classes.profile}/>
                        </Grid>
                        <Grid item container direction="column" alignItems="center" >
                            <Typography variant="h3" color="primary" className={classes.typography}>Hi, I'm Taylor</Typography>
                            <Grid item container direction="column">
                                <Typography variant="body1" className={classes.typography} color="primary">
                                    Welcome to my website! I am a Washington-based artist who works as a software
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
                </Paper>
            </Grid>
        </Slide>
    )
}