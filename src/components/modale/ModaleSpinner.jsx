import React from 'react';
import { Button, Modal, Form, Spinner, Card } from 'react-bootstrap';

const ModaleSpinner = () => {
  return (
    <>
      {/* Modal Spinner */}
    <div className='mt-5'>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
     <div className='d-flex justify-content-center mt-5'>
      <Button variant="primary" onClick={handleShow}>
        Connect Wallet
      </Button>
      </div>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header className='d-flex justify-content-end align-items-end' closeButton style={{border: 'none'}}>
          
        </Modal.Header>

        <Modal.Body className='d-flex flex-column align-items-center gap-3 mb-5 modale_spin_head'>
          <h2 className='modale_spin_head'>Requesting Signature</h2>
    <Spinner animation="border" role="status" className='modale_spin'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </Modal.Body>

      </Modal>
    </div>
    </div>
    </>
  )
}

export default ModaleSpinner;