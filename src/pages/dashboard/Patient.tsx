import { useDispatch, useSelector } from "react-redux";
import NewAppointment from "../../components/appointments/new/NewAppointment";
import Modal from '../../components/shared/components/modal';
import { setModalClose } from "../../store/slices/componentSlice";
import AppointmentHistory from "../../components/appointments/list/AppointmentHistory";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { fetchAllAppointmentsDetails } from "../../store/actions/patientActions";
import { RootState } from "../../store";

const useStyles = makeStyles((theme) => ({
    actionBar:{padding:`${theme.spacing(2)} ${theme.spacing(0)}`}
}))
export default () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const patientid = useSelector((state:RootState) => state.user.currentUser['patient.id'])
    useEffect(() => {
        dispatch(fetchAllAppointmentsDetails(patientid))
    },[])
    return <Grid container>
        <Grid item xl={12} className={classes.actionBar}>
            <Modal>
            <NewAppointment onFinish={() => dispatch(setModalClose())} />
            </Modal>
        </Grid>
    <Grid item xl={6}>
        <AppointmentHistory />
    </Grid>
    
    </Grid>
}