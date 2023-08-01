import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { loadWeb3 } from "../../apis/apis";
import { useSelector } from "react-redux";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";
import "./vstack.css"

const Vstack = () => {
  const [userInfo, setuserInfo] = useState({});

  const { isConnected } = useSelector((state) => state.connectWallet);

  const getUserInfo = async () => {
    if (isConnected) {
      const web3 = window.web3;
      let acc = await loadWeb3();
      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );
      let tottalUserDeposite = await mlmContractInstance.methods
        .totalUsers()
        .call();
      let totalDepositeInNetwork = await mlmContractInstance.methods
        .totalUserInNetwork()
        .call();
      let totalRewardsWithdrawInNetwork = await mlmContractInstance.methods
        .totalRewardsWithdrawInNetwork()
        .call();
      let totalLevelRewardsWithdrawInNetwork = await mlmContractInstance.methods
        .totalWithdrawReward(acc)
        .call();

      let obj = {
        tottalUserDeposite: tottalUserDeposite,

        totalDepositeInNetwork: Number(
          web3.utils.fromWei(totalDepositeInNetwork)
        ).toFixed(2),
        totalRewardsWithdrawInNetwork: Number(
          web3.utils.fromWei(totalRewardsWithdrawInNetwork)
        ).toFixed(2),
        totalLevelRewardsWithdrawInNetwork: Number(
          web3.utils.fromWei(totalLevelRewardsWithdrawInNetwork)
        ).toFixed(2),
      };
      setuserInfo({ ...obj });
    } else {
      // toast.error("Please Coonect wallet ");
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
  return (
   <>
   
   <div className="container">
   <div className="row justify-content-center mt-5">
        <div className="row justify-content-center ">
          <div className="col-lg-10 col-md-6 col-sm-12">
            <div className="row justify-content-between ">
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value"> {userInfo.tottalUserDeposite}</p>
                  <h2 className=" text-center Vstack-title">Total Participants</h2>
                </div>
              </div>
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value">{userInfo.totalDepositeInNetwork}</p>
                  <h2 className=" text-center Vstack-title">Total Staked in Network</h2>
                </div>
              </div>
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value">{userInfo.totalDepositeInNetwork}</p>
                  <h2 className=" text-center Vstack-title">Total Staked in Network (USD)</h2>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 col-lg-12 col-md-6 col-sm-12 ">
            <div className="row justify-content-between ">
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value"> {userInfo.tottalUserDeposite}</p>
                  <h2 className=" text-center Vstack-title">Total Rewards</h2>
                </div>
              </div>
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value">{userInfo.totalDepositeInNetwork}</p>
                  <h2 className=" text-center Vstack-title">Total Rewards (USD)</h2>
                </div>
              </div>
              <div className="col-lg-3 card-pic ">
                <div className="p-2">
                  <p className=" text-value">{userInfo.totalDepositeInNetwork}</p>
                  <h2 className=" text-center Vstack-title">Total Level Withdrawls</h2>
                </div>
              </div>
            </div>
          </div>
          </div>
      
        
        
 
        </div>
      
   </div>
   </>
  );
};

export default Vstack;
