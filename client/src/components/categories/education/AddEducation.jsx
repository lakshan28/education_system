import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";

import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItem,
} from "@material-ui/core";

import DevicesOtherOutlined from "@material-ui/icons/DevicesOtherOutlined";

// import Snackbar from "../Snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function AddEducation(props) {
  const { classes, dialogOpenState, handleDialogClose } = props;

  // Snackbar states.
  const [snackText, setSnackText] = React.useState();
  const [snackVariant, setSnackVariant] = React.useState();

  // reset snakbar
  const resetSnack = () => {
    setSnackText();
    setSnackVariant();
  };

  return (
    <>
      {/* <Snackbar text={snackText} variant={snackVariant} reset={resetSnack} /> */}
      <Dialog
        open={dialogOpenState}
        onClose={handleDialogClose}
        TransitionComponent={Transition}
        aria-labelledby="add-device-dialog"
        scroll="body"
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle
          className={classes.cardHeader}
          id="add-device-dialog-title"
        >
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <DevicesOtherOutlined
                fontSize="large"
                style={{ color: "#000" }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6">Add Education</Typography>
            </ListItemText>
          </ListItem>
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
}

export default React.memo(AddEducation);
