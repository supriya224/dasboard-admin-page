/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/shared/admin-navbar/Navbar";
import { Sidebar } from "../../components/shared/admin-sidebar/Sidebar";
import Main from "../../components/core/admin-main/Main";
import  Marketing  from "../../components/core/admin-marketing/Marketing";
import { Route, Routes, useParams } from "react-router-dom";
import { Data } from "../../dates/Dummy";
import { Context } from "../../context/index";
// import MarketingBar from "../../components/Domain/Charts/marketing-bar/MarketingBar";

function HomePage() {
  const { category } = useParams();
  let cat = Data.find((categ) => categ.url === parseInt(category));
  let { state, dispatch } = useContext(Context);
  let [size, setSize] = useState(1000);
  window.addEventListener("resize", (e) => {
    setSize(e.currentTarget.innerWidth);
  });
  useEffect(() => {
    size < 768
      ? dispatch({ type: "SET_TOGGLE_NAVBAR", payload: false })
      : dispatch({ type: "SET_TOGGLE_NAVBAR", payload: true });
  }, [size]);
  return (
    <div className="bg-slate-50">
      <div className="">
        <Navbar />
      </div>
      <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
        <Sidebar />
        <div
          className={`main ${
            state.toggle
              ? ` ${state.toggleNavbar ? "md:ml-[310px]" : "ml-0"}`
              : ` ${state.toggleNavbar ? "md:ml-[90px]" : "ml-0"}`
          } overflow-auto w-full h-full z-10`}
        >
          {/* {category === "main" && <Main />}
          {category === "marketing" && <Marketing />} */}
          <Routes>
            <Route path="/admin-dashboard/main" element={<Main />} />
            <Route path="/admin-dashboard/marketing" element={<Marketing />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
