import React, { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import metamask from "../assets/metamask.svg";
import walletconnect from "../assets/walletconnect.svg";
import coinbase from "../assets/coinbase.svg";
import { useDispatch } from "react-redux";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";
import { loadWeb3 } from "../../apis/apis";
import { updateUserStatus } from "../../store/userAuth";

const ModaleMetaMask = (props) => {
  const dispatch = useDispatch();
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(true);
  const [loginID, setLoginID] = useState(null);
  const [user, setUser] = useState("");
  const connectWallet = async () => {
    let url = window.location.href;
    let acc = await loadWeb3();
    const web3 = window.web3;
    let mlmContractInstance = await new web3.eth.Contract(
      mlmContractAbi,
      mlmContractAddress
    );

    if (url.includes("referrallink")) {
      var position = url.indexOf("=");
      position = position + 1;
      let referalId = url.slice(position);
      localStorage.setItem("referalid", referalId);
      props.onHide();

      props.handleShowSignin();
    } else {
      try {
        props.onHide();
        let defaulID = await mlmContractInstance.methods
          .defaultReferID()
          .call();
        dispatch(updateUserStatus());
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const LogIn = async () => {
    if (user == "default") {
      dispatch(updateUserStatus());

      props.onHide();
      // props.handleShowReferal();
      // setIsLoadingSignIn(false);
    } else if (user == "referal") {
      dispatch(updateUserStatus());
    }
  };

  return (
    <>
      {/* Modal MetaMask */}
      <div className="mt-5 metamask">
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
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

            <Modal.Body
              className="d-flex flex-column align-items-center gap-3 mb-5"
              style={{ cursor: "pointer" }}
            >
              <h3>Connect Your Wallet</h3>
              <div
                style={{ border: "1px solid black" }}
                className="d-block rounded w-100"
              >
                <div
                  className="d-flex justify-content-between rounded px-3 py-2"
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  <div className="d-flex gap-3 w-100">
                    <Form>
                      <Form.Check type="radio" name="radiometa" />
                    </Form>
                    <span className="">MetaMask</span>
                  </div>
                  <div className="d-flex justify-content-end w-25">
                    <img
                      src={metamask}
                      alt="MetaMask"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{ border: "1px solid black" }}
                className="d-block rounded w-100"
              >
                <div
                  className="d-flex justify-content-between rounded px-3 py-2"
                  onClick={() => {
                    props.handleShowSignin();
                    props.onHide();
                  }}
                >
                  <div className="d-flex gap-3">
                    <Form.Check type="radio" name="radiometa" />
                    <span className="">Wallet Connect</span>
                  </div>
                  <div className="d-flex justify-content-end w-25">
                    <img
                      src={walletconnect}
                      alt="MetaMask"
                      style={{ width: "35%" }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{ border: "1px solid black" }}
                className="d-block rounded w-100"
              >
                <div
                  className="d-flex justify-content-between rounded px-3 py-2"
                  onClick={() => {
                    props.handleShowSignin();
                    props.onHide();
                  }}
                >
                  <div className="d-flex gap-3">
                    <Form.Check type="radio" name="radiometa" />
                    <span className="">Coinbase Wallet</span>
                  </div>
                  <div className="d-flex justify-content-end w-25">
                    <img
                      src={coinbase}
                      alt="MetaMask"
                      style={{ width: "25%" }}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ModaleMetaMask;
