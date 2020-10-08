import {makeStyles} from "@material-ui/core/styles";

export default makeStyles({
    paper: {
        marginTop: "10px",
        padding: "10px 10px 10px 10px"
    },
    image: {
        width: '100%'
    },
    p: {
        fontSize: '24px',
        paddingLeft: '24px',
        paddingRight: '24px'
    },
    contactDiv: {
        backgroundColor: '#f5f5f7',
        position: "inherit",
        bottom: "0",
        width: "100%"
    },
    contactP: {
        padding: "24px 20px 20px 24px"
    },
    cp: {
        padding: "5px",
        fontWeight: "bold",
        fontFamily: "monospace",
        letterSpacing: "0.05em"
    },
    ul: {
        listStyle: "none"
    },
    cpli: {
        padding: "5px",
        fontFamily: "monospace",
        letterSpacing: "0.05em",
        textDecoration: "none !important",
        "&:hover": {
            textDecoration: "underline"
        }
    }
});