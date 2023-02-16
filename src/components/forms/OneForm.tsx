import TextFieldInput from "../inputs/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DateFieldInput from "../inputs/DatePicker";
import TimeFieldInput from "../inputs/TimeField";
import AutocompleteInputField from "../inputs/AutoComplete";
import React, { useEffect, useState } from "react";
import { createDefaultValuesFromFieldSet } from "../shared/helpers/helpers";

const renderField = (field: any, value:any, handleChange: (a:string, b:any) => void) => {
  if (field.type === "date") {
    return (
      <Grid item {...field.media}>
        <DateFieldInput {...field} value={value} onChange={handleChange} />
      </Grid>
    );
  }
  if (field.type === "time") {
    return (
      <Grid item {...field.media}>
        <TimeFieldInput {...field} value={value} onChange={handleChange} />
      </Grid>
    );
  }
  if (field.type === "select") {
    return (
      <Grid item {...field.media}>
        <AutocompleteInputField
          {...field}
          value={value}
          onChange={handleChange}
        />
      </Grid>
    );
  }
  return (
    <Grid item {...field.media}>
      <TextFieldInput {...field} value={value} onChange={handleChange} />
    </Grid>
  );
};
const renderRow = (row:any, value:any, handleChange: (a:string, b:any) => void) => {
  return (
    <Grid container spacing={2} marginBottom={2}>
      {[
        row.fields.map((field:any) =>
          renderField(field, value[field.name], handleChange)
        )
      ]}
    </Grid>
  );
};

export default React.forwardRef(({
  fieldSet,
  handleSubmit,
  renderActionButtons,
  trackValues
}: {
  fieldSet: any[];
  handleSubmit: (a:any) => void;
  renderActionButtons: any,
  trackValues?: (a:any) => any | null
},ref:any) => {

  const [values, setValues] = useState(createDefaultValuesFromFieldSet(fieldSet));

  const handleChange: (a:string, b:any) => void = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
  };
  
  const onSubmit = () => {
    handleSubmit(values);
  };

    useEffect(() => {
      if(trackValues)
      {
        trackValues(values)
      }
      if(ref && ref?.current)
      {
          ref.current.addEventListener('click',onSubmit, false)
          return () => 
          {
              if(ref?.current)
              ref.current.removeEventListener('click',onSubmit, false)
          }
      }
    },[values])

  return (
    <>
      <Box>
        {[fieldSet.map((row) => renderRow(row, values, handleChange))]}
        {renderActionButtons}
    </Box>
    </>
  );
});
