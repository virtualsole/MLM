import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/head.css";
import logo from "../../assets/logod.jpg";
import { FaUser } from "react-icons/fa";

import { Outlet } from "react-router-dom";

import { loadWeb3 } from "../../apis/apis";
import { updateWalletStatus } from "../../store/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
const Head = () => {
  const [showNavigation, setNavigation] = useState(false);

  const handleToggleNav = () => {
    setNavigation(!showNavigation);
  };

  const closeNav = () => {
    setNavigation(false);
  };
  // Navbar Darkmode useEffect
  
  //After this
  
  let [btnTxt, setBtTxt] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const getaccount = async () => {
    let acc = await loadWeb3();
    console.log("ACC=", acc);
    if (acc == "No Wallet") {
      // toast.error("please install metamask");
      setBtTxt("Install metamask");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);
      dispatch(updateWalletStatus());
    }
  };

  useEffect(() => {
   getaccount()
  }, [])



 
  
  return (
    <>
      <div className="head">
        <Navbar collapseOnSelect expand="xl" className="me-auto sticky-header" show={showNavigation} onHide={handleToggleNav}>
          <Container>
            <Nav className="d-block d-lg-none">
              <Nav.Link>
                <Button className="head_btn">Connect</Button>
              </Nav.Link>
              <Button className="head_btn res_BTN">
                  <Link to={"/velasignin"}>
                    {" "}
                    <FaUser />{" "}
                  </Link>
                </Button>
            </Nav>
            <Navbar.Brand>
              <Link to={"/"}>       
                <img src={logo} alt="" className="head_img responsive2" />
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto head_nav_1" >
                <Nav.Link>
                  <LinkContainer to={"/home"}>
                    <span className="head_others" onClick={closeNav}>Home</span>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to={"/staking"}>
                    <span className="head_others" onClick={closeNav}>Staking</span>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to={"/stats"}>
                  <span className="head_others" onClick={closeNav}>Launchpad</span>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to={"/network_stats"}>
                  <span className="head_others" onClick={closeNav}>Vesting</span>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to={"/levels"}>
                  <span className="head_others" onClick={closeNav}>Levels</span>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                <LinkContainer to={"/referral"}>
                  <span className="head_others" onClick={closeNav}>Referral</span>
                  </LinkContainer>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
            <Nav className="d-lg-block d-none d-flex">
            
              <Nav.Link onClick={getaccount} l>
                <Button className="head_btn">{btnTxt}</Button>
                <Button className="head_btn">
                  <Link to={"/velasignin"}>
                    
                    <FaUser />
                  </Link>
                </Button>
              </Nav.Link>
          
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Head;
