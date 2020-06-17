import React, { useState } from 'react';
import { Container, Card, Typography, Grid, TextField, Button } from '@material-ui/core';

// Styles
import makeStyles from './styles';
import { MovieIcon } from '../../icons';

export default () => {
	const styles = makeStyles();
	const [searchText, setSearchText] = useState('');

	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value);
	}

	const handleSearchTextClean = () => {
		setSearchText('');
	}

	const handleSearchMovie = (event) => {
		if(searchText.length > 0) {
			console.log("Vamos a buscar la pelicula");
		} else {
			alert("Debes ingresar en nombre de una pelicula");
		}
	}

	return (
		<Container className={styles.container}>
			<Card className={styles.cardContainer}>
				<Grid container className={styles.titleGridContainer}>
					<Grid>
						<Typography className={styles.title}>Bienvenido!</Typography>
					</Grid>

					<Grid>
						<MovieIcon className={styles.movieIcon}/>
					</Grid>
				</Grid>

				<TextField 
					value={searchText}
					placeholder="Buscar..."
					onChange={handleSearchTextChange} 
					className={styles.textFieldSearch}/>

				<Grid className={styles.buttonsContainer}>
					<Button variant="contained" onClick={handleSearchTextClean}>Limpiar</Button>
					<Button variant="contained" className={styles.searchButton} color="primary" onClick={handleSearchMovie}>Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}