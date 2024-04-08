import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import logo from "../assets/psychologists.services.svg";

const Layout = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" width={218} height={24} />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/psychologists">Psychologists</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
        <button type="button">Log In</button>
        <button type="button">Registration</button>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
