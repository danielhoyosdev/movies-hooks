import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography, Grid } from '@material-ui/core';

// Styles
import makeStyles from './styles';

// Redux 
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { searchMovieById } from '../../redux/actions/search';

// Selectors
import { movieResult } from '../../redux/selectors';

export default ({match}) => {
    const styles = makeStyles();
    const dispatch = useDispatch();
    const movie = useSelector(state => movieResult(state));

    useEffect(() => {
        if(!movie) {
            const movieId = match.params.id;
    
            dispatch(searchMovieById({ movieId }));
        }
    });

    if(!movie) {
        return (<CircularProgress size={100} color="primary"/>)
    }

    return (
        <Container className={styles.container}>
            <Typography variant="h4" gutterBottom={true}>{ movie.Title }</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3} className={styles.imageContainer}>
                    <img src={movie.Poster} alt={movie.Title} className={styles.image}/>
                </Grid>

                <Grid item xs={12} sm={8} md={9} className={styles.dataContainer}>
                    <Typography className={styles.plot}>{movie.Plot}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Duración:</strong>{movie.Runtime}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Año:</strong>{movie.Year}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Clasificación:</strong>{movie.Rated}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Calificación:</strong>{movie.imdbRating}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>País (es):</strong>{movie.Country}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Género:</strong>{movie.Genre}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Protagonizado por:</strong>{movie.Actors}</Typography>
                    <Typography gutterBottom={true}><strong className={styles.subtitle}>Dirigido por:</strong>{movie.Director}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}