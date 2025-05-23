import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router";
import logo from '../../assets/logo/logo.png'
const Footer = () => {
  const { user } = use(AuthContext);

  return (
    <div className=" bg-[#ecf5fb] pt-24">
      <div className="">
        <div className="container mx-auto">
          <div className="py-12 content text-center lg:text-left lg:flex  lg:justify-between">
            <div className="info ">
              {/* <img className='mx-auto' src={logo} alt="" /> */}
              <div className="icon-title mt-6 mx-auto">
                <img className="max-w-[150px] lg:max-w-[250px] " src={logo} alt="" />
                <p className="text-[#364863] text-[18px] max-w-sm mt-3 md:mt-6 lg:mt-9">
                  Blienum nhaedrum torquatos nec eul, vietraxit periculis ex,
                  nihil is in mei. Xei ariculaeuripidis, fincartem ei est.
                  Dlienum phaed is in mei. Lei an Hericulaeuripidis, hincartem
                  ei est
                </p>
              </div>
            </div>

            <div className="links text-white text-xl space-y-3">
              <h2 className="text-[#010f30] text-3xl font-bold">
                UseFul Links
              </h2>
              <ul className="mt-3 lg:mt-9 text-xl font-medium text-[#010f30] space-y-4">
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
                <li>
                  <NavLink to="/auth/login">Login(C)</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/register">Register(C)</NavLink>
                </li>
              </ul>
            </div>

            <div className="contact mt-6 lg:mt-0">
              <h2 className="text-[#010f30] text-3xl font-bold mb-12">
                Contact
              </h2>
              {/* join */}

              <p className="mb-6 flex items-center justify-center lg:justify-start gap-3 lg:text-2xl font-semibold text-[#010f30]">
                <TiLocationArrowOutline size={40} className="text-pink-600" />
                <span>New York Morris Street London 1234</span>
              </p>
              <p className="mb-6 flex justify-center lg:justify-start items-center gap-3 lg:text-2xl font-semibold text-[#010f30]">
                <MdOutlineEmail size={30} className="text-pink-600" />
                <span>info@example.com</span>
              </p>
              <p className="flex justify-center lg:justify-start items-center gap-3 lg:text-2xl font-semibold text-[#010f30]">
                <FaPhoneAlt size={30} className="text-pink-600" />
                <span>01234567890</span>
              </p>
            </div>

            <div className="socail mt-6 lg:mt-0">
              <h2 className="text-[#010f30] text-3xl font-bold mb-9">
                Follow Us
              </h2>
              {/* join */}

              <div className="grid grid-cols-3 mx-3 lg:mx-0 md:grid-cols-2 items-end lg:justify-between gap-9">
                <a href="https://facebook.com/" target="_blank">
                  <FaFacebook size={50} fill="#0195ff" />
                </a>
                <a href="https://x.com/" target="_blank">
                  <BsTwitterX size={50} fill="black" />
                </a>
                <a href="https://github.com/khalidhossain5000" target="_blank">
                  <FaGithub size={50} fill="" />
                </a>
                <a href="https://youtube.com/" target="_blank">
                  <FaYoutube size={50} fill="red" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin size={50} fill="#1a83bb" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-6 border-t border-pink-600/50">
          <h3 className="text-center text-2xl text-purple-700">
            &copy; <span className="font-bold text-pink-600">HobbieHub</span>{" "}
            All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
