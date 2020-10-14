import React from "react";
import { IconButton, Typography, Grid } from "@material-ui/core";

function Education() {
  return (
    <Grid container style={{ backgroundColor: "#F2F3F4", height: "100%" }}>
      <Grid item xs={12}>
        <Typography variant="h3" noWrap>
          Education
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" noWrap>
          some sample text
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Education;
