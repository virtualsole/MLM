import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import Stake_History from "../stakehistory/Stake_History";
import logo from "../assets/VPlogo.png";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import greycircle from "../assets/grey-circle.png";
import { FaWallet } from "react-icons/fa";

import "../styles/staking.css";
import "./nordek.css";
import Vstack from "./Vstack";
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
const Staking = () => {
  const [registerAddress, setRegisterAddress] = useState("");
  const [defaultAddress, setDefaultAddress] = useState("");
  const [defaultAdress, setDefaultAdress] = useState("");
  const [deposit, setDeposit] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const { isConnected } = useSelector((state) => state.connectWallet);

  let [refreallinks, setrefreallink] = useState("");

  let [initiallink, setinitiallink] = useState(
    "http://127.0.0.1:5173/nft/staking/?referrallink="
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
    let referalDeposit = await mlmContractInstance.methods
      .userInfo(registerAddress)
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
  const depositAmout = async () => {
    if (isConnected) {
      const web3 = window.web3;

      let acc = await loadWeb3();

      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );
      if (deposit < 100) {
        toast.error("deposit amount must be greater then 100");
      } else {
        let tokenInstance = await new web3.eth.Contract(tokenAbi, tokenAddress);
        let approve = await tokenInstance.methods
          .approve(mlmContractAddress, web3.utils.toWei(String(deposit)))
          .send({ from: acc });

        let depositamount = await mlmContractInstance.methods
          .deposit(web3.utils.toWei(Staking(deposit)))
          .send({
            from: acc,
          });
        toast.success("Deposit successfully");
        // setrefreallink(acc);
      }
    } else {
      toast.error("Connect Wallet");
    }
  };
  const getUserInfo = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    let mlmContractInstance = await new web3.eth.Contract(
      mlmContractAbi,
      mlmContractAddress
    );
    let blockNumber = await mlmContractInstance.methods.checkblock().call();
    let userInfo = await mlmContractInstance.methods.userInfo(acc).call();
    let totalStaked = userInfo.totalDeposit;
    totalStaked = web3.utils.fromWei(totalStaked);
    let tokenInstance = await new web3.eth.Contract(tokenAbi, tokenAddress);
    let tokenBalance = await tokenInstance.methods
      .balanceOf(mlmContractAddress)
      .call();
    tokenBalance = web3.utils.fromWei(tokenBalance);
    setUserInfo({
      balance: tokenBalance,
      blockNumber: blockNumber,
      totalStaked: totalStaked,
    });
  };
  const getBalance = async () => {};
  useEffect(() => {
    if (isConnected) {
      getUserInfo();
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

          if (web3.utils.fromWei(userInfo.totalDeposit) > 0) {
            if (metamaskadress == acc) {
              setRegisterAddress(userInfo.referrer);

              setDefaultAddress(userInfo.referrer);
            } else {
              setRegisterAddress(metamaskadress);

              setDefaultAddress(metamaskadress);
            }
            setrefreallink(acc);
          } else {
            setRegisterAddress(metamaskadress);

            setDefaultAddress(metamaskadress);
          }
        } else {
          try {
            let defaultRefrealAddress = await mlmContractInstance.methods
              .defaultRefer()
              .call();
            setDefaultAdress(defaultRefrealAddress);
            let userInfo = await mlmContractInstance.methods
              .userInfo(acc)
              .call();
            if (web3.utils.fromWei(userInfo.totalDeposit) > 0) {
              setrefreallink(acc);
              setRegisterAddress(userInfo.referrer);
              setDefaultAddress(userInfo.referrer);
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
  const handlePercent = async (percent) => {
    if (isConnected) {
      let percentValue = (Number(percent) / 100) * Number(userInfo?.balance);
      setDeposit(percentValue);
    } else {
      toast.error("Connect Wallet");
    }
  };
  return (
    <>
      <div className="staking mt-5 mb-5">
        <Container>
          <Row>
            <h1 className="text-center mb-3">
              <span className="staking_span">VIRTUAL</span> STAKING
            </h1>
            <Vstack />

            <Col xs={12} sm={12} md={12} lg={8}>
              <div className="d-flex justify-content-between gap-2 nordek_left_upper">
                <div className="nordek wd">
                  <div className="img1">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <p>{userInfo?.blockNumber}</p>
                    <span className="span">BLOCK NUMBER</span>
                  </div>
                </div>

                <div className="nordek wd">
                  <div className="img2">
                    <img src={img2} alt="" />
                  </div>
                  <div className="content">
                    <p>{userInfo?.balance} VRC</p>
                    <span className="span">BALANCE</span>
                  </div>
                </div>

                <div className="nordek">
                  <div className="img3">
                    <img src={img3} alt="" />
                  </div>
                  <div className="content d-flex gap-5">
                    <div>
                      <p>{userInfo?.totalStaked} VRC</p>
                      <span className="span">YOUR TOTAL STAKED</span>
                    </div>
                    <div className="line"></div>
                    <div>
                      <p>0 VRC</p>
                      <span className="span">TOTAL STAKED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="nordek_left_lower back mt-5">
                    <Form>
                      <h3>Validators</h3>
                      <div className="checkboxes d-flex">
                        <div className="first_check d-flex gap-2">
                          <Form.Check type='checkbox' name='nordek_check' />
                          <span>Show only validators that have open delegation</span>
                        </div>

                        <div className="first_check d-flex gap-2">
                          <Form.Check type='checkbox' name='nordek_check' />
                          <span>Show only old validators</span>
                        </div>

                        <div className="first_check d-flex gap-2">
                          <Form.Check type='checkbox' name='nordek_check' />
                          <span>Show only those i have stake in</span>
                        </div>
                      </div>

                      <Table responsive className='mt-5'>
                        <thead>
                          <tr>
                            <th></th>
                            <th>
                              <div className='d-flex gap-2'>
                                <span>NAME</span>
                                <img src={question} alt="nordek_question" />
                              </div>
                            </th>

                            <th>
                              <div className='d-flex gap-2'>
                                <span>STAKED AMOUNT</span>
                                <img src={question} alt="nordek_question" />
                              </div>
                            </th>

                            <th>
                              <div className='d-flex gap-2'>
                                <span>FEE</span>
                                <img src={question} alt="nordek_question" />
                              </div>
                            </th>

                            <th>
                              <div className='d-flex gap-2'>
                                <span>UP TIME</span>
                                <img src={question} alt="nordek_question" />
                              </div>
                            </th>

                            <th>WEBSITE</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <div className='d-flex gap-2'>
                                <img src={validator} alt="validator" className='rounded-circle' style={{width:'20%'}} />
                                <span><u>Validator1</u></span>
                              </div>
                            </td>
                            <td>200,190.00</td>
                            <td>15%</td>
                            <td>100%</td>
                            <td>https://nordekscan.com</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Form>
                  </div> */}
              {/* <div> */}
              <div className="lower_bsc_table back  mt-5">
                <div className="bsc_head">
                  <h2>Latest Blocks</h2>
                </div>
                <hr className="w-100 p-0" />
                <div className="bsc_lower">
                  <div className="bsc_lower_body">
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110109
                            </a>
                            <span>20 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Alan Turing
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                182 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.12791 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110108
                            </a>
                            <span>23 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Avengers
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                268 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.20171 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110107
                            </a>
                            <span>26 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Ankr
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                127 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.06755 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110106
                            </a>
                            <span>29 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Legend III
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                274 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.08204 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110105
                            </a>
                            <span>32 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Fuji
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                178 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.09119 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110104
                            </a>
                            <span>35 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                0x733fda7714a05960b7...
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                170 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.07607 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110103
                            </a>
                            <span>38 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: VRC48 Club
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                165 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.0697 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110102
                            </a>
                            <span>41 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: BscScan
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                135 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.09835 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110101
                            </a>
                            <span>44 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                Validator: Namelix
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                128 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.06976 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <div className="d-flex gap-2">
                          <div className="bsc_lower_btn">
                            <Button className="bg-muted">BK</Button>
                          </div>
                          <div className="bsc_lower_content d-flex flex-column">
                            <a href="/" target="blank">
                              27110100
                            </a>
                            <span>47 sec ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col sm={8}>
                        <div className="d-flex justify-content-between">
                          <div className="validation">
                            <span className="d-flex gap-2">
                              Validated By
                              <a href="/" target="blank">
                                0x61dd481a114a2e761c...
                              </a>
                            </span>
                            <div>
                              <a href="/" target="blank">
                                122 txns
                              </a>
                              <span> in 3 sec</span>
                            </div>
                          </div>
                          <div>
                            <span>0.05949 VRC</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                </div>
                <div className="bsc_footer">
                  <Button className="w-100 ftr-btn">View all blocks</Button>
                </div>
              </div>
              {/* </div> */}
            </Col>

            <Col lg={4}>
              <div className="nordek_right_staking back">
                <Form>
                  <div className="shapes mb-3 d-flex justify-content-between align-items-center">
                    <div className="circle">
                      <img src={greycircle} alt="" width={70} />
                    </div>
                    <div className="lines d-flex flex-column gap-2 w-75">
                      <div className="line1 rounded"></div>
                      <div className="line2 rounded"></div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-3">
                    <p>Balance -</p>
                    <span>{userInfo?.balance} VRC</span>
                  </div>
                  <div className="nordek_right_first_input">
                    <Form.Control
                      type="number"
                      value={deposit}
                      onChange={(e) => {
                        setDeposit(e.target.value);
                      }}
                      placeholder="0.00"
                    />
                    <span className="symbol">VRC</span>
                  </div>

                  <div className="percentages d-flex justify-content-around mt-3">
                    {[25, 50, 75, 100].map((value) => {
                      return (
                        <div
                          className="fst rond"
                          onClick={() => {
                            handlePercent(value);
                          }}
                        >
                          <span>{value} %</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* <div className="scnd_input mt-3 rounded">
                    <div
                      style={{ fontSize: ".693em", fontWeight: "500" }}
                      className="d-flex justify-content-between"
                    >
                      <p>PROJECT REWARDS (1Y)</p>
                      <span>+ 0%</span>
                    </div>
                    <h5>0 NRK</h5>
                  </div> */}
                  <div className="mt-5 ">
                    <Button
                      className="lower_btn w-100"
                      onClick={depositAmout}
                      disabled={!deposit}
                    >
                      Stake
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>

            {/* <Col>
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
                      text={initiallink + refreallinks}
                    >
                      <a
                        className=" text-white"
                        onClick={() => {
                          toast("Copied");
                        }}
                      >
                        Copy Link
                      </a>
                    </CopyToClipboard>
                  </div>
                </div>



                <Button className="w-100 head_btn">Approve</Button>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
      <Stake_History />
      <Footer />
    </>
  );
};

export default Staking;

// Data outdated but to keep for furthur need

{
  /* <div className="upper_staking mb-3">
        <div className="upper_left_staking">
          <div>
            <span>00.00 BFIC</span>
            <p>My Staking</p>
          </div>

          <div>
            <span>$00.00</span>
            <p>My Team</p>
          </div>

        <div>
            <span>$00.00</span>
            <p>Active Levels</p>
        </div>

        </div>

        <div className='middle_img_staking'>
          <img src={logo} alt="Staking Logo" className='middle_image_staking' />
        </div>

        <div className="upper_right_staking">
          <div>
            <span>00.00 BLV</span>
            <p>Staking Rewards</p>
          </div>

          <div>
            <span>$00.00</span>
            <p>Team Rewards</p>
          </div>

          <div>
            <span>$00.00</span>
            <p>Total Rewards</p>
          </div>
        </div>
      </div> */
}

{
  /* <Col lg={6} md={12} sm={12} className="mb-5">
              <p>
                Only staked VRC will be considered for all the upcoming Sales in
                the Virtual Ecosystem.
              </p>
              <p>- Earn attractive APY on your staked VRC tokens.</p>
              <div className="stake_table mb-3">
                <Table className="">
                  <thead>
                    <tr>
                      <th>Staking Pools (Duration)</th>
                      <th>Rewards (APY)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Participants</td>
                      <td className="text_td">0</td>
                    </tr>
                    <tr>
                      <td>Total Staked in Pool</td>
                      <td className="text_td">VRC</td>
                    </tr>
                    <tr>
                      <td>Total Staked in Pool (USD)</td>
                      <td className="text_td">$</td>
                    </tr>
                    <tr>
                      <td>Total Rewards</td>
                      <td className="text_td">VRC</td>
                    </tr>
                    <tr>
                      <td>Total Rewards (USD)</td>
                      <td className="text_td">$</td>
                    </tr>
                    <tr>
                      <td>Total Withdrawls</td>
                      <td className="text_td">VRC</td>
                    </tr>
                    <tr>
                      <td>Total Withdrawls (USD)</td>
                      <td className="text_td">$</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <p>How to Participate</p>
              <div>
                <p>
                  1- Choose a duration and enter the amount you wish to stake
                  and take part in the upcoming sale.
                </p>
                <p>
                  2- Click Approve to approve your VRC to be used on the
                  platform and then Stake the desired number of VRC.
                </p>
                <p>3- Thats it!!</p>
              </div>
              <p>
                NOTE: Staking doesn’t give you the whitelist for the project.
                For whitelisting, please give your consent to participate in
                that particular sale you wish to participate.
              </p>
            </Col> */
}

{
  /* Data Below after Metamask Connection */
}
{
  /* <div>

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
                </div> */
}

{
  /* <div className="input_max">MAX</div> */
}

{
  /* <h2>Choose a staking duration</h2> */
}

{
  /* Data After Connection with Metamask */
}

{
  /* <div className="staking_boxes mt-5 mb-2">
                  <div className="staking_box">15 Days</div>
                  <div className="staking_box">90 Days</div>
                  <div className="staking_box">180 Days</div>
                  <div className="staking_box">365 Days</div>
                </div> */
}
