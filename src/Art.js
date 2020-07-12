import React, { useEffect, useState } from 'react';
import { Box, Fade } from '@material-ui/core';

import * as artwork from './assets/artwork';
import TileGrid from "./TileGrid";

export default function Art() {
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(!isContentLoaded);
    }, []);

    return(
        <Fade direction="left" in={isContentLoaded} mountOnEnter unmountOnExit timeout={1000}>
            <Box py={4} px={4} width="100%">
                <TileGrid list={artwork.all} columns={3} path="/art/"/>
            </Box>
        </Fade>
    )
}