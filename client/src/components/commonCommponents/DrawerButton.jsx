import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function DrawerButton(props) {
  const {
    classes,
    linkPath,
    drawerButtonName,
    buttonState,
    setActive,
    active,
  } = props;

  return (
    <Link
      to={linkPath}
      className={
        active === buttonState ? classes.linkActiveButton : classes.linkButton
      }
      onClick={() => setActive(buttonState)}
    >
      <div className={classes.drawerButton}>
        <div
          className={
            active === buttonState
              ? classes.drawerButtonLineActive
              : classes.drawerButtonLine
          }
        ></div>
        <div
          style={{
            width: 195,
          }}
        >
          <Typography className={classes.drawerButtonText}>
            {drawerButtonName}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

export default DrawerButton;
