import React from 'react';
import { Box } from '@material-ui/core';

import * as artwork from './assets/artwork';
import TileGrid from "./TileGrid";

export default function Art() {
    return(
        <Box py={4} px={4} width="100%">
            <TileGrid list={artwork.all} path="/art/"/>
        </Box>
    )
}