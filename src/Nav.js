import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles, Box, Typography } from "@material-ui/core";

import Logo from './assets/artwork/logo.svg';


const useStyles = makeStyles(theme => ({
    logo: {
        width: 200,
        height: 100,
    },
    buttonLinks: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        height: 100,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
    typography: {
        '&:hover': {
            color: theme.palette.logoColors.pink,
        },
    }
}));

export default function Nav() {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        <Box py={2} px={4} height="fit-content" position="sticky" top={0}>
            <img src={Logo} className={classes.logo} alt="logo"/>
            <div className={classes.buttonLinks}>
                <ButtonLink label="ART" to="/art" pathname={pathname}/>
                <ButtonLink label="PHOTOGRAPHY" to="/photography" pathname={pathname}/>
                <ButtonLink label="ABOUT" to="/about" pathname={pathname}/>
            </div>
        </Box>
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
            style={{textDecoration: 'none'}}
            className={classes.typography}
        >
            {label}
        </Typography>
    )
}