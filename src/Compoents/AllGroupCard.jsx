import React from "react";
import { Link } from "react-router";

const AllGroupCard = ({ singleGroup }) => {
  const {_id,groupName,category,description,meetingLocation,maxNumber,imageUrl,startDate}=singleGroup;
  return (
   
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={`${imageUrl}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{groupName}</h2>
          <p>
            {description}
          </p>
          <div className="otherinfo">
            <div>
                <h3>{category}</h3>
                <h3>{meetingLocation}</h3>
            </div>
            <div>
                <h3>{maxNumber}</h3>
                <h3>{startDate}</h3>
            </div>
            
          </div>
          <div className="w-full">
            <Link to={`/all-group/${_id}`} className="btn btn-primary w-full" >See More</Link>
          </div>
        </div>
      </div>
   
  );
};

export default AllGroupCard;
