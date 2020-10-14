import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import TextError from "./TextError";
function FormikInput(props) {
  const { label, type, name, error, shrink, helperText, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <>
          <TextField
            error={error}
            margin="dense"
            variant="outlined"
            id={name}
            {...rest}
            {...field}
            label={label}
            type={type}
            fullWidth
            autocapitalize="word"
            InputLabelProps={{
              shrink: shrink,
            }}
            helperText={helperText}
          />
          <ErrorMessage component={TextError} name={name} />
        </>
      )}
    </Field>
  );
}

export default FormikInput;
