import React from "react";
import { Route } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import Nav from './Nav';
import Art from './Art';
import Photography from './Photography';
import About from './About';

import { artList } from './assets/artwork';
import { photoList } from './assets/photography';
import ImageCarousel from "./ImageCarousel";

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
                <Grid item xs={12} lg={2}>
                    <Nav />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <main>
                        <Route exact path="/" component={Art} />
                        <Route exact path="/art" component={Art} />
                        <Route exact path="/photography" component={Photography} />
                        <Route exact path="/art/:id/:index" render={(props) => <ImageCarousel {...props} images={artList}/>} />
                        <Route exact path="/photography/:id/:index" render={(props) => <ImageCarousel {...props} images={photoList}/>} />
                        <Route exact path="/about" component={About} />
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;