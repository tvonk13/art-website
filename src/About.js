import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Box, Grid, Paper, Fade } from "@material-ui/core";
import Prismic from 'prismic-javascript';
import Client from './prismic-configuration';
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles(theme => ({
    profile: {
        width: '200px',
        height: '200px',
        margin: theme.spacing(1),
    },
    typography: {
        marginBottom: theme.spacing(2),
        maxWidth: theme.spacing(80),
        fontSize: '1rem',
        lineHeight: '1.5',
        '& a':{
            color: theme.palette.secondary.main,
            textDecoration: 'none',
            targetNew: 'tab',
            '&:hover': {
                color: theme.palette.logoColors.pink,
            },
        }
    }
}));

export default function About() {
    const classes = useStyles();

    const [isContentLoaded, setIsContentLoaded] = useState(false);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        Client.query(
            Prismic.Predicates.at('document.type', 'profile')
        ).then(response => {
            setAbout(response.results[0]);
            setIsContentLoaded(true);
        });
    }, [])

    return(
        <>
            {
                about &&
                <Grid container justify="center" style={{margin: '40px 0'}}>
                    <Fade in={isContentLoaded} timeout={1000}>
                        <Paper elevation={2}>
                            <Grid container direction="column" alignItems="center" style={{padding: '20px 40px'}}>
                                <Grid item>
                                    <img src={about.data.image.url} alt="profile" className={classes.profile}/>
                                </Grid>
                                <Grid item container direction="column" alignItems="center" >
                                    <Typography variant="h3" color="primary">Hi, I'm Taylor</Typography>
                                    <Grid item container direction="column">
                                        <Box className={classes.typography} color="primary">
                                            {RichText.render(about.data.description)}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Fade>
                </Grid>
            }
        </>
    )
}