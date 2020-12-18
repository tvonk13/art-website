import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Box, Grid, Fade } from "@material-ui/core";
import Prismic from 'prismic-javascript';
import Client from './prismic-configuration';
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles(theme => ({
    aboutContainer: {
      marginTop: theme.spacing(5),
    },
    profile: {
        width: 'auto',
        height: '400px',
        margin: theme.spacing(1, 3, 0, 0),
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            margin: theme.spacing(0),
            width: '50%',
            height: 'auto',
        },
    },
    profileImageContainer: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    typographyContainer: {
        margin: theme.spacing(0, 0, 0, 3),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(5, 5),
        },
    },
    typography: {
        maxWidth: theme.spacing(80),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
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

    const [about, setAbout] = useState(null);

    useEffect(() => {
        Client.query(
            Prismic.Predicates.at('document.type', 'about')
        ).then(response => {
            setAbout(response.results[0]);
        });
    }, []);

    // Add target=_blank attr to each of the links in the description
    useEffect(() => {
        const description = document.getElementById('description');
        if (description) {
            Array.prototype.slice.call(description.getElementsByTagName('a'))
                .forEach(a => {a.setAttribute('target', '_blank')})
        }
    }, [about]);

    return(
        <>
            {
                about &&
                <Fade in={about} timeout={500}>
                    <Grid container justify="center" className={classes.aboutContainer}>
                        <Grid item xs={12} md={5} lg={4} container className={classes.profileImageContainer}>
                                <img src={about.data.image.url} alt="profile" className={classes.profile}/>
                        </Grid>
                        <Grid item xs={12} md={5} lg={4} container direction="column" className={classes.typographyContainer}>
                            <Typography variant="h3" color="primary">Hi, I'm Taylor</Typography>
                            <Grid item container direction="column">
                                <Box id='description' className={classes.typography} color="primary">
                                    {RichText.render(about.data.description)}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            }
        </>
    )
}