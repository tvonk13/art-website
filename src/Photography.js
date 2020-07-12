import React from 'react';
import { Box } from '@material-ui/core';

import { photoList } from './assets/photography';
import TileGrid from "./TileGrid";

export default function Photography() {
    return(
        <Box py={4} px={4}>
            <TileGrid list={photoList} columns={3} path="/photography/"/>
        </Box>
    )
}