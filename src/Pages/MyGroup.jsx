import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";
import Footer from "../Compoents/Footer/Footer";
import MyGroupEmpty from "../Compoents/MyGroupIntitialMessage/MyGroupEmpty";

const MyGroup = () => {
  const myGroupData = useLoaderData();
  const [groupAllData, setGroupAllData] = useState(myGroupData);
  if (groupAllData.length <= 0) {
    return <MyGroupEmpty />;
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      theme: "dark",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-cyan-one.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                theme: "dark",
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //remove group from the state
              const remainingGroup = groupAllData.filter(
                (group) => group._id !== id
              );
              setGroupAllData(remainingGroup);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <header>
        <OtherPageNavBar />
      </header>
      <main className="bg-gradient-to-br from-[#0d0518] via-[#3c0648] to-[#600e8c]">
        
        <div className="text-[#feedff] container mx-auto text-center text-6xl font-bold py-16 ">
          <h2>My Group</h2>
          <div className="mt-16 overflow-x-auto">
            <table className="table border-1 border-pink-600 table-auto">
              {/* head */}
              <thead className="">
                <tr className="border-b-1 border-b-pink-600 text-[#feeeff] text-xl font-normal">
                  <th className="">No</th>
                  <th className="border-x-1 border-x-pink-300">Group Image</th>
                  <th className="border-x-1 border-x-pink-300">Group Name</th>
                  <th className="border-x-1 border-x-pink-300">Description</th>
                  <th className="border-x-1 border-x-pink-300">Category</th>
                  <th className="border-x-1 border-x-pink-300">Max Number</th>
                  <th className="border-x-1 border-x-pink-300">
                    Meeting Location
                  </th>
                  <th className="border-x-1 border-x-pink-300">StartDate</th>
                  <th className="border-x-1 border-x-pink-300">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {/* row 1 */}
                {groupAllData.map((group, index) => (
                  <tr
                    className="border-b-1 border-b-pink-600 border-r-1 text-[17px] font-normal"
                    key={group._id}
                  >
                    <th>{index + 1}</th>
                    <td className="border-x-1 border-x-pink-300">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-2xl h-12 w-12 lg:w-20 lg:h-20">
                            <img
                              className=""
                              src={group.imageUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.groupName}
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.description}
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.category}
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.maxNumber}
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.meetingLocation}
                    </td>
                    <td className="border-x-1 border-x-pink-300">
                      {group?.startDate}
                    </td>
                    <th>
                      <div className="space-y-3">
                        <Link
                          to={`/update-group/${group._id}`}
                          className="btn-warning text-black font-bold btn btn-xs w-full"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(group._id)}
                          className="btn btn-xs btn-error text-black font-bold w-full"
                        >
                          Delete
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MyGroup;
