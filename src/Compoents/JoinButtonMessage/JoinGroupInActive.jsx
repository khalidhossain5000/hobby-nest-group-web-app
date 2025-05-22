import React from "react";

const JoinGroupInActive = () => {
  return (
    <div>
      <div>
        <header>
          <OtherPageNavBar />
        </header>
        <main className="bg-gradient-to-br from-[#0d0518] via-[#3c0648] to-[#600e8c] lg:flex flex-col items-center py-96">
          <h2 className="text-[#feedff] container mx-auto text-center text-6xl font-bold py-16 ">
            !Opps- You Haven't Create Any Group Yet-
          </h2>
          <h5 className="mt-6 text-center text-pink-200 text-2xl ">
            Go To Create Group Page To Create Your First Group
          </h5>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default JoinGroupInActive;
