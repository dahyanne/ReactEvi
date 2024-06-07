import { useSelector } from "react-redux";

const ProfileView = () => {
  const autenticado = useSelector((state) => state.auth.autenticado);

  return (
    <div>
      {autenticado ? (
        <div>
          <h1>Perfil de Usuario</h1>
          <p>Bienvenido a tu perfil de usuario.</p>
        </div>
      ) : (
        <div>
          <h1>Acceso denegado</h1>
          <p>Debes iniciar sesión para acceder a esta página.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
