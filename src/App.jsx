import Head from "./components/head/Head";
import Staking from "./components/staking/Staking";
import Footer from "./components/footer/Footer";
import Stats from "./components/statistics/Stats";
import Network_stats from "./components/statistics/Network_stats";
import Levels from "./components/levels/Levels";
import Statement from "./components/statistics/Statement";
import Signin from "./components/Sign_in Sign_up/Signin";
import Signup from "./components/Sign_in Sign_up/Signup";
import VelaSignIn from "./components/Sign_in Sign_up/VelaSignIn";
import Front from "./components/front/Front";
import Referral from "./components/referral/Referral";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/components/styles/Main.css";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";
import { useEffect, useState } from "react";

function App() {
  const [isUrl, setIsUrl] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    let url = window.location.href;
    var position = url.indexOf("?");
    if (url.includes("?")) {
      setIsUrl(true);
      position = position + 1;
      url = url.slice(position);
      setUrl(url);
    }
  }, []);
  return (
    <>
      {/* <div className='bg_img'></div> */}
      <Router>
        {/* <Signup /> */}
        <ToastContainer />
        <Routes>
          <Route
            path="/referrallink?"
            element={<PublicRoute>{<Front />}</PublicRoute>}
          ></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="home" element={<Head />}>
              <Route path="staking" element={<Staking />} />
              <Route path="stats" element={<Stats />} />
              <Route path="network_stats" element={<Network_stats />} />
              <Route path="levels" element={<Levels />} />
              <Route path="statement" element={<Statement />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
              <Route path="velasignin" element={<VelaSignIn />} />
              <Route path="referral" element={<Referral />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
