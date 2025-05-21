import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const NavBar = () => {
  const {user,logOutUser}=use(AuthContext)
  const email=user?.email;
  if(!email){
    return <Loading></Loading>
  }
    const links=<>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/create-group'>Create Group(P)</NavLink></li>
            <li><NavLink to='/all-group'>All Groups</NavLink></li>
            <li><NavLink to={`/my-group/${user?.email}`}>My Group(P)</NavLink></li>

    </>
    const handleLogOut=()=>{
      logOutUser()
      .then(()=>{
        alert("Log Out Success")
      })
      .catch((error)=>{
        alert("Sign out error")
        console.log(error);
      })
    }
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
               
             {
              user ? <div className="flex items-center gap-3">
                <div className="tooltip tooltip-bottom" data-tip={`${user.displayName}`}>
                  <img className='w-22 h-22 rounded-full cursor-pointer' src={user.photoURL} alt="" /> 
                </div>
                <button onClick={handleLogOut} className="mt-3 btn btn-outline border-1 border-pink-500 px-2  hover:bg-pink-700 hover:text-white">Log Out</button></div> : <div className="flex items-center gap-3"><li><NavLink to='/auth/register'>Register(C)</NavLink></li>
                                        <li><NavLink to='/auth/login'>Login(C)</NavLink></li>
                                    </div>
              }
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;