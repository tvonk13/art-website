import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Profile from './assets/profile.jpg';

const useStyles = makeStyles(theme => ({
    div: {
      display: 'flex',
    },
    profile: {
        maxWidth: '30%',
        maxHeight: '80%',
        marginRight: theme.spacing(4),
    }
}));

export default function About() {
    const classes = useStyles();

    return(
        <Box py={4} px={4} className={classes.div}>
            <img src={Profile} className={classes.profile} alt="profile"/>
            <Box>
                <Typography variant="h2">About Me</Typography>
                <Box width="60%" my={2}>
                    <Typography variant="body1">
                        Welcome to my website! I am a California-based artist who works as a software
                        engineer and likes to create art for fun. During my free time I also enjoy rock
                        climbing, hiking and camping, and playing board games. I have been drawing since
                        I was a kid and have explored many different mediums, including pencil, ink, paint,
                        linoleum block carving, and now digital art. I have always loved the outdoors and
                        nature so a lot of my work is inspired by the world around me. However, I am always
                        experimenting with different styles and striving to improve my techniques so stayed
                        tuned as I continue to upload new artwork!
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}