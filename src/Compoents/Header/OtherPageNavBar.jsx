import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";
import logo from "../../assets/logo/logo-transparent.png"
import { DarkContext } from "../../Provider/DarkModeContext";
import DarkToggleBtn from "../DarkModeToggle/DarkToggleBtn";
const OtherPageNavBar = () => {
  const { user, logOutUser } = use(AuthContext);
  const {theme,toggleTheme}=use(DarkContext)
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/create-group">Create Group(P)</NavLink>
      </li>
      <li>
        <NavLink to="/all-group">All Groups</NavLink>
      </li>
      <li>
          <NavLink to={`/my-group/${user?.email}`}>My Group(P)</NavLink>
      </li>
      <DarkToggleBtn theme={theme} toggleTheme={toggleTheme}/>
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success(`Log Out Successfull`, {
            className: "w-[300px] h-[100px] text-xl font-bold ",
            removeDelay: 1000,
            iconTheme: {
              primary: "#16061e",
              secondary: "#ef54e2",
            },
            style: {
              border: "1px solid black",
              color: "white",
              backgroundImage:
                "linear-gradient(to bottom right,#4B5563,#9333EA, #3B82F6)",
            },
          });
      })
      
  };
  return (
    <div className="text-white w-full bg-gradient-to-r from-[#160621] via-[#5c05ac] to-[#be185d] ">
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
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 text-white p-2 shadow"
            >
              {links}
              {user ? (
                <div className="">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={`${user.displayName}`}
                  >
                    <img
                      className="w-12 h-12 rounded-full cursor-pointer"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="mt-12 btn bg-gradient-to-t from-[#b80af5] via-[#55077a] to-[#1e0630] text-pink-100 hover:shadow-2xl hover:shadow-purple-200 cursor-pointer border-1 border-pink-500  hover:bg-pink-700 hover:text-white"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="">
                  <li>
                    <NavLink to="/auth/register">Register(C)</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/login">Login(C)</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div>
            <img className="max-w-[150px] lg:max-w-[250px] " src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-5 px-1 font-bold">
            {links}

            {user ? (
              <div className="flex items-center gap-3">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={`${user.displayName}`}
                >
                  <img
                    className="w-22 h-22 rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="mt-3 btn bg-gradient-to-t from-[#b80af5] via-[#55077a] to-[#1e0630] text-pink-100 hover:shadow-2xl hover:shadow-purple-200 cursor-pointer border-1 border-pink-500 px-2  hover:bg-pink-700 hover:text-white"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <li>
                  <NavLink to="/auth/register">Register(C)</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/login">Login(C)</NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherPageNavBar;
