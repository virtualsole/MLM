import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import "../styles/stakehistory.css";
import { loadWeb3 } from "../../apis/apis";
import { useSelector } from "react-redux";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";

const Stake_History = () => {
  const [stakeHistory, setStakeHistory] = useState([]);
  const { isConnected } = useSelector((state) => state.connectWallet);

  useEffect(() => {
    if (isConnected) {
      const getStakeHistory = async () => {
        let acc = await loadWeb3();
        const web3 = window.web3;
        let mlmContractInstance = await new web3.eth.Contract(
          mlmContractAbi,
          mlmContractAddress
        );
        let stakeHistory = await mlmContractInstance.methods
          .stakeinfos(acc)
          .call();
        console.log("stakeHistory", stakeHistory);
        setStakeHistory([{ ...stakeHistory }]);
      };

      getStakeHistory();
    }
  }, [isConnected]);

  return (
    <>
      <div className="mt-3 mb-3 stake_history">
        <Container>
          <Row className="stakehistory">
            <Col>
              <h2 className="mb-4">Stake History</h2>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Amount</th>
                    <th>Claimed</th>
                    <th>Staked at</th>
                    <th>Can unstake at</th>
                    <th>Claimable</th>
                  </tr>
                </thead>
                <tbody>
                  {stakeHistory.length < 1 ? (
                    <p>No data</p>
                  ) : (
                    <>
                      {stakeHistory.map((item, index, arr) => {
                        return (
                          <tr>
                            <td>1</td>
                            <td>{item.amount}</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Stake_History;
