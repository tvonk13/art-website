import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import Logo from "./assets/logo.png";

const useStyles = makeStyles(theme => ({
    logo: {
        height: 200,
        marginBottom: theme.spacing(2),
    },
    typography: {
        "&:hover": {
            color: theme.palette.logoColors.yellow,
        },
    },
    navContainer: {
        margin: theme.spacing(4, 0, 2, 0),
    }
}));

export default function Nav() {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <Grid container justify="center" alignItems="center" className={classes.navContainer}>
            <Grid item container justify="center" alignItems="center" direction="column">
                <Link to="/art">
                    <img src={Logo} className={classes.logo} alt="logo" />
                </Link>
            </Grid>
            <Grid item container justify="space-evenly" style={{width: "400px"}}>
                <Grid item >
                    <ButtonLink label="ART" to="/art" pathname={pathname}/>
                </Grid>
                <Grid item >
                    <ButtonLink label="PHOTOGRAPHY" to="/photography" pathname={pathname}/>
                </Grid>
                <Grid item >
                    <ButtonLink label="ABOUT" to="/about" pathname={pathname}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

function ButtonLink({label, to, pathname}) {
    var color = pathname.startsWith(to) || (pathname === "/" && to === "/art") ? "secondary" : "primary";
    const classes = useStyles();

    return (
        <Typography
            component={Link}
            to={to}
            color={color}
            style={{textDecoration: "none"}}
            className={classes.typography}
        >
            {label}
        </Typography>
    )
}