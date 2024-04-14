import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import logo from "../assets/psychologists.services.svg";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex gap-20">
        <div className="flex gap-32">
          <Link to="/">
            <img src={logo} alt="logo" width={218} height={24} />
          </Link>
          <nav className="flex gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/psychologists">Psychologists</NavLink>
            <NavLink to="/favorites" className="hidden">
              Favorites
            </NavLink>
          </nav>
        </div>
        <div>
          <button type="button">Log In</button>
          <button type="button">Registration</button>
        </div>
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
