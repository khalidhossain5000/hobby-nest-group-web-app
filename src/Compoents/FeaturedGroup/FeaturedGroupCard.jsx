import React from "react";

const FeaturedGroupCard = ({ featureGroup }) => {
  const {
    _id,
    groupName,
    category,
    description,
    meetingLocation,
    maxNumber,
    imageUrl,
    startDate,
  } = featureGroup;
  return (
    <div className="bg-red-300">
      <div className="container mx-auto card bg-base-100 shadow-sm">
        <figure>
          <img src={`${imageUrl}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{groupName}</h2>
          <p className="overflow-y-scroll">{description}</p>
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedGroupCard;
