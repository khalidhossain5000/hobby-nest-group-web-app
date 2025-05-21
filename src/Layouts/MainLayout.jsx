import React, { useEffect, useState } from "react";
import NavBar from "../Compoents/Header/NavBar";
import { Outlet, useNavigation } from "react-router";
import { PacmanLoader } from 'react-spinners';
import Loading from "../Compoents/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();

  //INTIAL WELCOME SPINNER START
  const [welcomeLoader, setWelcomeLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeLoader(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  if (welcomeLoader) {
    return (
      <div className="flex items-center justify-center fixed inset-0 bg-white z-50">
        <PacmanLoader color="#0fbf7f" height={55} speedMultiplier={1} />
      </div>
    );
  }
  return (
    <div>
      <header className="w-full relative ">
        <NavBar></NavBar>
      </header>
      <main>
         {
             state==="loading" ? <Loading/> : <Outlet/>
        }
      </main>
    </div>
  );
};

export default MainLayout;
