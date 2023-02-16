import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setModalClose, setModalOpen } from '../../../../store/slices/componentSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props:any) {
    
  const open = useSelector((state:RootState) => state.utils.modal.open)
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(setModalOpen());
  const handleClose = () => dispatch(setModalClose());

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Schedule Appointment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {props.children}
        </Box>
      </Modal>
    </div>
  );
}