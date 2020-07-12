import React, {useEffect, useState} from 'react';
import {makeStyles, Typography, Link, Slide, Fade, Grid, Hidden} from '@material-ui/core';
import Profile from './assets/profile.jpg';

const useStyles = makeStyles(theme => ({
    profile: {
        maxHeight: '75vh',
        marginBottom: theme.spacing(2),
    },
    link: {
        '&:hover': {
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
            <Grid container justify="center" style={{marginTop: '40px'}}>
                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid lg={1}/>
                </Hidden>
                <Grid item xs={12} lg={5} container justify="center">
                    <Fade in={isImgLoaded} timeout={500}>
                        <img src={Profile} className={classes.profile} alt="profile"/>
                    </Fade>
                </Grid>
                <Hidden only={['xs', 'lg']}>
                    <Grid item sm={3}/>
                </Hidden>
                <Grid item xs={10} sm={6} lg={4} container direction="column" justify="flex-start" style={{paddingLeft: '16px'}}>
                    <Typography variant="h2" color="primary">Hi, I'm Taylor</Typography>
                    <Grid item container>
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
                <Hidden only='xs'>
                    <Grid item sm={3} lg={1}/>
                </Hidden>
            </Grid>
        </Slide>
    )
}