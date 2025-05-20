import React from "react";
import { useLoaderData } from "react-router";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";

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
            <OtherPageNavBar/>
        </header>
      <div className="container mx-auto py-24">
        <div className="title-img text-center ">
          <img className="w-7/12 h-2/12 mx-auto" src={imageUrl} alt="" />
          <h2 className="py-12 text-3xl font-bold text-black">{groupName}</h2>
          <p>{description}</p>
        </div>
        <div className="content text-center">
          <div>
            <h3>{category}</h3>
            <h3>{meetingLocation}</h3>
          </div>
          <div>
            <h3>{maxNumber}</h3>
            <h3>{startDate}</h3>
          </div>
        </div>
        <button className="w-full text-3xl font-bold btn btn-warning text-black my-6">Join Group</button>
      </div>
    </div>
  );
};

export default GroupDetails;
