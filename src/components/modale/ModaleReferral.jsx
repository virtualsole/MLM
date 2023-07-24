import React from 'react';
import { Button, Modal, Form, } from 'react-bootstrap';

const ModaleReferral = (props) => {
  return (
    <>
          {/* Modal Refferel */}
    <div className='mt-5'>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
     

      <Modal show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton style={{border: 'none'}}>
          
        </Modal.Header>

        <Modal.Body className='d-flex flex-column gap-3 mb-4'>
          <h3>Who reffered you to VirtualPad</h3>
          <div className='w-100'>
            <Form.Control type="number" placeholder='Referral ID' />
          </div>
          <div className='d-flex gap-5'>
            <Button className='w-25' onClick={()=>{props.onHide();props.handleShowProfile()}}>Skip</Button>
            <Button className='w-100' onClick={()=>{props.onHide();props.handleShowProfile()}}>Submit</Button>
          </div>
        </Modal.Body>

      </Modal>
    </div>
    </div>
    </>
  )
}

export default ModaleReferral;