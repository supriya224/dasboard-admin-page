
import React from 'react'
import Options from '../../core/options/Option'
// import Column from '../../Domain/Charts/marketing-bar/MarketingBar'
import Pie from '../../Domain/Charts/marketing-pie/MarketingPie'
import Items from '../../core/admin-items/Items'
import Staff from '../../core/Staff/Staff'
import { topSellingAndGrossingItems } from '../../../dates/Dummy'
import MarketingBar from '../../Domain/Charts/marketing-bar/MarketingBar'
const Marketing = () => {
  return (
    <div className='p-6 min-h-screen'>
      <div className="">
        <Options />
      </div>
      <div className="flex mb-6 gap-6 flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full">
          <MarketingBar />
        </div>
        <div className="w-full">
          <Pie />
        </div>
      </div>
      <div className='w-full gap-6 lg:flex-nowrap flex-wrap flex justify-between'>
        {
          topSellingAndGrossingItems.map((date) => {
            return <Items array={date} />
          })
        }
      </div>
      <div className="w-full my-6">
        <Staff/>
        {/* <Staff /> */}
      </div>
    </div>
  )
}

export default Marketing

