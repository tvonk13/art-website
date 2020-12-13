import React from "react";
import { Route, useLocation } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";
import Nav from "./Nav";
import Art from "./Art";
import Photography from './Photography';
import About from "./About";
import ImageViewer from "./ImageViewer";
import Background from './assets/background.svg'
import clsx from "clsx";
import Doodles from './Doodles';

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPositionY: '50%',
    },
    noBackground: {
        backgroundImage: 'none'
    }
}));

function App() {
    const classes = useStyles();
    const {pathname} = useLocation();

    return (
        <div className={clsx(classes.main, pathname !== '/about' && classes.noBackground)}>
            <Grid container direction="column" justify="flex-start">
                <Grid item>
                    <Nav />
                </Grid>
                <Grid item>
                    <main>
                        <Route exact path="/" component={Art} />
                        <Route exact path="/art" component={Art} />
                        <Route exact path="/doodles" component={Doodles} />
                        <Route exact path="/photography" component={Photography} />
                        <Route exact path="/art/:id" render={(props) => <ImageViewer {...props} />} />
                        <Route exact path="/doodles/:id" render={(props) => <ImageViewer {...props} />} />
                        <Route exact path="/photography/:id" render={(props) => <ImageViewer {...props} />} />
                        <Route exact path="/about" component={About} />
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;