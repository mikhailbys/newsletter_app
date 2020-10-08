import { makeStyles } from "@material-ui/core/styles";

export default  makeStyles( {
   iconButton: {
       display: "flex",
       alignItems: "center",
       marginLeft: "auto",
       transition: "color 0.5s;",
       color: "#d2d2d2",
       '&:hover': {
           color: 'white'
       }
   },
    span: {
        paddingRight: "5px"
    },
    typography: {
        fontSize: "15px",
        fontWeight: "bold",
        transition: "color 0.5s;",
        color: "#d2d2d2",
        '&:hover': {
            color: 'white'
        }
    },
    button: {
        marginLeft: "auto"
    }
});