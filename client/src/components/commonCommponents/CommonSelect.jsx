import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, MenuItem } from "@material-ui/core";
import TextError from "./TextError";
function CommonSelect(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => (
          <>
            <TextField
              select
              margin="dense"
              variant="outlined"
              id={name}
              {...rest}
              {...field}
              label={label}
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <ErrorMessage component={TextError} name={name} />
          </>
        )}
      </Field>
    </div>
  );
}

export default CommonSelect;
