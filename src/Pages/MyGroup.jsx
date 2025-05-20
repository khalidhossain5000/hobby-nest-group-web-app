import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
const MyGroup = () => {
  const myGroupData = useLoaderData();
  // const {_id,,,description,,,imageUrl,}=singleGroup;

//   console.log("my group data ", myGroupData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${id}`,{
            method:'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.deletedCount){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
            }
        })

      }
    });
  };
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
                <th>Description</th>
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
                      <div></div>
                    </div>
                  </td>
                  <td>{group?.groupName}</td>
                  <td>{group?.description}</td>
                  <td>{group?.category}</td>
                  <td>{group?.maxNumber}</td>
                  <td>{group?.meetingLocation}</td>
                  <td>{group?.startDate}</td>
                  <th>
                    <Link
                      to={`/update-group/${group._id}`}
                      className="mr-3 btn-warning text-black font-bold btn btn-xs"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-xs btn-error text-black font-bold"
                    >
                      Delete
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
