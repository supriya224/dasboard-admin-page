import React from 'react'
import  Cards  from '../admin-sales/Cards'
import { dateCards } from '../../../dates/Dummy'
import Line from '../../Domain/Charts/line-charts/Line'
import Bar from '../../Domain/Charts/Bar-graph/Bar'

const Main = () => {
  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
            <div className=""><Cards /></div>
            <div className="flex gap-4 flex-wrap">
                <div className=" p-6 w-full my-4 lg:w-[64%] bg-white rounded-xl">
                    <div className="ext-zinc-900 text-base font-medium leading-normal mb-8">Items Details</div>
                    <div className=" justify-start items-start gap-2 flex flex-wrap">
                        {
                            dateCards.map(({ text, task, color }) => {
                                return (
                                    <div className={`grow shrink basis-0 h-[100px] p-3 bg-white rounded-sm shadow border-t-2 ${color} flex-col justify-start items-start gap-4 inline-flex`}>
                                        <div className="self-stretch text-white text-xs py-1 px-3 text-center font-medium leading-[18px] rounded-full bg-orange-300">{text}</div>
                                        <div className="self-stretch justify-start items-baseline gap-1 inline-flex">
                                            <div className="text-zinc-900 text-xl font-semibold leading-[30px]">{task} <span className='text-sm font-thin text-blue-800'>Items</span></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <Line />
                    </div>
                </div>
                <div className=" p-6 w-full my-4 lg:w-1/3 bg-white rounded-xl">
                    <Bar />
                </div>
            </div>
        </div >
  )
}

export default Main