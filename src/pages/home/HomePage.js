import React from "react";
import { Navbar } from "../../components/shared/admin-navbar/Navbar";
import { Sidebar } from "../../components/shared/admin-sidebar/Sidebar";
import Main from "../../components/core/admin-main/Main";
import {Marketing} from "../../components/core/admin-marketing/Marketing";
import { useParams } from "react-router-dom";
import {Data} from "../../dates/Dummy"


function HomePage() {
  const {category}=useParams();
  let cat=Data.find((categ)=> categ.url===parseInt((category)))
  return (
    <div className="bg-slate-300">
      <div>  <Navbar /></div>
    
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Sidebar />
        <div className={`main overflow-auto w-full h-full z-10`}>
          {category ==='main' && <Main/>}
          {category==='marketing' && <Marketing/>}

        </div>
      </div>
    </div>
  );
}

export default HomePage;
