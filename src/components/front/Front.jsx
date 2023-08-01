import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCalendar3EventFill } from "react-icons/bs";
import logo from "../assets/VPlogo.png";

import "../styles/front.css";
import ModaleMetaMask from "../modale/ModaleMetaMask";
import { useState } from "react";
import ModaleSignUp from "../modale/ModaleSignUp";
import ModaleReferral from "../modale/ModaleReferral";
import ModaleProfile from "../modale/ModaleProfile";
import { loadWeb3 } from "../../apis/apis";

const Front = () => {
  // Dark Mode
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

  //  After this
const navigate=useNavigate()
  const [showMetaMask, setShowMetaMask] = useState(false);
  const [acc, setAcc] = useState("");
  const [showModaleSignin, setShowModaleSignin] = useState(false);
  const [showModaleReferal, setShowModaleReferal] = useState(false);
  const [showModaleProfile, setShowModaleProfile] = useState(false);
  // const handleShowMetaMask = () => setShowMetaMask(true);
  const handleShowMetaMask = () =>{
    return navigate("/home/homer") };

  const handleShowSignin = () => setShowModaleSignin(true);
  const handleShowReferal = () => setShowModaleReferal(true);
  const handleShowProfile = () => setShowModaleProfile(true);
  useEffect(() => {
    const getAccount = async () => {
      let acc = await loadWeb3();
      console.log("acc", acc);
      setAcc(acc);
    };

    getAccount();
  }, []);

  return (
    <>
      <div className="front">
        <Navbar expand="md" className="me-auto">
          <Container>
            <Navbar.Brand>
              <Link>
                {" "}
                <img
                  src={logo}
                  alt=""
                  className="head_img ms-auto"
                  style={{ width: "80%" }}
                />
              </Link>{" "}
            </Navbar.Brand>
            <Nav>
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

              <Button className="d-flex justify-content-center align-items-center gap-2 front_btn" onClick={handleShowMetaMask}>
                <i>
                  <BsFillCalendar3EventFill />
                </i>
                Connect Account
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <div className="" style={{ marginTop: "5rem" }}>
          <Card
            style={{ width: "30rem" }}
            className="mx-auto my-auto front_card"
          >
            <div className="profile_card">
              <img src={logo} alt="card Logo" className="profile_card_img" />
            </div>
            <hr />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center mb-3">
              <h4>Please Connect Your Wallet:</h4>

              <Button className="w-100 mt-3 d-flex justify-content-center align-items-center gap-2" onClick={handleShowMetaMask}>
                <i>
                  <BsFillCalendar3EventFill />
                </i>
                Connect Account
              </Button>
            </Card.Body>
          </Card>
        </div>
        <ModaleMetaMask
          acc={acc}
          show={showMetaMask}
          handleShowSignin={handleShowSignin}
          onHide={() => setShowMetaMask(false)}
        />
        <ModaleSignUp
          acc={acc}
          show={showModaleSignin}
          onHide={() => setShowModaleSignin(false)}
          handleShowReferal={handleShowReferal}
        />
        <ModaleReferral
          show={showModaleReferal}
          onHide={() => setShowModaleReferal(false)}
          handleShowProfile={handleShowProfile}
        />
        <ModaleProfile
          show={showModaleProfile}
          onHide={() => setShowModaleProfile(false)}
        />
      </div>
    </>
  );
};

export default Front;
