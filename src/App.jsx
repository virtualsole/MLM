import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/components/styles/Main.css";
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
import Referral from "./components/referral/Referral";
import Homer from './components/Homer/Homer'
import NotFound from "./components/NotFound";
import Chat from './Chat/Chat'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Edit from "./components/Sign_in Sign_up/Edit";
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
      <Router>
        <Chat />
        <ToastContainer />
        <Routes>
          <Route path="/home" element={<><Head /><Homer /></>} />
          <Route path="/staking" element={<><Head /><Staking /></>} />
          <Route path="/stats" element={<><Head /><Stats /></>} />
          <Route path="/network_stats" element={<><Head /><Network_stats /></>} />
          <Route path="/levels" element={<><Head /><Levels /></>} />
          <Route path="/statement" element={<><Head /><Statement /></>} />
          <Route path="/signin" element={<><Head /><Signin /></>} />
          <Route path="/signup" element={<><Head /><Signup /></>} />
          <Route path="/velasignin" element={<><Head /><VelaSignIn /></>} />
          <Route path="/referral" element={<><Head /><Referral /></>} />
          <Route path="/edit" element={<><Head /><Edit /></>} />
          <Route path="/" element={<><Head /><Homer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;