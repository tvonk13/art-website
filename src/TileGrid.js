import React, {useEffect, useState} from 'react';
import { makeStyles, GridList, GridListTile } from '@material-ui/core';

import Tile from "./Tile";

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%',
        height: '100%'
    },
    tileGrid: {
        display: 'flex',
    },
    tileColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    tile: {
        margin: 10
    }
}));

export default function TileGrid({list, columns}) {
    const classes = useStyles();
    const [columnList, setColumnList] = useState([]);

    useEffect(() => {
        setColumnList(convertListToMap(list, columns));
    }, []);

    function convertListToMap(list, columns) {
        let columnList = [];
        while (columnList.length <= columns) {
            columnList.push([]);
        }
        let count = 0;

        list.forEach(tile => {
            if (count === columns) {
                count = 0;
            }
            columnList[count].push(tile);
            count++;
        })

        return columnList;
    }

    return(
        <div className={classes.tileGrid}>
            {columnList.map((columnList, index) => (<TileColumn list={columnList} key={index} imgWidth={350} margin={10}/>))}
        </div>
    )
}

function TileColumn({list, imgWidth, margin}) {
    const classes = useStyles();

    return (
        <div className={classes.tileColumn}>
            {list.map((tile, index) => (<Tile tile={tile} imgWidth={imgWidth} key={index} margin={margin}/>))}
        </div>
    )
}