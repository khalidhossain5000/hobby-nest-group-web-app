import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";
import { useLoaderData } from "react-router";
import bgImg from '../assets/groupBg/evening-ii.jpg'
import NavBar from "../Compoents/Header/NavBar";
const UpdateGroup = () => {
    const singleGroupData=useLoaderData()
    const {groupName,category,description,meetingLocation,maxNumber,imageUrl,_id}=singleGroupData;
    const [startDate, setStartDate] = useState(null);
      const { user } = use(AuthContext);
      const email=user?.email;
      // if(!email) return;
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
    <div className="bg-[#111827]">
      <header>
        <NavBar/>
      </header>
      <main style={{backgroundImage:`url(${bgImg})`}} className="bg-cover bg-no-repeat py-36 bg-top-left">

      <h2  className="text-[#feedff] container mx-auto text-center text-6xl font-bold py-12">Update page</h2>
      <section className="p-24">
        <form onSubmit={handleUpdateGroup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Group Name</label>
              <input
                type="text"
                name="groupName"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                placeholder="Group Name"
                defaultValue={groupName}
              />
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Select Hobby Category</label>
              <select
                name="category"
                defaultValue={category}
                className="w-full shadow-2xl bg-transparent text-black font-semibold border-2 border-pink-500 py-3 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
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
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="w-full textarea textarea-xs input shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 !text-xl"
              ></textarea>
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Meeting Location</label>
              <input
                type="text"

                name="meetingLocation"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                defaultValue={meetingLocation}
                placeholder="Meeting Location"
              />
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Max Members</label>
              <input
                type="number"
                defaultValue={maxNumber}
                name="maxNumber"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                placeholder="Max Members"
              />
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Start Date (deadline equivalent)</label>

              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 px-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  
                />
              </fieldset>
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">Image URL</label>
              <input
              
                type="text"
                defaultValue={imageUrl}
                name="imageUrl"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                placeholder="Image URL"
              />
            </fieldset>
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">User Name (readonly)</label>
              <input
                type="text"
                name="user-name"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                readOnly
                value={`User Name : ${user?.displayName}`}
              />
            </fieldset>
          </div>
          <div className="py-6">
            <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
              <label className="label text-pink-100 text-2xl pb-3">User Email (readonly)</label>
              <input
                type="text"
                name="email-n"
                 className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                readOnly
                value={`User Name : ${user?.email || ""}`}
              />
            </fieldset>
          </div>

          <input type="submit" className="border-3 backdrop-blur-xl  border-cyan-600 w-full bg-transparent p-6 text-2xl font-bold cursor-pointer text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-tl hover:from-[#07233c] hover:via-[#1cc0de] hover:to-[#020611] transition duration-500" value="Update Group" />
        </form>
      </section>

      </main>
    </div>
    
  );
};

export default UpdateGroup;
