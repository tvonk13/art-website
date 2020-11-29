import React from "react";
import { Box } from "@material-ui/core";
import { doodleList } from "./assets/doodles";
import TileGrid from "./TileGrid";

export default function Doodles() {
    return(
        <Box py={4} px={4} width="100%">
            <TileGrid list={doodleList} path="/doodles/"/>
        </Box>
    )
}