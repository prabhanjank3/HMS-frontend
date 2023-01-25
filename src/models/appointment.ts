import AbstractDB from "./abstractDB";

export default interface Appointment extends AbstractDB {
  patientId: string;
  doctorId: string;
  startDateTime: string;
  endDateTime: string;
  reason: string;
}
