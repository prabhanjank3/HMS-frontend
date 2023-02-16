import TextField from "@mui/material/TextField";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimeFieldProps {
  name: string;
  label: string;
  type: string;
  value: any;
  defaultValue: any;
  extraAttributes: any;
  onChange: (a:any, b:any) => void;
}
const TimeFieldInput: React.FC<TimeFieldProps> = ({
  name,
  value,
  label,
  defaultValue,
  extraAttributes,
  onChange
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={dayjs(`01-01-2017 ${value}:00`)}
        onChange={(e:any) => {
          onChange(name, `${e.hour()}:${e.minute()}`);
        }}
        {...extraAttributes}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};
export default TimeFieldInput;
