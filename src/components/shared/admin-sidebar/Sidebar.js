import { useContext, useState } from "react";
import { Context } from "../../../context";
import { Data } from "../../../dates/Dummy";
// import React {useContext, useState} from 'react'

export const Sidebar = () => {
  let { state, dispatch } = useContext(Context);
  const [activeIcon, setActiveIcon] = useState("fa-solid fa-chart-pie");
  return (
    <div className={`${state.toggleNavbar ? "block" : "hidden"}`}>
      <div
        onClick={() => {
          dispatch({ type: "SET_TOGGLE_NAVBAR", payload: false });
        }}
        className="fixed md:hidden z-40 left-0 top-0 right-0 bottom-0 bg-slate-600 backdrop:blur-md opacity-60"
      ></div>
      <div className="h-full z-50 fixed drop-shadow-2xl md:drop-shadow flex">
        <div className="flex-col overflow-hidden md:overflow-auto justify-start gap-4 flex  bg-zinc-700 px-4 py-6 min-h">
          {Data.map((icon, index) => {
            return (
              <div
                key={index}
                className={`p-3.5 cursor-pointer ${
                  activeIcon === icon.icon
                    ? " text-white bg-gradient-to-bl from-indigo-500 to-pink-500"
                    : "text-neutral-400"
                }  rounded-lg flex-col hover:text-white duration-300 justify-start items-center gap-2 flex`}
              >
                <i className={`${icon.icon} text-xl w-6 h-6 text-center `}></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
