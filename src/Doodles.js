import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import ImageGrid from "./ImageGrid";
import Client from './prismic-configuration';
import Prismic from 'prismic-javascript';
import {sortDesc} from './util';

export default function Doodles() {
    const [doodleList, setDoodleList] = useState([])

    useEffect(() => {
        Client.query([
            Prismic.Predicates.at('document.type', 'artwork'),
            Prismic.Predicates.at('document.tags', ['doodle'])
        ],
        { fetch : ['artwork.thumbnail', 'artwork.date'] })
            .then(response => setDoodleList(response.results.sort((a, b) => sortDesc(new Date(a.data.date), new Date(b.data.date)))));
    }, [])

    return(
        <Box py={4} px={4} width="100%">
            <ImageGrid list={doodleList} path="/art/"/>
        </Box>
    )
}