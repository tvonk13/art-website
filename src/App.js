import React from "react";
import { Route } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import Nav from './Nav';
import Art from './Art';
import Artwork from './Artwork';
import Photography from './Photography';
import About from './About';
import Photo from "./Photo";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Grid container>
                <Grid item xs={2}>
                    <Nav />
                </Grid>
                <Grid item xs={10}>
                    <main>
                        <Route exact path="/" component={Art} />
                        <Route exact path="/art" component={Art} />
                        <Route exact path="/photography" component={Photography} />
                        <Route exact path="/art/:id" component={Artwork} />
                        <Route exact path="/photography/:id" component={Photo} />
                        <Route exact path="/about" component={About} />
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;