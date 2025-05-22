import React from "react";
import { Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";

const OurCommunity = () => {
  return (
    <div>
      <Zoom>
        <h1 className="text-6xl font-bold text-pink-600 text-center pt-6 pb-12">
          Our Community In Numbers
        </h1>
      </Zoom>
      <div className="px-3 lg:px-0 py-6 lg:py-16 card-container lg:flex items-center justify-between w-full">
        <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
          {/* <img src={c1img} alt="" /> */}
          <h2 className="text-[64px] font-extrabold text-center text-pink-100">
            <CountUp end={500} enableScrollSpy={true}></CountUp>+
          </h2>
          <p className="text-2xl font-semibold text-white">
            Active Hobby Groups
          </p>
        </div>
        <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
          {/* <img src={c2img} alt="" /> */}
          <h2 className="text-[64px] font-extrabold text-center text-pink-100">
            <CountUp end={1500} enableScrollSpy={true}></CountUp>+
          </h2>
          <p className="text-2xl font-semibold text-white">
            Members Connected
          </p>
        </div>
        <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
          {/* <img src={c3img} alt="" /> */}
          <h2 className="text-[64px] font-extrabold text-pink-100 text-center">
            <CountUp end={15} enableScrollSpy={true}></CountUp>+
          </h2>
          <p className="text-2xl font-semibold text-white">
            Hobby Categories
          </p>
        </div>
        <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
          {/* <img src={c4img} alt="" /> */}
          <h2 className="text-[64px] font-extrabold text-center text-pink-100">
            <CountUp end={600} enableScrollSpy={true}></CountUp>+
          </h2>
          <p className="text-2xl font-semibold text-white">
            New Members This Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
