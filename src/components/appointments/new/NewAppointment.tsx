import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  TextField,
  createFilterOptions,
  Button
} from "@mui/material";
import { addMinutes } from "date-fns";
import { roundToNearestMinutes } from "date-fns/esm";
import Appointment from "../../../models/appointment";

const users = [
  { label: "API123-Prabhanjan Kulkarni", value: "API123" },
  { label: "API124-Anuj Kulkarni", value: "API124" }
];
const doctors = [
  { label: "527384-Shashikant Apte", value: "527384" },
  { label: "527385-Ajit Kulkarni", value: "527385" }
];

const NewAppointment = () => {
  const startDateTime = roundToNearestMinutes(new Date(), { nearestTo: 15 });
  const endDateTime = addMinutes(startDateTime, 15);

  const [newAppointment, setNewAppointment] = useState<Appointment>({
    id: "",
    patientId: "",
    doctorId: "",
    startDateTime: startDateTime.toISOString().replace("Z", ""),
    endDateTime: endDateTime.toISOString().replace("Z", ""),
    reason: ""
  });
  const filterOptions = createFilterOptions({
    limit: 5
  });
  const handleChange = (e: any, value: any) => {
    console.log(e);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            filterOptions={filterOptions}
            size="small"
            options={users}
            onChange={(e: any, value: any) => handleChange(e, value)}
            renderInput={(params) => (
              <TextField {...params} label="Select User" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            filterOptions={filterOptions}
            size="small"
            options={doctors}
            renderInput={(params) => (
              <TextField {...params} label="Select Doctor" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="datetime-local"
            style={{ width: "100%" }}
            label="Start Time"
            type="datetime-local"
            defaultValue={startDateTime.toISOString().replace("Z", "")}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            id="datetime-local"
            label="End Time"
            type="datetime-local"
            defaultValue={endDateTime.toISOString().replace("Z", "")}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-basic"
            label="Reason"
            variant="outlined"
            size="small"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginLeft: "28%" }}>
        <Grid item>
          <Button color="success" variant="contained">
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button color="error" variant="contained">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default NewAppointment;
