import React from "react";
import OtherPageNavBar from "../Compoents/Header/OtherPageNavBar";
import { useLoaderData } from "react-router";
import AllGroupCard from "../Compoents/AllGroupCard";

const AllGroup = () => {
    const allGroupData=useLoaderData()
  return (
    <div>
      <header className="">
        <OtherPageNavBar></OtherPageNavBar>
      </header>
      <main className="container mx-auto">
        <h1 className="text-center text-6xl font-bold p-12">All Group</h1>
        <section className="form-full p-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                allGroupData.map((group)=><AllGroupCard
                key={group._id}
                singleGroup={group}
                ></AllGroupCard>)
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllGroup;
