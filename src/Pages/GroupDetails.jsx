import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
      const {groupName,category,description,meetingLocation,maxNumber,imageUrl,startDate}=useLoaderData()
    return (
        <div>
            <h2>{groupName}</h2>
        </div>
    );
};

export default GroupDetails;