import React from "react";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";
import { useLoaderData } from "react-router";
import AllGroupCard from "../Compoents/AllGroupCard";
import Footer from "../Compoents/Footer/Footer";


const AllGroup = () => {
    const allGroupData=useLoaderData()
    console.log(allGroupData);
  return (
    <div>
      <header className="">
        <OtherPageNavBar></OtherPageNavBar>
      </header>
      <main className="bg-gradient-to-br from-[#0d0518] via-[#3c0648] to-[#600e8c]">
        
        <h1 className="text-[#feedff] container mx-auto text-center text-3xl lg:text-6xl font-bold py-12">All Group</h1>
        <section className="container mx-auto form-full p-6 lg:p-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allGroupData.map((group)=><AllGroupCard
                key={group._id}
                singleGroup={group}
                ></AllGroupCard>)
            }
          </div>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllGroup;
