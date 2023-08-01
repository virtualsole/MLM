import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { GiPawPrint, GiShatteredHeart } from "react-icons/gi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { BsFillHeartbreakFill } from "react-icons/bs";
// import user from "../../assets/Level_user.svg";
import heart from "../assets/level_heart.svg";

import "../styles/levels.css";
import Footer from "../footer/Footer";
import { loadWeb3 } from "../../apis/apis";
import { useSelector } from "react-redux";
import { mlmContractAbi, mlmContractAddress } from "../../contract/Contract";
import { toast } from "react-toastify";

const Props_levels = ({ item, index }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="levels">
        <Container>
          <Row>
            <Col md={8}>
              <div className="level_1 level_flex">
                <div className="level1_content">
                  <h5>level:{index}</h5>
                  <span>
                    
                    <img src={heart} alt="" style={{ width: "20%" }} /> {item}
                  </span>
                  {/* <span>
                    {" "}
                    <img src={heart} alt="" style={{ width: "20%" }} /> 0{" "}
                  </span> */}
                </div>
                <div className="icon">
                  <Button
                    className="border-0"
                    style={{ background: "transparent" }}
                    onClick={() => setShow(!show)}
                  >
                    <IoIosArrowDroprightCircle className="display-6 level_arrow" />
                  </Button>
                </div>
              </div>
            </Col>

            {/* <Col md={3}>
              {show && (
                <div className="levels_table">
                  <Table responsive>
                    <thead>
                      <th>Level</th>
                      <th>Address</th>
                      <th>Reward</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{props?.name}</td>
                        <td>{props?.address}</td>
                        <td>{props?.reward}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

const Levels = () => {
  const [levelDetail, setLevelDetail] = useState([]);
  const [levelTable, setLevelTable] = useState([]);
  const { isConnected } = useSelector((state) => state.connectWallet);
  const getLevelDetail = async () => {
    const web3 = window.web3;
    let acc = await loadWeb3();
    let mlmContractInstance = await new web3.eth.Contract(
      mlmContractAbi,
      mlmContractAddress
    );

    let parentArr = [];
    for (let index = 1; index < 16; index++) {
      let totalUsers = await mlmContractInstance.methods
        .userCount(acc, index)
        .call();
      console.log("totaluser", totalUsers);
      if (totalUsers == 0) {
        break;
      } else {
        parentArr.push(totalUsers);
      }
    }
    setLevelDetail(parentArr);
  };

  const showLevelDetail = async (totalUsers, index) => {
    try {
      const web3 = window.web3;
      let acc = await loadWeb3();
      let mlmContractInstance = await new web3.eth.Contract(
        mlmContractAbi,
        mlmContractAddress
      );

      let arr = [];
      for (let i = 1; i <= totalUsers; i++) {
        let obj = {};
        let levelInformation = await mlmContractInstance.methods
          .updateUserRewardByLevel(acc, index, i)
          .call();
        console.log("levelInformation", levelInformation);
        obj = {
          name: index,
          userId: levelInformation[1],
          reward: Number(web3.utils.fromWei(levelInformation[0])).toFixed(5),
          // withdrawReward: Number(
          //   web3.utils.fromWei(levelInformation[2])
          // ).toFixed(2),
          // remaningReward: Number(
          //   web3.utils.fromWei(levelInformation[3])
          // ).toFixed(2),
        };
        arr.push({ ...obj });
      }
      setLevelTable(arr);
    } catch (error) {
      console.error("error while show level info", error);
    }
  };
  useEffect(() => {
    if (isConnected) {
      getLevelDetail();
    } else {
      console.log("Connect wallet to see your level");
      // toast.error("Connect wallet to see your level");
    }
  }, [isConnected]);

  return (
    <>
      <div className="levels mt-3">
        <Container>
          <Row>
            <Col md={4}>
              {levelDetail.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      showLevelDetail(+item, index + 1);
                    }}
                  >
                    <Props_levels
                      item={item}
                      setLevelTable={setLevelTable}
                      index={index + 1}
                    />
                  </div>
                );
              })}
            </Col>
            {levelTable.length > 0 && (
              <>
                <Col md={8}>
                  <div className="levels_table">
                    <Table responsive>
                      <thead>
                        {/* <th>Level</th> */}
                        <th>UserId</th>
                        <th>Reward</th>
                      </thead>
                      <tbody>
                        {levelTable.map((item) => {
                          return (
                            <tr>
                              <td>{item?.userId}</td>
                              <td>{item?.reward}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Levels;
