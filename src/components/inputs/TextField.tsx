import TextField from "@mui/material/TextField";
import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  value: any;
  defaultValue: any;
  extraAttributes: any;
  onChange: (a:string,b:any) => void;
}
const TextFieldInput: React.FC<InputFieldProps> = ({
  name,
  value,
  label,
  defaultValue,
  onChange,
  extraAttributes
}) => {
  return (
    <TextField
      name={name}
      defaultValue={defaultValue}
      value={value}
      label={label}
      fullWidth
      {...extraAttributes}
      onChange={(event: any) => {
        onChange(name, event.target.value);
      }}
    />
  );
};
export default TextFieldInput;
