import React, { useEffect, useState } from 'react';
import { DarkContext } from './DarkModeContext';

const DarkProvider = ({children}) => {
     //dark mode start
     const [theme,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    
     useEffect(()=>{
      localStorage.setItem("theme",theme);
      const localTheme=localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme",localTheme)
      
     },[theme])
    //  dark mode end
    
      const toggleTheme=(e)=>{
        
        if(e.target.checked){
          setTheme("dark")
           
        }
        else{
          setTheme("light")
          
        }
        
      }
    const data={
        toggleTheme,
        theme
    }
    return (
       <DarkContext value={data}>{children}</DarkContext>
    );
};

export default DarkProvider;