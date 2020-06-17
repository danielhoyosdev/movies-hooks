import { makeStyles } from '@material-ui/styles'

const centeredStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

export default makeStyles({
    container: {
        height: "100vh",
        ...centeredStyle
    },
    cardContainer: {
        width: 400,
        height: 200,
        padding: '2rem',
        flexDirection: "column",
        ...centeredStyle
    },
    title: {
        fontSize: '3rem',
    }, 
    titleGridContainer: {
        ...centeredStyle
    },
    textFieldSearch: {
        width: "100%"
    },
    buttonsContainer: {
        marginTop: "2rem",
    },
    searchButton: {
        marginLeft: "1rem",
    },
    movieIcon: {
        fontSize: "4rem",
    }
});