import React, { useEffect, useState } from 'react';
import { Box, Fade } from '@material-ui/core';

import * as photography from './assets/photography';
import TileGrid from "./TileGrid";

export default function Photography() {
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        setIsContentLoaded(true);
    }, []);

    return(
        <Fade in={isContentLoaded} timeout={1000}>
            <Box py={4} px={4}>
                <TileGrid list={photography.all} columns={3} path="/photography/"/>
            </Box>
        </Fade>
    )
}