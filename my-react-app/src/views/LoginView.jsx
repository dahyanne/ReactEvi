import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/auth";

const LoginView = () => {
  const autenticado = useSelector((state) => state.auth.autenticado);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login", form);
    dispatch(login());
  };

  const handleFormChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setForm({
      ...form,
      [inputName]: inputValue,
    });
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario a continuación</p>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleFormChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleFormChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
