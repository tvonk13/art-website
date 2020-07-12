import React, {useEffect, useState} from 'react';
import { makeStyles, Box, Typography, Link, Slide } from '@material-ui/core';
import Profile from './assets/profile.jpg';

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    profile: {
        maxWidth: '25%',
        margin: theme.spacing(1),
        marginRight: theme.spacing(4),
    },
    link: {
        '&:hover': {
            color: theme.palette.logoColors.pink,
        },
    },
    typography: {
        marginBottom: theme.spacing(3),
    }
}));

export default function About() {
    const classes = useStyles();

    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(true);
    }, )

    return(
        <Slide in={isContentLoaded} timeout={500} mountOnEnter unmountOnExit direction="left">
            <Box py={4} px={4} className={classes.aboutContainer} id="aboutContainer">
                <img src={Profile} className={classes.profile} alt="profile"/>
                <Box width="30%">
                    <Typography variant="h2" color="primary">Hi, I'm Taylor</Typography>
                    <Box my={2}>
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
                    </Box>
                </Box>
            </Box>
        </Slide>
    )
}