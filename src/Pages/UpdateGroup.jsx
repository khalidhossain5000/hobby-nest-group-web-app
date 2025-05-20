import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";
import { useLoaderData } from "react-router";
const UpdateGroup = () => {
    const singleGroupData=useLoaderData()
    const {groupName,category,description,meetingLocation,maxNumber,imageUrl,_id}=singleGroupData;
    const [startDate, setStartDate] = useState(null);
      const { user } = use(AuthContext);
      const email=user?.email;
      if(!email) return;
    const handleUpdateGroup=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form)
        const updatedInfo=Object.fromEntries(formData.entries())

        const updatedGroup={
            ...updatedInfo,
            email
        }

    //Update to db 
    fetch(`http://localhost:3000/groups/${_id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedGroup)
    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("Group Updated")
        console.log("Data after update",data);
    })
        
        
    }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Update page</h2>
      <section className="form-full p-24 ">
        <form onSubmit={handleUpdateGroup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Group Name</label>
              <input
                type="text"
                name="groupName"
                className="input w-full"
                placeholder="Group Name"
                defaultValue={groupName}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Select Hobby Category</label>
              <select
                name="category"
                defaultValue={category}
                className="w-full select select-neutral"
              >
                <option disabled={true}>Hobby Category</option>
                <option>Drawing & Painting</option>
                <option>Photography</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Reading</option>
                <option>Writing </option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="w-full textarea textarea-xs"
              ></textarea>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Meeting Location</label>
              <input
                type="text"

                name="meetingLocation"
                className="input w-full"
                defaultValue={meetingLocation}
                placeholder="Meeting Location"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Max Members</label>
              <input
                type="number"
                defaultValue={maxNumber}
                name="maxNumber"
                className="input w-full"
                placeholder="Max Members"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Start Date (deadline equivalent)</label>

              <div className="border h-6 p-1 rounded">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  
                />
              </div>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Image URL</label>
              <input
              
                type="text"
                defaultValue={imageUrl}
                name="imageUrl"
                className="input w-full"
                placeholder="Image URL"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Name (readonly)</label>
              <input
                type="text"
                name="user-name"
                className="input w-full"
                disabled
                value={`User Name : ${user?.displayName}`}
              />
            </fieldset>
          </div>
          <div className="py-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Email (readonly)</label>
              <input
                type="text"
                name="email-n"
                className="input w-full"
                disabled
                value={`User Name : ${user?.email || ""}`}
              />
            </fieldset>
          </div>

          <input type="submit" className="btn w-full" value="Update Group" />
        </form>
      </section>
    </div>
  );
};

export default UpdateGroup;
