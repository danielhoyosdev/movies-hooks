import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

// Components
import MovieResult from '../../components/MovieResult';
import makeStyles from './styles';

// Redux
import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';

export default ({ location }) => {
    const styles = makeStyles();
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const { movieName } = queryString.parse(location.search);
    const [looked, setLooked] = useState(false);

    useEffect(() => {
        if(movieName && !looked) {
            dispatch(searchMovie({ movieName }));
            setLooked(true);
        }
    }, [looked]);

    const renderMovies = () => {
        if(movies) {
            return (
                <Grid container spacing={2} className={styles.gridContainer}>
                    {movies.map((movie, index) => (
                        <MovieResult key={index} {...movie} />
                    ))}
                </Grid>
            ); 
        }else if(isLoading){
            return (<CircularProgress size={100} color="primary"/>);
        }

        return <div />
    }

    return (
        <Container className={styles.container} fixed align="center">
            {renderMovies()}
        </Container>
    )
}