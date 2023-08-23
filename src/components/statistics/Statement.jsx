import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import Footer from "../footer/Footer";
import { loadWeb3 } from "../../apis/apis";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";
import { useSelector } from "react-redux";

const Statement = (props) => {
  const { isConnected } = useSelector((state) => state.connectWallet);
  const [statementInfo, setStatementInfo] = useState([]);

  const getStatementDetail = async () => {
    if (isConnected) {
      const web3 = window.web3;
      let acc = await loadWeb3();
      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );
      let totalWithdrawcount = await mlmContractInstance.methods
        .w_count(acc)
        .call();
      let arr = [];
      for (let index = 0; index < totalWithdrawcount; index++) {
        let obj = {};
        let withdrawAmount = await mlmContractInstance.methods
          .withdrawHistory(acc, index)
          .call();
        withdrawAmount = web3.utils.fromWei(withdrawAmount);
        let withdrawHistoryTime = await mlmContractInstance.methods
          .withdrawHistoryTime(acc, index)
          .call();
        let sec = withdrawHistoryTime;
        let time = new Date(sec * 1000).toLocaleString();

        obj = {
          amount: withdrawAmount,
          dateTime: String(time),
        };
        arr.push(obj);
      }
      setStatementInfo(arr);
    } else {
    }
  };

  useEffect(() => {
    getStatementDetail();
  }, [isConnected]);

  return (
    <>
      <div className="statement mt-5">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="Statement_table">
                <Table responsive className="text-center">
                  <thead>
                    <tr>
                      <th>Amount Withdrawn</th>
                      <th>Time of Withdrawl</th>
                    </tr>
                  </thead>

                  <tbody>
                    {statementInfo.map((item) => {
                      return (
                        <>
                          <tr>
                            <td>{item?.amount}</td>
                            <td>{item?.dateTime}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Statement;
