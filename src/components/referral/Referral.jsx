import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Stake_History from "../stakehistory/Stake_History";
import logo from "../assets/VPlogo.png";

import "../styles/staking.css";
import Footer from "../footer/Footer";
import {
  mlmContractAddress,
  mlmContractAbi,
  tokenAbi,
  tokenAddress,
} from "../../contract/Contract";
import { loadWeb3 } from "../../apis/apis";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CopyToClipboard, onCopy } from "react-copy-to-clipboard";

const Referral = () => {
  const [registerAddress, setRegisterAddress] = useState("");
  const [defaultAddress, setDefaultAddress] = useState("");
  const [defaultAdress, setDefaultAdress] = useState("");
  const [deposit, setDeposit] = useState("");
  const { isConnected } = useSelector((state) => state.connectWallet);
  console.log("isConnected", isConnected);

  let [refreallinks, setrefreallink] = useState("");

  let [initiallink, setinitiallink] = useState(
    "http://127.0.0.1:5173/?referrallink="
  );

  const register = async () => {
    const web3 = window.web3;

    let acc = await loadWeb3();
    let mlmContractInstance = await new web3.eth.Contract(
      mlmContractAbi,
      mlmContractAddress
    );

    // console.log("instance", mlmContractInstance);
    let userInfo = await mlmContractInstance.methods.userInfo(acc).call();
    let address = await mlmContractInstance.methods
      .getReferralIDAddress(registerAddress)
      .call();
    let referalDeposit = await mlmContractInstance.methods
      .userInfo(address)
      .call();
    if (userInfo.referrer == "0x0000000000000000000000000000000000000000") {
      if (
        Number(referalDeposit.totalDeposit) > 0 ||
        registerAddress == defaultAdress
      ) {
        let owneradress = await mlmContractInstance.methods
          .register(registerAddress)
          .send({
            from: acc,
          });
        toast.success("Register successfully");
      } else {
        toast.error("Referal Deposit amount must be greater then 0");
      }
    } else {
      toast.error("Already Register");
    }
  };
  const depositAmout = async (e) => {
    const web3 = window.web3;

    let acc = await loadWeb3();
    console.log("acc", acc);
    console.log("deposit", web3.utils.toWei(deposit));
    let mlmContractInstance = await new web3.eth.Contract(
      mlmContractAbi,
      mlmContractAddress
    );
    if (deposit < 100) {
      toast.error("deposit amount must be greater then 100");
    } else {
      let tokenInstance = await new web3.eth.Contract(tokenAbi, tokenAddress);
      let approve = await tokenInstance.methods
        .approve(mlmContractAddress, web3.utils.toWei(deposit))
        .send({ from: acc });

      let depositamount = await mlmContractInstance.methods
        .deposit(web3.utils.toWei(deposit))
        .send({
          from: acc,
        });
      toast.success("Deposit successfully");
      let userInfo = await mlmContractInstance.methods.userInfo(acc).call();
      setrefreallink(userInfo.referrerID);
    }
  };
  useEffect(() => {
    if (isConnected) {
      const getDefaultTAddress = async () => {
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
          let metamaskadress = url.slice(position);
          let userInfo = await mlmContractInstance.methods.userInfo(acc).call();
          console.log("userinfo", userInfo);
          if (web3.utils.fromWei(userInfo.totalDeposit) > 0) {
            if (metamaskadress == acc) {
              setRegisterAddress(userInfo.referrerID);

              setDefaultAddress(userInfo.referrerID);
            } else {
              setRegisterAddress(metamaskadress);

              setDefaultAddress(metamaskadress);
            }
            let userInfo = await mlmContractInstance.methods
              .userInfo(acc)
              .call();
            setrefreallink(userInfo.referrerID);
          } else {
            setRegisterAddress(metamaskadress);

            setDefaultAddress(metamaskadress);
          }
        } else {
          try {
            let defaultRefrealAddress = await mlmContractInstance.methods
              .defaultReferID()
              .call();
            setDefaultAdress(defaultRefrealAddress);
            let userInfo = await mlmContractInstance.methods
              .userInfo(acc)
              .call();

            if (web3.utils.fromWei(userInfo.totalDeposit) > 0) {
              let userInfo = await mlmContractInstance.methods
                .userInfo(acc)
                .call();
              setrefreallink(userInfo.referrerID);
              setRegisterAddress(userInfo.referrerID);
              setDefaultAddress(userInfo.referrerID);
            } else {
              setDefaultAddress(defaultRefrealAddress);
              setRegisterAddress(defaultRefrealAddress);
            }
          } catch (error) {
            console.log("error", error);
          }
        }
      };
      getDefaultTAddress();
    }
  }, [isConnected]);
  const handleRegister = async (e) => {
    setRegisterAddress(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="staking mt-5 mb-5">
        <Container>
          <Row>
            <h1 className="text-center mb-3">
              <span className="staking_span">REFERRAL</span>
            </h1>

            <Col>
              <div className="stakes_right_col">
                <div className="staking_inputwrap mb-3">
                  <input
                    className="staking_input"
                    type="text"
                    placeholder="Enter address here"
                    defaultValue={defaultAddress}
                    value={registerAddress}
                    onChange={handleRegister}
                  />
                  <Button className="  mt-2" onClick={register}>
                    Register
                  </Button>
                </div>
                <div className="staking_inputwrap mb-2">
                  <input
                    className="staking_input"
                    placeholder="Enter amount"
                    type="number"
                    value={deposit}
                    onChange={(e) => {
                      setDeposit(e.target.value);
                    }}
                  />
                  <Button
                    className="  mt-2"
                    onClick={() => {
                      isConnected
                        ? depositAmout()
                        : toast.error("Connect Wallet");
                    }}
                  >
                    Deposit
                  </Button>
                </div>

                <div className="staking_inputwrap mb-3">
                  <input
                    className="staking_input"
                    value={`${initiallink}${refreallinks}`}
                    placeholder="refreal link "
                  />
                  <div className="input_max">
                    <CopyToClipboard
                      onCopy={onCopy}
                      text={isConnected && initiallink + refreallinks}
                    >
                      <a
                        className=" text-white"
                        onClick={() => {
                          isConnected && toast("Copied");
                        }}
                      >
                        Copy Link
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>

                {/* Data Below after Metamask Connection */}
                {/* <div>

                <div className="stake_col_right_content d-flex justify-content-between">
                  <p>APY</p>
                  <p>-</p>
                </div>

                <div className="stake_col_right_content">
                  <div className="d-flex justify-content-between">
                    <p>Max fine</p>
                    <p>-</p>
                  </div>
                  <p className="stake_maxfine_p">
                    Early unstake penalty is a max of - that then drops linearly
                    each day until the stake unlock date.
                  </p>
                </div>

                <div className="stake_col_right_content d-flex justify-content-between">
                  <p>Max profit (estimated)</p>
                  <p>-</p>
                </div>

                <div className="stake_col_right_content d-flex justify-content-between">
                  <p>You Staked</p>
                  <p>-</p>
                </div>

                <div className="stake_col_right_content d-flex justify-content-between">
                  <p>Your balance</p>
                  <p>-</p>
                </div>

                <div className="stake_col_right_content d-flex justify-content-between">
                  <p>Total Staked</p>
                  <p>-</p>
                </div>
                </div> */}

                {/* <Button className="w-100 head_btn">Approve</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Stake_History />
      <Footer />
    </>
  );
};

export default Referral;
