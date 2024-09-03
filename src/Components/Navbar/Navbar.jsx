import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNavLink = (
    <div className="flex gap-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border  border-green-400 p-2 rounded-md font-bold "
            : "font-bold p-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/listedbook"
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border  border-green-400 p-2 rounded-md font-bold"
            : "font-bold p-2"
        }
      >
        Listed Book
      </NavLink>
      <NavLink
        to="/pagetoread"
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border border-green-400 p-2 rounded-md font-bold"
            : "font-bold p-2 "
        }
      >
        Page to Read
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 px-8 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {activeNavLink}
          </ul>
        </div>
        <Link to="/">
          <a className="text-2xl font-bold">Book Vibe</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{activeNavLink}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-green-500">Sign In</a>
        <a className="btn bg-emerald-400">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
