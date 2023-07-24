import React from 'react';
import { Button, Modal, Form, Card } from 'react-bootstrap';


const ModaleLast = () => {
  return (
    <>
{/* Modal Last Message */}
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
        <Modal.Header closeButton style={{border: 'none'}}>
          
        </Modal.Header>

        <Modal.Body className='d-flex flex-column gap-3 mb-3'>
          <div className='text-center'>
            <h2>Thank you for participating in our incredibly sexy beta.</h2>
          </div>
          <div className='text-center'>
            <p>Our team is proud to share the next era of perpetual trading with the community. We encourage 
                you to trade, refer, mint VRC, play with settings, and have a blast. But remember, sexy doesn't mean
                we don't have our flaws. This is a beta after all. If you encounter issues or have suggestions, Please
                file a ticket and we will review your message.
            </p>
          </div>

        </Modal.Body>

      </Modal>
    </div>
    </div>
    </>
  )
}

export default ModaleLast;