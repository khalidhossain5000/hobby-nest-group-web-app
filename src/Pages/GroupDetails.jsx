import React from "react";
import { useLoaderData } from "react-router";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";
import Footer from "../Compoents/Footer/Footer";

const GroupDetails = () => {
  const {
    groupName,
    category,
    description,
    meetingLocation,
    maxNumber,
    imageUrl,
    startDate,
  } = useLoaderData();
  return (
    <div className="">
      <header>
        <OtherPageNavBar />
      </header>
      <main className="bg-gradient-to-br from-[#0d0518] via-[#3c0648] to-[#600e8c]">
        <h1 className="text-[#feedff] text-center text-2xl md:text-3xl lg:text-6xl font-bold py-12 lg:py-24 ">
          Welcome To {groupName} Page
        </h1>

        <div className="container mx-auto px-6 lg:px-0">
          <figure className="">
            <img
              className="w-full lg:h-[600px] rounded-xl shadow-2xl object-cover"
              src={`${imageUrl}`}
              alt="Group Image"
            />
          </figure>
          <div className="content pb-6 lg:pb-16">
            <div className="title-des mt-6 pt-5 border-t-1 border-[#d950d150]">
              <h3 className="text-center text-2xl md:text-3xl lg:text-6xl font-bold text-[#eee0ff]">
                {groupName}
              </h3>
              <p className="text-[#eddffe] my-2 text-center text-2xl py-3 lg:pt-12">
                Description: {description}
              </p>
              {/* More details start */}
              <div className="py-6 lg:py-8 mt-3 lg:mt-9 space-y-3 lg:space-y-9">
                <h3 className="text-center text-xl lg:text-3xl text-[#fdebf7] p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-tr from-[#42047e] to-[#e81cff]">
                  
                  <span className="font-bold">Category: </span>{category}
                </h3>
                <h3 className="text-center text-xl lg:text-3xl text-[#fdebf7] p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-tr from-[#42047e] to-[#e81cff]">
                  {/* <TbZoomMoney size={30} /> */}
                  <span className="font-bold">meetingLocation</span>{meetingLocation}
                </h3>
                <h3 className="text-center text-xl lg:text-3xl text-[#fdebf7] p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-tr from-[#42047e] to-[#e81cff]">
                  {/* <IoLocationSharp size={30} /> {location} */}
                  <span className="font-bold">maxNumber</span> {maxNumber}
                </h3>
                <h3 className="text-center text-xl lg:text-3xl text-[#fdebf7] p-3 lg:p-5 rounded-xl shadow-md hover:shadow-2xl bg-gradient-to-tr from-[#42047e] to-[#e81cff]">
                  {/* <IoLocationSharp size={30} /> {location} */}
                  <span className="font-bold">startDate</span> {startDate}
                </h3>
              </div>
            </div>
          </div>
          


        <div className="join-grp">

          {
            new Date(startDate) < new Date() ? <><h5 className="mt-6 text-center text-pink-200 text-6xl py-12">
            !Opps the group is no longer active.
          </h5></> : <div className="text-center "><button className="my-12 w-8/12 text-3xl btn bg-gradient-to-t from-[#b80af5] via-[#55077a] to-[#1e0630] text-pink-100 hover:shadow-2xl hover:shadow-purple-200 cursor-pointer border-1 border-pink-500 p-12  hover:bg-pink-700 hover:text-white">Join Group</button></div>
          }






        </div>










        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default GroupDetails;
