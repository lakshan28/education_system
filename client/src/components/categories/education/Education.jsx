import React from "react";

import { IconButton, Typography, Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";

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
          <Typography variant="h4" noWrap>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" noWrap>
            Add your education
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography noWrap>Build your Profile</Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "2rem" }}>
          <Button
            onClick={() => setDialogOpenState(true)}
            variant="contained"
            className={classes.addBtn}
            startIcon={<AddCircleIcon />}
          >
            Add Education
          </Button>
        </Grid>
        <Grid container item xs={12} style={{ marginTop: "2rem" }}>
          <Grid item xs={6}>
            <Typography variant="h6">Title</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Duration</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <Typography>
              Bachelor of science applied mathematics and computing
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>May 2020 - May 2022</Typography>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <DeleteIcon />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Bachelor of science applied mathematics and computing
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>May 2020 - May 2022</Typography>
          </Grid>
          <Grid item xs={2}>
            {" "}
            <DeleteIcon />
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="flex-end">
          <Button variant="contained" className={classes.nextbtn}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Education;
