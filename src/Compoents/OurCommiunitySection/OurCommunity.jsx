import React from "react";
import {
  JackInTheBox,
  Zoom,
} from "react-awesome-reveal";
import CountUp from "react-countup";
import { MdGroups3 } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { RiEdgeNewLine } from "react-icons/ri";

const OurCommunity = () => {
  return (
    <div className="py-24">
      <Zoom>
        <h1 className="text-6xl font-bold text-pink-600 text-center pt-6 pb-12">
          Our Community In Numbers
        </h1>
      </Zoom>
      <div className="space-y-6 lg:space-y-0 px-3 lg:px-0 py-6 lg:py-20 card-container lg:flex items-center justify-between w-full">
        <JackInTheBox duration={3000}>
          <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
            <div className="mx-auto text-center text-pink-200">
              <MdGroups3 style={{ margin: "auto" }} size={90} />
            </div>
            <h2 className="text-[64px] font-extrabold text-center text-pink-100">
              <CountUp end={500} enableScrollSpy={true}></CountUp>+
            </h2>
            <p className="text-2xl font-semibold text-white">
              Active Hobby Groups
            </p>
          </div>
        </JackInTheBox>
        <JackInTheBox duration={3000}>
          <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
            <div className="mx-auto text-center text-pink-200">
              <MdEmojiPeople style={{ margin: "auto" }} size={90} />
            </div>
            <h2 className="text-[64px] font-extrabold text-center text-pink-100">
              <CountUp end={1500} enableScrollSpy={true}></CountUp>+
            </h2>
            <p className="text-2xl font-semibold text-white">
              Members Connected
            </p>
          </div>
        </JackInTheBox>

        <JackInTheBox duration={3000}>
          <div className="w-[290px] p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
            <div className="mx-auto text-center text-pink-200">
              <BiSolidCategory style={{ margin: "auto" }} size={90} />
            </div>
            <h2 className="text-[64px] font-extrabold text-pink-100 text-center">
              <CountUp end={15} enableScrollSpy={true}></CountUp>+
            </h2>
            <p className="text-center text-2xl font-semibold text-white">
              Hobby Categories
            </p>
          </div>
        </JackInTheBox>

        <JackInTheBox duration={3000}>
          <div className="p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-300">
            <div className="mx-auto text-center text-pink-200">
              <RiEdgeNewLine style={{ margin: "auto" }} size={90} />
            </div>
            <h2 className="text-[64px] font-extrabold text-center text-pink-100">
              <CountUp end={600} enableScrollSpy={true}></CountUp>+
            </h2>
            <p className="text-2xl font-semibold text-white">
              New Members This Year
            </p>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default OurCommunity;
