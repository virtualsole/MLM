import React from 'react';
import { useNavigate } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div>
      <h1  style={{
      display: 'flex',
      justifyContent: "center",
      margin: "15% auto",
      alignItems: "center",
      textAlign: "center"
    }}> <span><a  onClick={handleGoBack} className='me-2'><BsArrowLeft /></a></span> 404! Page Not Found</h1>
   
    </div>
  );
};

export default NotFound;
