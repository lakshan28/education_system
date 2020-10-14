import React from "react";
import { IconButton, Typography, Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import AddEducation from "./AddEducation";

function Education(props) {
  const { classes } = props;

  //add education Dialog open and close state
  const [dialogOpenState, setDialogOpenState] = React.useState(false);

  //add education close Dialog
  const handleDialogClose = React.useCallback(() => {
    setDialogOpenState(false);
  }, []);
  return (
    <>
      <AddEducation
        classes={classes}
        dialogOpenState={dialogOpenState}
        handleDialogClose={handleDialogClose}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" noWrap>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            Add your education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            Add your education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => setDialogOpenState(true)}
            variant="contained"
            className={classes.addBtn}
            startIcon={<AddCircleIcon />}
          >
            Add Education
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Education;
