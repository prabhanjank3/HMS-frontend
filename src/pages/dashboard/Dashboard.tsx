import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DoctorDashboard from './Doctor';
import PatientDashboard from './Patient';
import Navbar from '../../components/navbar';
export default () => {
    const role = useSelector((state:RootState) => state.user.currentUser?.role)
    return <>
    <Navbar />
    {(role == 'DOCTOR' && <DoctorDashboard />)}
    {(role == 'PATIENT' && <PatientDashboard />)}
    </>
}