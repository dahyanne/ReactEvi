import { useDispatch } from "react-redux";
import { logout } from "../slices/auth";

const LogoutView = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Cerrar Sesión</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutView;
