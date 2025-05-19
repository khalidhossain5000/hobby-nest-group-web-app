import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
    const links=<>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>All Groups</NavLink></li>
            <li><NavLink>Create Group(P)</NavLink></li>
            <li><NavLink>My Group(P)</NavLink></li>
            <li><NavLink>Register(C)</NavLink></li>
    </>
  return (
    <div className="pb-8 absolute top-0 left-0 w-full z-50 bg-transparent text-white ">
      <div className="navbar container mx-auto ">
        <div className="flex items-center justify-between w-full lg:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <h2>LOGO</h2>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-5 px-1 font-bold">
                {links}
            
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
