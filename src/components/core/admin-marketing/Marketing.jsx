import React from "react";
import Pie from "../../Domain/Charts/marketing-pie/MarketingPie";
import Items from "../admin-items/Items";
import Staff from "../Staff/Staff";
import { topSellingAndGrossingItems } from "../../../dates/Dummy";
import MarketingBar from "../../Domain/Charts/marketing-bar/MarketingBar";
import Cards from "../admin-sales/Cards";
const Marketing = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="my-6">
        <Cards />
      </div>
      <div className="flex mb-6 gap-6 flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full">
          <Pie />
        </div>
        <div className="w-full">
          <MarketingBar />
        </div>
      </div>
      <div className="w-full my-6">
        <Staff />
      </div>
      <div className="w-full gap-6 lg:flex-nowrap flex-wrap flex justify-between">
        {topSellingAndGrossingItems.map((date) => {
          return <Items array={date} />;
        })}
      </div>
    </div>
  );
};

export default Marketing;
