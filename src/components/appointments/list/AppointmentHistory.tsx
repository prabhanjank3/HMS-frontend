import { useEffect, useState } from "react";
import Table from "../../shared/components/Table";
import Label from "../../shared/components/label";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default () => {
    const [data, setData] = useState([]);
    const appointmentData = useSelector((state:RootState) => state.patient.appointmentData);
    useEffect(() => {
        const data =(appointmentData || []).map((data:any) => {
            return {
                id:data.id,
                patientid:data.patientid,
                doctorname: `Dr. ${data['opd.doctor.user.firstname']} ${data['opd.doctor.user.lastname']}`,
                reason:data.reason,
                date:data.date,
                time:data.time
            }
        }
    )
        setData(data)
    },[appointmentData])

    const columns = [ 'Date','Doctor', 'Reason' ,'time'];
    const rows = data.map((data:any) => {
        return [ data.date, data.doctorname,  data.reason, data.time]
    })
    return (<>
        <Label text="My APPOINTMENTS" />
        <Table columns={columns} rows={rows} />
    </>)
}