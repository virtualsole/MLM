import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isuser = useSelector((state) => state.userAuth.isUser);

  return (
    <div className="bg_Dashboar">
      {!isuser ? <Navigate to="/" /> : <Outlet />}
    </div>
  );
};

export default PrivateRoutes;
