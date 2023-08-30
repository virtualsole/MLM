import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/head.css";
import logo from "../../assets/logod.jpg";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { Outlet } from "react-router-dom";

import { loadWeb3 } from "../../apis/apis";
import { updateWalletStatus } from "../../store/walletSlice";
import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
const Head = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)

    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, []);


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
      <nav className={`app__navbar ${scrolled ? 'sticky-header' : ''}`}>
        <div className="app__navbar-logo">
          <NavLink to={"/"}>
            <img src={logo} alt="app__logo" />
          </NavLink>

        </div>
        <ul className="app__navbar-links mt-lg-3">
          <NavLink to={"/"}>
            <li className="p__opensans"><a href="#home">Home</a></li>
          </NavLink>
          <NavLink to={"/staking"}>
            <li className="p__opensans"><a href="#about">Staking</a></li>
          </NavLink>
          <NavLink to={"/stats"}>
            <li className="p__opensans"><a href="#menu">Launchpad</a></li>
          </NavLink>
          <NavLink to={"/network_stats"}>
            <li className="p__opensans"><a href="#awards">Vesting</a></li>
          </NavLink>
          <NavLink to={"/levels"}>
            <li className="p__opensans"><a href="#awards">Levels</a></li>
          </NavLink>
          <NavLink to={"/referral"}>
            <li className="p__opensans"><a href="#contact">Referral</a></li>
          </NavLink>
        </ul>
        <Nav className="md_btn">

          <Nav.Link onClick={getaccount} l>
            <Button className="head_btn">{btnTxt}</Button>
            <Button className="head_btn">
              <Link to={"/velasignin"}>

                <FaUser />
              </Link>
            </Button>
          </Nav.Link>

        </Nav>
        <div className="app__navbar-smallscreen">
          <Nav.Link onClick={getaccount}>
            <Button className="head_btn me-3">{btnTxt}</Button>

          </Nav.Link>
          <CgMenuLeft className="mt-2" color="#000" cursor="pointer" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className= "app__navbar-smallscreen_overlay flex__center slide-bottom">
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className={`app__navbar-smallscreen_links ${scrolled ? 'sticky-header' : ''}`}>
                <NavLink to={"/"}>
                  <li><a onClick={() => setToggleMenu(false)}>Home</a></li>
                </NavLink>
                <NavLink to={"/staking"}>
                  <li><a onClick={() => setToggleMenu(false)}>Staking</a></li>
                </NavLink>
                <NavLink to={"/stats"}>
                  <li><a onClick={() => setToggleMenu(false)}>Launchpad</a></li>
                </NavLink>
                <NavLink to={"/network_stats"}>
                  <li><a onClick={() => setToggleMenu(false)}>Vesting</a></li>
                </NavLink>
                <NavLink to={"/levels"}>
                  <li><a onClick={() => setToggleMenu(false)}>Levels</a></li>
                </NavLink>
                <NavLink to={"/referral"}>
                  <li><a onClick={() => setToggleMenu(false)}>Referral</a></li>
                </NavLink>


                <Nav.Link>

                  <Button className="head_btn justify-content-center mx-auto d-flex">
                    <Link to={"/velasignin"}>

                      <FaUser onClick={() => setToggleMenu(false)}/>
                    </Link>
                  </Button>
                </Nav.Link>

              </ul>

            </div>
          )}
        </div>

      </nav>


    </>
  )
}

export default Head



