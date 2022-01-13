import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./AppErrorMessage";
import AppInput from "../AppInput";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
