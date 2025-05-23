import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";
// import bgImg from '../assets/groupBg/evening-ii.jpg'
import bgImg from '../assets/groupBg/nmntan-ik.jpg'
import NavBar from "../Compoents/Header/NavBar";
import Footer from "../Compoents/Footer/Footer";
import toast from "react-hot-toast";

const CreateGroup = () => {
  const [startDate, setStartDate] = useState(null);
  // const [loader,setLoader]=useState(true)
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
    
    // if(!email){
    //   return ;
    // }
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
        toast.success(`Group Created Successfully`, {
            className: "w-[300px] h-[100px] text-xl font-bold ",
            removeDelay: 1000,
            iconTheme: {
              primary: "#16061e",
              secondary: "#ef54e2",
            },
            style: {
              border: "1px solid black",
              color: "white",
              backgroundImage:
                "linear-gradient(to bottom right,#4B5563,#9333EA, #3B82F6)",
            },
          });
        console.log("data after send", data);
      });
  };

  return (
    <div className="">
      <header className="">
        <NavBar/>
      </header>
      <main style={{backgroundImage:`url(${bgImg})`}} className="bg-cover bg-no-repeat py-36 bg-top-left">
        <h1 className="text-[#feedff] container mx-auto text-center text-4xl lg:text-6xl font-bold py-12">Create Group</h1>
        <h3 className="text-[#feedff] text-center text-xl lg:text-3xl font-medium">Fill Up The Form And Create Your Hobbie Group Now!</h3>
        <section className="form-full mt-6 lg:mt-0 p-5 lg:p-24 ">
          <form onSubmit={handleCreateGroup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Group Name</label>
                <input
                  type="text"
                  name="groupName"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Enter Your Group Name"
                />
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Select Hobby Category</label>
                <select
                  name="category"

                  className="w-full shadow-2xl bg-transparent text-black font-semibold border-2 border-pink-500 py-3 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                >
                  {/* <option disabled={true}>Hobby Category</option> */}
                  <option value="" hidden>Select Hobby Category</option>
                  <option>Drawing & Painting</option>
                  <option>Photography</option>
                  <option>Video Gaming</option>
                  <option>Fishing</option>
                  <option>Running</option>
                  <option>Cooking</option>
                  <option>Reading</option>
                  <option>Writing </option>
                  <option>Dancing </option>
                </select>
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Description</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  className="w-full textarea textarea-xs input shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 !text-xl"
                  
                ></textarea>
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Meeting Location</label>
                <input
                  type="text"
                  name="meetingLocation"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  
                  placeholder="Meeting Location"
                />
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Max Members</label>
                <input
                  type="number"
                  name="maxNumber"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Max Members"
                />
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 lg:p-4 p-2 ">
                <label className="label text-pink-100 lg:text-2xl p-2 lg:p-0 pb-3">
                  Start Date (deadline equivalent)
                </label>

                <fieldset className=" bg-transparent fieldset rounded-box border border-pink-300 px-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const formattedDate=date.toISOString().split('T')[0]
                      setStartDate(formattedDate)
                    }}
                    value={new Date()}
                    placeholderText="Select a date between today and 5 days in the future"
                    className="w-full lg:py-3 text-white px-5 lg:text-xl lg:font-bold"
                  />
                </fieldset>
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Image URL"
                />
              </fieldset>
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">User Name (readonly)</label>
                <input
                  type="text"
                  name="userName"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  readOnly
                  defaultValue={`User Name : ${user?.displayName}`}
                />
              </fieldset>
            </div>
            <div className="py-6">
              <fieldset className="bg-transparent fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">User Email (readonly)</label>
                <input
                  type="text"
                  name="email"
                  className="input w-full shadow-2xl bg-transparent text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  readOnly
                  value={`User Email : ${email}`}
                  
                />
              </fieldset>
            </div>

            <input type="submit" className="border-3 backdrop-blur-xl  border-cyan-600 w-full bg-transparent p-6 text-2xl font-bold cursor-pointer text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-tl hover:from-[#07233c] hover:via-[#1cc0de] hover:to-[#020611] transition duration-500" value="Create Group" />
          </form>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CreateGroup;
