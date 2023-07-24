import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/VPlogo.png";
import { FaUser } from "react-icons/fa";

import "../styles/head.css";
import { Outlet } from "react-router-dom";

import { loadWeb3 } from "../../apis/apis";
import { updateWalletStatus } from "../../store/walletSlice";
import { useDispatch, useSelector } from "react-redux";
const Head = () => {

  // Navbar Darkmode useEffect
  const [theme, setTheme] = useState("");
  const toggleTheme = async () => {
    if (theme === "dark-theme") {
      localStorage.setItem("theme", "light-theme");
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") == null) {
      document.body.className = "dark-theme";
      localStorage.setItem("theme", "dark-theme");
      setTheme("dark-theme");
    } else {
      document.body.className = localStorage.getItem("theme");
      setTheme(localStorage.getItem("theme"));
    }
  }, [theme]);

  //After this

  let [btnTxt, setBtTxt] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const getaccount = async () => {
    let acc = await loadWeb3();
    console.log("ACC=", acc);
    if (acc == "No Wallet") {
      toast.error("please install metamask");
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
  return (
    <>
      <div className="head">
        <Navbar expand="md" className="me-auto head_nave">
          <Container>
            <Nav className="d-md-none d-sm-block">
              <Nav.Link>
                <Button className="head_btn">Connect</Button>
              </Nav.Link>
            </Nav>
            <Navbar.Brand>
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="" className="head_img ms-auto" />
              </Link>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto head_nav_1">
                <Nav.Link>
                  <Link to={"home/home"}>
                    <span className="fw-bold">Home</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/home/staking"}>
                    <span className="fw-bold">Staking</span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="head_others">
                  <Link to={"/home/stats"}>Launchpad</Link>
                </Nav.Link>
                <Nav.Link className="head_others">
                  <Link to={"/home/network_stats"}>Vesting</Link>
                </Nav.Link>
                <Nav.Link className="head_others">
                  <Link to={"/home/levels"}>Levels</Link>
                </Nav.Link>
                <Nav.Link className="head_others">
                  <Link to={"/home/referral"}>Referral</Link>
                </Nav.Link>
                <div className="d-flex justify-content-between mb-3 d-none">
                        <div className="form-check form-switch switch ms-auto px-1">
                          <input
                            className="form-check-input change ms-auto p-3 text-end light_mode"
                            onClick={toggleTheme}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                          />
                        </div>
                      </div>
              </Nav>
            </Navbar.Collapse>
            <Nav className="d-md-block d-none d-flex">
              <Nav.Link onClick={getaccount}>
                <Button className="head_btn">{btnTxt}</Button>
                <Button className="head_btn">
                  <Link to={"/home/velasignin"}>
                    {" "}
                    <FaUser />{" "}
                  </Link>
                </Button>
              </Nav.Link>
              <Nav.Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
};

export default Head;
