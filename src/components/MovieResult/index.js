import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import makeStyles from './styles';

const MovieResult = ({ Title, Year, imdbID, Poster, history }) => {
    const styles = makeStyles();

    const handleSeeMovie = () => {
        history.push(`/movie/${imdbID}`);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={styles.itemContainer}>
            <img src={Poster === "N/A" ? "https://freecinema.info/assets/img/film-placeholder.png" : Poster} alt={Title} className={styles.itemPicture} />

            <Grid item className={styles.itemInfo}>
                <Typography className={styles.infoTitle}>{Title}</Typography>
                <Typography>{Year}</Typography>

                <Grid item align="center">
                    <Button variant="contained" color="primary" onClick={handleSeeMovie}>
                        Ver más
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withRouter(MovieResult);