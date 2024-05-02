import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import logo from "../assets/psychologists.services.svg";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="border-b border-solid border-gray-700 border-opacity-20">
        <div className="container max-w-74 flex justify-between items-center pb-6 pt-6">
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
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-transparent border border-solid border-mainBlack border-opacity-20 px-10 py-3.5 rounded-full"
            >
              Log In
            </button>
            <button
              type="button"
              className="bg-mainOrange border border-solid border-gray-200 border-opacity-20 px-10 py-3.5 text-base text-mainWhite rounded-full transition-all duration-100 ease-in-out hover:bg-hoverOrange"
            >
              Registration
            </button>
          </div>
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
