import React, {useEffect, useState} from "react";
import Carousel from "react-elastic-carousel"
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(5),
        height: "fit-content"
    },
    img: {
        maxWidth: "65vw",
        maxHeight: "65vh",
        boxShadow: "5px 5px 15px 0 #f0f0f0",
        margin: theme.spacing(2)
    },
    arrow: {
        height: "fit-content",
        cursor: "pointer",
    }
}))

export default function ImageCarousel(props) {
    const classes = useStyles();
    const imageList = props.images;
    console.log(imageList);
    const index = parseInt(props.match.params.index);

    useEffect(() => {
        imageList.forEach((image) => {
            new Image().src = image.img;
        });
    }, [])

    function arrow({type, onClick, isEdge}) {
        return(
            <Grid container alignItems="center" style={{width: "fit-content"}}>
                {
                    type === "PREV"
                        ? <ChevronLeftRoundedIcon onClick={onClick} disabled={isEdge} className={classes.arrow}/>
                        : <ChevronRightRoundedIcon onClick={onClick} disabled={isEdge} className={classes.arrow}/>
                }
            </Grid>

        )
    }

    function pagination({ pages, activePage, onClick }) {
        return (
            <Grid container direction="row" justify="center">
                {pages.map(page => {
                    const isActivePage = activePage === page
                    return (
                        isActivePage
                            ? <RadioButtonCheckedIcon key={page} onClick={() => onClick(page)} color="primary"/>
                            : <RadioButtonUncheckedIcon key={page} onClick={() => onClick(page)} color="primary"/>
                    )
                })}
            </Grid>
        )
    }

    return (
        <Box mx={3}>
            <Carousel
                itemsToShow={1}
                initialFirstItem={index}
                renderArrow={arrow}
                renderPagination={pagination}
                style={{marginBottom: "20px"}}
            >
                { imageList.map( (image, i) => <Img key={i} image={image} /> )}
            </Carousel>
        </Box>
    )
}

function Img({image}) {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.container} >
            <Grid item container direction="column" style={{marginBottom: "24px"}} alignItems="center">
                <Typography variant="h4" color="primary" style={{marginBottom: "4px"}}>{image.title}</Typography>
                <Typography variant="body2" color="primary" style={{marginBottom: "4px"}}><i>{image.subtitle}</i></Typography>
                { image.description && <Typography variant="subtitle1" color="primary">{image.description}</Typography> }
            </Grid>
            <Grid item container justify="center" alignItems="center">
                <img src={image.img} alt={image.title} className={classes.img} />
            </Grid>
        </Grid>
    )
}