import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { BsTelephone, BsFillEnvelopeFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/all";
import SwitchForm from "../SwitchForm";
import { Link } from "react-router-dom";

import "../styles/velasignin.css";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../footer/Footer";

const VelaSignIn = () => {
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
  return (
    <>
      <div className="front2 mt-5">
        <Container fluid>
          <Row>
            <h2>Settings</h2>
            <h5>Configure your settings for VirtualPad</h5>
            <Col lg={8}>
              <div
                className="left_side py-4 px-3 rounded"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(8,145,178,.2),rgba(8,145,178,0))",
                }}
              >
                <div className="left_upper">
                  <div className="d-flex justify-content-end">
                    <div className="logout">
                      <Link to={"/"}>
                        <IoLogOutOutline className="user_icon" />
                      </Link>
                    </div>
                  </div>

                  <div className="icon_upload">
                    <i>
                      <FaUser className="user_icon" />
                    </i>
                  </div>
                  <div className="d-flex justify-content-center d-none">
                    <input type="file" className="mx-auto" />
                  </div>

                  <div
                    className="d-flex justify-content-center gap-3 fw-bold ph_mg"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <i>
                      <BsTelephone /> -
                    </i>
                    <i>
                      <BsFillEnvelopeFill /> -
                    </i>
                  </div>
                </div>
                <hr />
                <div className="left_lower">
                  <Row className="d-flex justify-content-between ">
                    <Col>
                      <h3 className="mb-">Notification Settings</h3>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Email Notifications:</span>
                        <SwitchForm />
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>SMS Notifications:</span>
                        <SwitchForm />
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Position Notifications:</span>
                        <SwitchForm />
                      </div>
                    </Col>
                    <Col>
                      {/* <button className='btn btn-outline-success' onClick={toggleTheme}>click me</button> */}
                      <h3 className="">Privacy:</h3>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Profile & Address:</span>
                        {/* <Switch onClick={toggleTheme}/> */}

                        <SwitchForm />
                      </div>
                      <h3>User Settings:</h3>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Theme:</span>
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
                      <div className="d-flex justify-content-between gap-5">
                        <span>Language:</span>
                        <Form.Select aria-label="Default select example">
                          <option value="English">English</option>
                          <option value="Chinese">Chinese</option>
                          <option value="Spanish">Spanish</option>
                        </Form.Select>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="right_side py-4 px-4 rounded fw-light">
                <Form className="d-flex flex-column gap-3" style={{}}>
                  <img src="" alt="" />
                  <h3>Update Profile</h3>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" placeholder="Type your username" />

                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Type your email" />

                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="number" placeholder="Type your phone" />

                  <Button
                    type="submit"
                    style={{ backgroundColor: "#10c6df;" }}
                    className="signup_btn mt-3 w-100"
                  >
                    Update Profile
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default VelaSignIn;
