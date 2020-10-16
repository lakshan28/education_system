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
import CommonSelect from "../../commonCommponents/CommonSelect";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const monthOption = [
  "January",
  "February",
  "March",
  "April ",
  "May",
  "June",
  "July ",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function AddEducation(props) {
  const { classes, dialogOpenState, handleDialogClose, refreshTable } = props;

  //initial data
  const initialValues = {
    institute: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  };

  // validation fields
  const validationSchema = Yup.object({
    institute: Yup.string().required("Required"),
    startMonth: Yup.string().required("Required"),
    startYear: Yup.number().required("Required"),
    endMonth: Yup.string().required("Required"),
    endYear: Yup.number().required("Required"),
  });

  //supmit all data
  const onSubmit = async (values, submitProps) => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    const inserData = {
      institute: values.institute,
      duration: `${values.startMonth} ${values.startYear} to ${values.endMonth} ${values.endYear}`,
    };
    const packet = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(inserData),
    };
    const url = "/api/education";
    await fetch(url, packet)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        refreshTable();
      })
      .catch((err) => console.log(err));
    handleDialogClose();
  };

  return (
    <>
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
                  <Grid container spacing={2} style={{ marginTop: "2rem" }}>
                    <Grid item xs={12}>
                      <Typography className={classes.textFeildName}>
                        Institute
                      </Typography>
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
                      <Typography className={classes.textFeildName}>
                        Period
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelect
                        error={
                          formik.errors.startMonth && formik.touched.startMonth
                        }
                        options={monthOption}
                        name="startMonth"
                        label={"Month *"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={
                          formik.errors.startYear && formik.touched.startYear
                        }
                        name="startYear"
                        type="number"
                        label={"Year *"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={classes.textFeildName}>
                        Through
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelect
                        error={
                          formik.errors.endMonth && formik.touched.endMonth
                        }
                        options={monthOption}
                        name="endMonth"
                        label={"Month *"}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormikInput
                        error={formik.errors.endYear && formik.touched.endYear}
                        name="endYear"
                        type="number"
                        label={"Year *"}
                      />
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
