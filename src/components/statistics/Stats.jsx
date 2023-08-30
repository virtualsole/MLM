import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pika from '../../assets/PIKABW.png'
import "../styles/statistics.css";
import Footer from "../footer/Footer";
import { loadWeb3 } from "../../apis/apis";
import { useSelector } from "react-redux";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";
import { toast } from "react-toastify";

const Self_Stats = (props) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div className="self">
      <Container>
        <Row>
          <Col>
            <div className="stats_btns">
              <Button className="stats_btn">
                <p className="stats_btn_p">{props.p1}</p>
                <p>{props.total}</p>
              </Button>
              <Button className="stats_btn">
                <p className="stats_btn_p">{props.p2}</p>
                <p>{props.total2}</p>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Stats = () => {
  const [userInfo, setuserInfo] = useState({});
  const { isConnected } = useSelector((state) => state.connectWallet);
  const [withdrawAmount, setWithdrawAmount] = useState(null);

  const getUserInfo = async () => {
    if (isConnected) {
      const web3 = window.web3;
      let acc = await loadWeb3();
      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );
      let userInfo = await mlmContractInstance.methods.userInfo(acc).call();

      let recieved = await mlmContractInstance.methods
        .checkTotalReward(acc)
        .call();
      let remaningReward = await mlmContractInstance.methods
        .checksRemainingReward(acc)
        .call();

      let updateLevelReward = await mlmContractInstance.methods
        .updateLevelRewards(acc, userInfo.level)
        .call();

      let totalReward = await mlmContractInstance.methods
        .remainingReward(acc)
        .call();

      let stackingReward = await mlmContractInstance.methods
        .checkTotalReward(acc)
        .call();
      let totalWithdrawReward = await mlmContractInstance.methods
        .totalWithdrawReward(acc)
        .call();
      let obj = {
        directsNum: userInfo.directsNum,
        totalMember: userInfo.teamNum,
        totalDeposit: Number(web3.utils.fromWei(userInfo.totalDeposit)).toFixed(
          2
        ),
        teamTotalDeposit: Number(
          web3.utils.fromWei(userInfo.teamTotalDeposit)
        ).toFixed(2),
        stackingReward: Number(web3.utils.fromWei(stackingReward[1])).toFixed(
          2
        ),
        flush: Number(
          Number(
            Number(web3.utils.fromWei(stackingReward[1])) +
              Number(web3.utils.fromWei(stackingReward[2]))
          ).toFixed(2) -
            Number(web3.utils.fromWei(stackingReward[0])).toFixed(2)
        ).toFixed(2),
        totalReward: Number(web3.utils.fromWei(totalWithdrawReward)).toFixed(2),
        updateLevelReward: Number(
          web3.utils.fromWei(updateLevelReward[0])
        ).toFixed(2),
        totalreward: Number(
          Number(web3.utils.fromWei(stackingReward[0]))
        ).toFixed(2),
        remaningReward: Number(
          Number(web3.utils.fromWei(remaningReward))
        ).toFixed(2),
      };
      setuserInfo({ ...obj });
    } else {
      
    }
  };
  const withdrawl = async () => {
    const web3 = window.web3;
    let acc = await loadWeb3();
    if (isConnected) {
      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );

      if (Number(withdrawAmount <= Number(userInfo.remaningReward)))
        try {
          let amount = web3.utils.toWei(withdrawAmount);

          let withdrawRewards = await mlmContractInstance.methods
            .withdrawRwards(amount)
            .send({
              from: acc,
            });
          toast.success("withdrawal successfully");
          setWithdrawAmount("");
        } catch (error) {
          console.error(error);
        }
      else {
        toast.error("amount greater then total withdraw");
      }
    } else {
      toast.error("Connect Wallet");
    }
  };
  useEffect(() => {
    getUserInfo();
  }, [isConnected]);
  useEffect(() => {
    const userInfo = setInterval(() => {
      getUserInfo();
    }, 10000);

    return () => {
      clearInterval(userInfo);
    };
  }, []);
  const handleChange = async (e) => {
    let value = e.target.value;

    setWithdrawAmount(value);
  };
  return (
    <>
      <div className="stats mb-3 mt-3">
      <div className="lanch-bg">

<div className="container">
      <div className="row mb-lg-0 mb-5">
          <div className="col-lg-6 col-sm-12 mt-lg-5">
              <h1 className='home_heading'>
              Secure the Virtual <span className="responsive sma" style={{background: "#b13325", color: "#fff",}}>Launchpad

</span>
              </h1>
          </div>
          <div className="col-lg-6 col-sm-12">
         
          <img className='groot responsive mt-lg-0 mt-5  ms-lg-0 ms-3' src={pika} alt="" />


          </div>
      </div>
  </div>
  </div>
        <Container className="mt-5">
          <Row>
            <Col className="self_stats">
              <Self_Stats
                p1={userInfo?.totalMember}
                total="Total Members"
                p2={userInfo?.directsNum}
                total2="Direct Members"
              />
              <Self_Stats
                p1={userInfo?.totalDeposit}
                total="Staking"
                p2={userInfo.totalreward}
                total2="Total Rewards"
              />
              <Self_Stats
                p1={userInfo?.stackingReward}
                total="Staking Rewards"
                p2={userInfo?.updateLevelReward}
                total2="Level Reward "
              />
              <Self_Stats
                p1={userInfo?.totalReward}
                total="Total Withdraw"
                p2={userInfo?.remaningReward}
                total2="Remaning Reward"
              />

              <div className="below_btns">
                <h1 className="mx-auto fs-2 fon">
                Withdrawal request 
                </h1>
                <p className="mx-auto text-center">The money will crecfted to your account within 1 minute to 3 days-
Processing may take up to 24 hours, Please contact if
the withdrawal is not completed within this penod.</p>
                <div className="nordek_right_firs1_input">
                  <Form.Control
                    type="number"
                    placeholder="Enter Withdraw amount"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={withdrawAmount}
                  />
                  <Form.Control
                    type="date"
                    placeholder="Enter Date"
                   
                    className="mt-3"
                   
                  />
                  <div className="heads px-2 mt-3">
              <span style={{fontWeight: "700"}}>Status:
              </span>
              <div class="audio">
  <span></span>
  <span></span>
  <span></span>
</div>
              {/* <span style={{color: "#2c2c"}}>Processing...</span> */}
            </div>
                  <p className="mx-auto text-center mt-3">Continue trading while you'r withdrawal request is being<br></br>
processed.</p>
                  <div>
                  <Button className="stats_btn1 mx-auto mt-3" onClick={withdrawl}>
                  Continue  Withdraw
                  </Button>
                </div>
                </div>
                

                <div>
                  <Link to={"/statement"}>
                    <Button className="stats_btn2 mb-3">Statement Details</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
  
      </div>
      <Footer />
    </>
  );
};

export default Stats;
