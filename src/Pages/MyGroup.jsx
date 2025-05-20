import React from "react";
import { useLoaderData } from "react-router";

const MyGroup = () => {
  const myGroupData = useLoaderData();
// const {_id,,,description,,,imageUrl,}=singleGroup;


  console.log("my group data ", myGroupData);
  const handleDelete=()=>{

  }
  return (
    <div>
      <div className="title-img text-center container mx-auto">
        <h2>My Group</h2>
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Group Image</th>
                <th>Group Name</th>
                <th>category</th>
                <th>Max Number</th>
                <th>Meeting Location</th>
                <th>startDate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myGroupData.map((group, index) => (
                <tr key={group._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={group.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </td>
                  <td>{group?.groupName}</td>
                  <td>{group?.category}</td>
                  <td>{group?.maxNumber}</td>
                  <td>{group?.meetingLocation}</td>
                  <td>{group?.startDate}</td>
                  <th>
                    <button className="btn btn-xs">Update</button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-xs"
                    >
                      X
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
