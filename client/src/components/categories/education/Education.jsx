import React from "react";
import { IconButton, Typography, Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function Education(props) {
  const { classes } = props;
  return (
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
          variant="contained"
          className={classes.addBtn}
          startIcon={<AddCircleIcon />}
        >
          Add Education
        </Button>
      </Grid>
    </Grid>
  );
}

export default Education;
