import { useEffect } from "react";
import { fetchAllAppointmentsDetails } from "../../../store/actions/opdActions";
import { convertDateToIsoString } from "../../shared/helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../shared/components/Table";
import { RootState } from "../../../store";
import Label from "../../shared/components/label";


export default () => {
    const dispatch = useDispatch();

    const appointmentTableData = useSelector((state:RootState) => {
        return (state.opd?.appointmentData || []).map((data:any) => {
            return {
                id:data.id,
                patientid:data.patientid,
                name: `${data['patient.user.firstname']} ${data['patient.user.lastname']}`,
                reason:data.reason,
                time:data.time
            }
        });
    })
    const opdid = useSelector((state:RootState) => state.user.currentUser['doctor.opd.id'])
    useEffect(() => {
        dispatch(fetchAllAppointmentsDetails({opdId:opdid,date:convertDateToIsoString(new Date())}))
    },[])
    const columns = ['PatientId', 'Name', 'Reason' ,'Time'];
    const rows = appointmentTableData.map((data:any) => {
        return [data.patientid, data.name, data.reason, data.time]
    })
    return (<>
        <Label text="APPOINTMENTS" />
        <Table columns={columns} rows={rows} />
    </>)
}