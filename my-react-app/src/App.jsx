import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ProfileView from './views/ProfileView';
import LogoutView from './views/LogoutView';

const appOptions = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "Perfil",
    to: "/perfil",
  },
  {
    title: "Logout",
    to: "/logout",
  },
];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                options={appOptions}
              />
            }
          >
            <Route index element={<HomeView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="perfil" element={<ProfileView />} />
            <Route path="logout" element={<LogoutView />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

