import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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

import FormikInput from "../../commonCommponents/FormikInput";
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

  const initialValues = {
    institute: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  };

  const validationSchema = Yup.object({
    institute: Yup.string().required("Required"),
    startMonth: Yup.string().required("Required"),
    startYear: Yup.string().required("Required"),
    endMonth: Yup.string().required("Required"),
    endYear: Yup.string().required("Required"),
  });

  const onSubmit = async (values, submitProps) => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    //   handleDialogClose();
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
        maxWidth="sm"
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
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>Institute</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormikInput
                        error={
                          formik.errors.institute && formik.touched.institute
                        }
                        name="institute"
                        type="text"
                        label={"Institute *"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Institute</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={
                          formik.errors.startMonth && formik.touched.startMonth
                        }
                        name="startMonth"
                        type="text"
                        label={"Institute *"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={
                          formik.errors.startYear && formik.touched.startYear
                        }
                        name="startYear"
                        type="text"
                        label={"Institute *"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Institute</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={
                          formik.errors.endMonth && formik.touched.endMonth
                        }
                        name="endMonth"
                        type="text"
                        label={"Institute *"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={formik.errors.endYear && formik.touched.endYear}
                        name="endYear"
                        type="text"
                        label={"Institute *"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {/* <BulkSelection
                          error={
                            formik.errors.institute && formik.touched.bulkName
                          }
                          options={bulkNames}
                          name="bulkName"
                          label={"Existing Bulk Name*"}
                        /> */}
                    </Grid>

                    <Grid
                      container
                      style={{ margin: "2rem" }}
                      item
                      xs={12}
                      justify="flex-end"
                    >
                      <Button
                        variant="contained"
                        className={classes.btnBack}
                        onClick={handleDialogClose}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.nextbtn}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default React.memo(AddEducation);
