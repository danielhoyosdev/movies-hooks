import { makeStyles } from '@material-ui/styles';

export default makeStyles({
    itemContainer: {
        position: "relative",
        overflow: "hidden"
    },
    itemPicture: {
        width: "100%",
        height: "100%",
    },
    itemInfo:{
        position: "absolute",
        width: "calc(100% - 16px)",
        padding: 16,
        bottom: 8,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
});