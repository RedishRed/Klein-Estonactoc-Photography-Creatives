
import './CustomModal.css';
import {Modal, Button} from 'react-bootstrap';

const CustomModal = (props) => {
	return <Modal show={props.show} onHide={props.close}>
	    <Modal.Header closeButton>
	      <Modal.Title className='modal-title'>{props.title}</Modal.Title>
	    </Modal.Header>
	    <Modal.Body className='modal-body'>{props.content}</Modal.Body>
	    <Modal.Footer>
	      <Button variant="secondary" onClick={props.close}>
	        Close
	      </Button>
	    </Modal.Footer>
	</Modal>
}

export default CustomModal;