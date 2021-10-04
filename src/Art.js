import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import ImageGrid from "./ImageGrid";
import Client from './prismic-configuration';
import Prismic from 'prismic-javascript';
import { sortDesc } from './util';

export default function Art() {
    const [artList, setArtList] = useState([])

    useEffect(() => {
        Client.query([
                Prismic.Predicates.at('document.type', 'artwork'),
                Prismic.Predicates.at('document.tags', ['final'])
        ],
        { fetch : ['artwork.thumbnail', 'artwork.date'], pageSize: 100 })
            .then(response => setArtList(response.results.sort((a, b) => sortDesc(new Date(a.data.date), new Date(b.data.date)))))
    }, [])

    return(
        <Box py={4} px={4} width="100%">
            <ImageGrid list={artList} path="/art/"/>
        </Box>
    )
}