import React, { use, useState } from "react";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";

const CreateGroup = () => {
  const [startDate, setStartDate] = useState(null);
  const { user } = use(AuthContext);
  const email=user?.email;
  
  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const createGroupData = Object.fromEntries(formData.entries());
    if (!startDate) {
      alert("select a date");
      return
    }
    console.log(createGroupData);
    if(!email){
      return ;
    }
    const allGroupsData = {
      ...createGroupData,
      startDate,
      email
    };
    //send this data to the db
    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allGroupsData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Data send to mongo ");
        console.log("data after send", data);
      });
  };

  return (
    <div>
      <header className="">
        <OtherPageNavBar></OtherPageNavBar>
      </header>
      <main className="container mx-auto">
        <h1 className="text-center text-6xl font-bold p-12">Create Group</h1>
        <section className="form-full p-24 ">
          <form onSubmit={handleCreateGroup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Group Name</label>
                <input
                  type="text"
                  name="groupName"
                  className="input w-full"
                  placeholder="Group Name"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Select Hobby Category</label>
                <select
                  name="category"
                  defaultValue="Hobby Category"
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
                  defaultValue="enter a meeting locaitons"
                  placeholder="Meeting Location"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Max Members</label>
                <input
                  type="number"
                  name="maxNumber"
                  className="input w-full"
                  placeholder="Max Members"
                />
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">
                  Start Date (deadline equivalent)
                </label>

                <div className="border h-6 p-1 rounded">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    placeholderText="Select a date between today and 5 days in the future"
                  />
                </div>
              </fieldset>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <label className="label">Image URL</label>
                <input
                  type="text"
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
                  value={`User Name : ${user?.email || ''}`}
                />
              </fieldset>
            </div>

            <input type="submit" className="btn w-full" value="Create Group" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default CreateGroup;
