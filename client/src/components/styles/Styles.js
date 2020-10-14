import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
      },
      drawer: {
        [theme.breakpoints.up("sm")]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up("sm")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        backgroundColor:"#F8F9F9",
        color:"#000"
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
     
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#EAEDED",
        margin: '5rem 2rem 2rem 2rem',
        padding: "0rem 3rem 3rem 3rem",
        boxShadow: "3px 3px 6px #00000029",
        borderRadius:"1rem",
        minWidth:"700px"
      },

      linkActiveButton: {
        textDecoration: "none",
        color: "#E28C03",
      },
      linkButton: {
        textDecoration: "none",
        color: "#000",
      },
      drawerButton: {
        display: "flex",
        boxShadow: "0px 3px 6px #00000029",
        height: "3.5rem",
        alignItems: "center",
        width: 230,
        cursor: "pointer",
        textAlign: "center",
        marginTop: "1rem",
      },
      drawerButtonLineActive: {
        width: 5,
        height: "100%",
        backgroundColor: "#E28C03",
        color: "#E28C03",
      },
      drawerButtonLine: {
        width: 5,
        height: "100%",
        backgroundColor: "#EB984E",
      },
      drawerButtonText: {
        fontWeight: "550",
      },
      addBtn:{
        backgroundColor: "#FBEEE6",
      },
      cardHeader: {
        background: " linear-gradient(to right, #F4ECF7,#E8DAEF)",
        color: "#000",
        borderBottom: "2px solid #000",
    
        "&:hover": {
          color: "#000",
        },
      },
      textFeildName:{
        marginBottom: "-1rem",
        fontWeight:"600"
      },
      btnBack: {
        textTransform:"none",
        color: "#fff",
        marginLeft: "1rem",
       
        backgroundColor: "#A569BD",
        "&:hover": {
          backgroundColor: "#A569BD",
          color: "#000",
        },
      },
      nextbtn: {
        textTransform:"none",
        color: "#fff",
        backgroundColor: "#8E44AD",
        marginLeft: "1rem",
        "&:hover": {
          backgroundColor: "#8E44AD",
          color: "#000",
        },
      },

}));



