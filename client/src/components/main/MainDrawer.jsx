import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import DrawerButton from "../commonCommponents/DrawerButton";
import PersonalInfo from "../categories/personalInfo/PersonalInfo";
import Certification from "../categories/certification/Certification";
import Employment from "../categories/employment/Employment";
import Education from "../categories/education/Education";
import Languges from "../categories/languges/Languges";
function MainDrawer(props) {
  const { window, classes } = props;

  const theme = useTheme();

  // Active tab state.
  const [active, setActive] = React
    .useState
    // window.location.pathname.toString().replace("/admin/", "")
    ();

  //   React.useEffect(() => {
  //     setActive(window.location.pathname.toString().replace("/admin/", ""));
  //   }, []);

  // drawer in mobile state
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <DrawerButton
        classes={classes}
        drawerButtonName={"Personal Info"}
        linkPath={"/admin/personalInfo"}
        buttonState={"personalInfo"}
        active={active}
        setActive={setActive}
      />
      <DrawerButton
        classes={classes}
        drawerButtonName={"Certification"}
        linkPath={"/admin/certification"}
        buttonState={"certification"}
        active={active}
        setActive={setActive}
      />
      <DrawerButton
        classes={classes}
        drawerButtonName={"Employment"}
        linkPath={"/admin/employment"}
        buttonState={"employment"}
        active={active}
        setActive={setActive}
      />
      <DrawerButton
        classes={classes}
        drawerButtonName={"Education"}
        linkPath={"/admin/education"}
        buttonState={"education"}
        active={active}
        setActive={setActive}
      />
      <DrawerButton
        classes={classes}
        drawerButtonName={"Languges"}
        linkPath={"/admin/languges"}
        buttonState={"languges"}
        active={active}
        setActive={setActive}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path="/admin/personalInfo"
              render={(props) => <PersonalInfo {...props} classes={classes} />}
            />
            <Route
              path="/admin/certification"
              render={(props) => <Certification {...props} classes={classes} />}
            />
            <Route
              path="/admin/employment"
              render={(props) => <Employment {...props} classes={classes} />}
            />
            <Route
              path="/admin/education"
              render={(props) => <Education {...props} classes={classes} />}
            />
            <Route
              path="/admin/languges"
              render={(props) => <Languges {...props} classes={classes} />}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

MainDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainDrawer;
