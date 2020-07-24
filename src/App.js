import React from "react";
import { Route } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";
import Nav from "./Nav";
import Art from "./Art";
import Photography from './Photography';
import About from "./About";
import ImageViewer from "./ImageViewer";
import { photoMap } from "./assets/photography";
import { artMap } from "./assets/artwork";

const useStyles = makeStyles(theme => ({
    main: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
                        <Route exact path="/art/:id" render={(props) => <ImageViewer {...props} data={artMap}/>} />
                        <Route exact path="/photography/:id" render={(props) => <ImageViewer {...props} data={photoMap}/>} />
                        <Route exact path="/about" component={About} />
                    </main>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;