import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Nav from "./Nav";
import Art from "./Art";
import Photography from './Photography';
import About from "./About";
import ImageViewer from "./ImageViewer";
import Doodles from './Doodles';

function App() {
    return (
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
    );
}

export default App;