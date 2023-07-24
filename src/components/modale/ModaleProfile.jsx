import React from "react";
import { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModaleProfile = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      {/* Modal Setup Profile */}
      <div className="mt-5">
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>

            <Modal.Body className="d-flex flex-column gap-3 mb-4">
              {isComplete ? (
                <>
                  <div className="text-center">
                    <h2>
                      Thank you for participating in our incredibly sexy beta.
                    </h2>
                  </div>
                  <div className="text-center">
                    <p>
                      Our team is proud to share the next era of perpetual
                      trading with the community. We encourage you to trade,
                      refer, mint VRC, play with settings, and have a blast. But
                      remember, sexy doesn't mean we don't have our flaws. This
                      is a beta after all. If you encounter issues or have
                      suggestions, Please file a ticket and we will review your
                      message.
                    </p>
                    <Link to={"/home/staking"}>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          props.onHide();
                        }}
                      >
                        ok
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h2>Setup Profile</h2>
                    <span>(optional)</span>
                  </div>
                  <div className="text-center">
                    <p>
                      If you would like to show a username instead of your
                      wallet address, enter a username below to claim yours
                    </p>
                  </div>
                  <div className="w-100 mb-3">
                    <Form>
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type your username"
                      />
                    </Form>
                  </div>
                  <div className="d-flex gap-5">
                    <Button
                      className="w-25"
                      onClick={() => {
                        setIsComplete(true);
                      }}
                    >
                      Skip
                    </Button>
                    <Button
                      className="w-100"
                      onClick={() => {
                        setIsComplete(true);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ModaleProfile;
