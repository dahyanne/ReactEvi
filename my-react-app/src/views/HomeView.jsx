import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeView = () => {
  const autenticado = useSelector((state) => state.auth.autenticado);

  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <p>
        Esta es la página de inicio de nuestra aplicación interactiva con ReactJS.
      </p>
      {autenticado ? (
        <div>
          <p>Estás autenticado. Puedes visitar tu perfil:</p>
          <Link to="/perfil">Ir a Perfil</Link>
        </div>
      ) : (
        <div>
          <p>
            Para acceder a más funcionalidades, por favor <Link to="/login">inicia sesión</Link>.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomeView;
