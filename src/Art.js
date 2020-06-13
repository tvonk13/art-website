import React from 'react';
import { Box } from '@material-ui/core';

import * as data from './assets/artwork';
import TileGrid from "./TileGrid";

export default function Art() {
    return(
        <Box py={4} px={4}>
            <TileGrid list={data.all} columns={3}/>
        </Box>
    )
}