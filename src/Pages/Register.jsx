import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import bgImg from "../assets/authbg/sky-dar.jpg";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, setUser, handleGoogleUser } =
    use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const registerLocation = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    );
    setPasswordError("");
    // password validation start
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (passwordPattern.test(password) == false) {
      setPasswordError(
        "Password Length must be at least 6 characters And Must have an Uppercase and a Lowercase letter"
      );
      return;
    }
    // password validation end
    // FIREBASE USER
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //update profile here
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(`Opps--${errorCode}`, {
              className: "w-[300px] h-[100px] text-xl font-bold ",
              removeDelay: 1000,
              iconTheme: {
                primary: "#0d0518",
                secondary: "#fce6fa",
              },

              style: {
                border: "1px solid black",
                color: "white",
                backgroundImage: "linear-gradient(to top left,#f60002,#d408d1)",
              },
            });
          });

        toast.success(`User Registered SuccessFully`, {
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
              "linear-gradient(to bottom right,#0d0518,#87d0c3, #600e8c)",
          },
        });
        // navigate('/')
        navigate(`${registerLocation.state?.from || "/"}`, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.success(`Opps--${errorCode}`, {
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
              "linear-gradient(to bottom right,#0d0518,#87d0c3, #600e8c)",
          },
        });
      });
  };
  const handleGoogleRegister = () => {
    handleGoogleUser()
      .then((result) => {
        const user = result.user;
        toast.success("Google Logged In Successfull", {
          className: "w-[300px] h-[100px] text-xl font-bold",
          removeDelay: 1000,
          iconTheme: {
            primary: "#16061e",
            secondary: "#ef54e2",
          },
          style: {
            border: "1px solid black",
            color: "white",
            backgroundImage: "linear-gradient(to bottom,#16061e, #ef54e2)",
          },
        });
        const name = user.displayName;
        const photo = user.photoURL;
        //update user profile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(`Opps--${errorCode}`, {
              className: "w-[300px] h-[100px] text-xl font-bold ",
              removeDelay: 1000,
              iconTheme: {
                primary: "#0d0518",
                secondary: "#fce6fa",
              },

              style: {
                border: "1px solid black",
                color: "white",
                backgroundImage: "linear-gradient(to top left,#f60002,#d408d1)",
              },
            });
          });

        navigate(`${registerLocation.state?.from || "/"}`, { replace: true });
      })
      .then((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="py-16 bg-no-repeat bg-cover bg-top"
    >
      <div className="py-24">
        
        <div className="container mx-auto">
          <div className="title text-center space-y-2 py-12">
            <h1 className="text-6xl font-bold text-[#fffaff]">
              Register Your Account Now
            </h1>
            <h5 className="text-xl font-semibold text-gray-300 my-6">
              Please enter your details to Register.
            </h5>
          </div>
          <div className="card w-full max-w-3xl mx-auto inset-shadow-3xl inset-shadow-indigo-500 py-16 border-1 border-pink-100 bg-transparent rounded-2xl ">
            <div className="card-body">
              <form
                onSubmit={handleRegister}
                className="flex flex-col justify-center items-center px-6"
              >
                <label className="w-full text-left label text-2xl text-white font-semibold">
                  Name
                </label>
                <br />
                <input
                  name="name"
                  type="text"
                  className=" input w-full bg-transparent border border-[#fffeff] rounded-xl p-8 text-white placeholder:text-pink-100 placeholder: focus:border-pink-500 text-xl"
                  placeholder="Enter Your Name"
                />
                <br />
                <label className="w-full text-left label text-2xl text-white font-semibold">
                  Photo Url
                </label>
                <br />
                <input
                  name="photo"
                  type="text"
                  className=" input w-full bg-transparent border border-[#fffeff] rounded-xl p-8 text-white placeholder:text-pink-100 placeholder: focus:border-pink-500 text-xl"
                  placeholder="Enter Photo Url"
                />
                <br />
                <label className="w-full text-left label text-2xl text-white font-semibold">
                  Email
                </label>
                <br />
                <input
                  name="email"
                  type="email"
                  className=" input w-full bg-transparent border border-[#fffeff] rounded-xl p-8 text-white placeholder:text-pink-100 placeholder: focus:border-pink-500 text-xl"
                  placeholder="Enter Your Email"
                />
                <br />

                <label className="text-left w-full label text-2xl text-white font-semibold">
                  Password
                </label>
                <br />
                <input
                  name="password"
                  type="password"
                  className=" input w-full bg-transparent border border-[#fffeff] rounded-xl p-8 text-white placeholder:text-pink-100 placeholder: focus:border-pink-500 text-xl"
                  placeholder="Enter Password"
                />
                <div className="pt-3 w-full">
                  <a className="text-left text-[25px] link link-hover text-pink-200">
                    Forgot password?
                  </a>
                </div>
                {/* password error */}
                <div className="py-2 w-full">
                  {passwordError && (
                    <h2 className="text-red-600 text-xl ">{passwordError}</h2>
                  )}
                </div>
                <button className="btn w-full bg-transparent p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-br hover:from-[#07233c] hover:via-[#1cc0de] hover:to-[#020611] transition duration-700">
                  Register
                </button>
              </form>
              {/* social login start */}
              <div className="border-t border-[#fce7f350] py-3 mt-5 social-login w-full flex flex-col items-center justify-center">
                <h2 className="border-b border-[#fce7f350] w-full text-center border[#fce7f350] pb-5 text-2xl font-bold text-gray-300">
                  Or
                </h2>
                {/* Google */}
                <button
                  onClick={handleGoogleRegister}
                  className="mt-5 w-full mx-auto btn bg-white text-black border-[#e5e5e5] text-xl p-8 rounded-xl"
                >
                  <svg
                    aria-label="Google logo"
                    width="26"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Register with Google
                </button>
              </div>
              {/* DONT HAVE ACCOUNT START HERE*/}
              <div>
                <h5 className="w-full mx-auto text-2xl font-bold mt-6 text-gray-300">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-pink-500 text-3xl font-bold"
                  >
                    Login
                  </Link>{" "}
                  Here
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
