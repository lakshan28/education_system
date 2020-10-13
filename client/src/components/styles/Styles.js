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
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
}));



