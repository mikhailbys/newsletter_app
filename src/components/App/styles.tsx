import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 0.02,
        textDecoration: "none !important",
        transition: "color 0.5s;",
        color: "#d2d2d2",
        '&:hover': {
            color: 'white'
        }
    },
    button: {
        fontSize: 20,
        textTransform: 'none'
    },
    loginButton: {
        backgroundColor: ''
    },
    fonts: {
        fontSize: "14px"
    }
});