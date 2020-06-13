import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Nav from './Nav';
import Home from './Home';
import Art from './Art';
import Artwork from './Artwork';
import Photography from './Photography';
import About from './About';

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
            <Nav />
            <main>
                <Route exact path="/" component={Art} />
                <Route exact path="/art" component={Art} />
                <Route exact path="/art/:id" component={Artwork} />
                <Route exact path="/photography" component={Photography} />
                <Route exact path="/about" component={About} />
            </main>
        </div>
    );
}

export default App;