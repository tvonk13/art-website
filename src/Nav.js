import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Logo from "./assets/artwork/logo.svg";

const useStyles = makeStyles(theme => ({
    logo: {
        width: 200,
        height: 100,
    },
    typography: {
        "&:hover": {
            color: theme.palette.logoColors.pink,
        },
    },
    navContainer: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(4),
        position: "sticky",
        top: 0,
    }
}));

export default function Nav() {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <Grid container alignItems="center" className={classes.navContainer}>
            <Grid item container xs={12} md={4} lg={12} justify="center">
                <Link to="/art">
                    <img src={Logo} className={classes.logo} alt="logo" />
                </Link>
            </Grid>
            <Grid item container xs={12} md={8} lg={12} spacing={2} alignItems="center" justify="center">
                <Grid item md={2} lg={12}>
                    <ButtonLink label="ART" to="/art" pathname={pathname}/>
                </Grid>
                <Grid item md={4} lg={12}>
                    <ButtonLink label="PHOTOGRAPHY" to="/photography" pathname={pathname}/>
                </Grid>
                <Grid item md={3} lg={12}>
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