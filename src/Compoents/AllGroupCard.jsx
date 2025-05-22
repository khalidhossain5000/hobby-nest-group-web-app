import React from "react";
import { Link } from "react-router";

const AllGroupCard = ({ singleGroup }) => {
  const {_id,groupName,category,description,meetingLocation,maxNumber,imageUrl,startDate}=singleGroup;
  return (
   
      <div className="bg-gradient-to-br from-[#1171dd] via-[#200633] to-[#d72bba] border border-pink-300 shadow-lg shadow-purple-700 hover:shadow-2xl hover:shadow-purple-400">
        <figure className="h-[250px]">
          <img
            className="w-full h-[250px] object-cover"
            src={`${imageUrl}`}
            alt="Group Image"
          />
        </figure>
        <div className="p-3 lg:p-6">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-white">{groupName}</h2>
          <p className="text-xl text-white my-2 lg:my-4">
            <span className="text-xl lg:text-2xl font-bold text-[#fffeff]">Description</span> : {description.slice(0,150)}
          </p>
          <div className="otherinfo">
            <div className="text-xl text-white my-2 lg:my-4 space-y-2">
                <h3 ><span className="mr-2 text-xl lg:text-2xl font-bold text-[#fffeff]">Category</span>{category}</h3>
                <h3 ><span className="mr-2 text-xl lg:text-2xl font-bold text-[#fffeff]">Meeting-Location:</span>{meetingLocation}</h3>
            </div>
            <div className="text-xl text-white my-2 lg:my-4">
                <h3 ><span className="text-xl lg:text-2xl font-bold text-[#fffeff] mr-2">Max-Number:</span>{maxNumber}</h3>
                <h3 ><span className="text-xl lg:text-2xl font-bold text-[#fffeff] mr-2">Start-Date:</span>{startDate}</h3>
            </div>
            
          </div>
          <div className="w-9/12 mx-auto py-3 lg:py-5">
            <Link to={`/all-group/${_id}`} className="btn w-full bg-gradient-to-br from-[#148ead] to-[#114045] text-xl text-white" >See More</Link>
          </div>
        </div>
      </div>
   
  );
};

export default AllGroupCard;
