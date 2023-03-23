import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


const RegModal = (props) => {
    return (
        <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose account type
        </Modal.Title>
      </Modal.Header>
            <Modal.Body className='text-center'>
                <Link to={'/register-driver'} ><Button variant="primary">Driver</Button>{' '} </Link>
                <Link to={'/register-learner'} ><Button variant="success">Learner</Button>{' '}</Link>
      
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default RegModal;