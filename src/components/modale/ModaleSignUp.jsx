import React, { useEffect } from "react";
// import { Card, Form } from 'react-bootstrap';
import logo from "../assets/VPlogo.png";
import { Button, Modal, Form, Card, Spinner } from "react-bootstrap";
import { useState } from "react";
import { updateUserStatus } from "../../store/userAuth";
import { useDispatch } from "react-redux";
import { loadWeb3 } from "../../apis/apis";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";

const ModaleSignUp = (props) => {
  const dispatch = useDispatch();
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(true);
  const [loginID, setLoginID] = useState(localStorage.getItem("referalid"));
  

  const LogIn = async () => {
    dispatch(updateUserStatus());

    props.onHide();
    // props.handleShowReferal();
    // setIsLoadingSignIn(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Modal
          show={props.show}
          onHide={() => props.onHide()}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            className="d-flex justify-content-end align-items-end"
            closeButton
            style={{ border: "none" }}
          ></Modal.Header>

          <Modal.Body className="d-flex flex-column align-items-center gap-3 mb-5">
            {isLoadingSignIn ? (
              <>
                <Card
                  style={{ width: "25rem" }}
                  className="py-5 px-3 modal_sign"
                >
                  <h3 className="text-center">Wallet Connected</h3>
                  <div className="d-flex justify-content-center mt-5 mb-5">
                    <img
                      src={logo}
                      alt="Connect Wallet"
                      style={{ width: "35%" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center rounded">
                    <input
                      type="text"
                      value={loginID}
                      className="text-center"
                    />
                  </div>
                  <p className="text-center">
                    Your Wallet has been connected, now sign in with this
                    address to proceed.
                  </p>
                  <Form className="d-flex gap-3">
                    <Form.Check type="checkbox" />
                    <span>
                      I confirm that I am not a citizen or resident of any band
                      jurisdiction as outlined in the{" "}
                      <a href="/">Virtual Terms & Conditions.</a>
                    </span>
                  </Form>
                  <div className="mt-3">
                    <Button
                      className="w-100"
                      onClick={() => {
                        LogIn();
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </Card>
              </>
            ) : (
              <>
                <h2 className="text-dark">Requesting Signature</h2>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    props.onHide();
                    props.handleShowReferal();
                  }}
                >
                  Ok
                </button>
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ModaleSignUp;
