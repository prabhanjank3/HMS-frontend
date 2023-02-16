import axios from "axios";
import Appointment from "../models/appointment";

const SERVER_URL = 'http://localhost:3000';

const fetchScheduledSlots = async (opdId:string, date:string) => {
    return axios.get(SERVER_URL+`/appointment/q?opdId=${opdId}&&date=${date}`)
}
const scheduleAppointment = (data:Appointment) => {
    return axios.post(SERVER_URL+`/appointment/create`, data)
}

export {fetchScheduledSlots, scheduleAppointment}