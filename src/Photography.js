import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import ImageGrid from "./ImageGrid";
import Client from './prismic-configuration';
import Prismic from 'prismic-javascript';

export default function Photo() {
    const [photoList, setPhotoList] = useState([]);

    useEffect(() => {
        Client.query(
            Prismic.Predicates.at('document.type', 'photo'),
            { fetch : 'photo.thumbnail', orderings: '[document.first_publication_date desc]' }
        )
            .then(response => setPhotoList(response.results));
    }, [])

    return(
        <Box py={4} px={4} width="100%">
            <ImageGrid list={photoList} path="/photography/"/>
        </Box>
    )
}