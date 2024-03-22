import React from "react";

// I have create table where you can see how many tasks completed or not.....
const Prd = () => {
  return (
      <section className="bg-neutral-50 h-screen py-20 lg:py-[10px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-orange-300 text-center">
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-2
                               lg:py-7
                               px-3
                               lg:px-4
                               border-l border-transparent
                               "
                      >
                      Task
                      </th>
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                      >
                     Owner
                      </th>
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                      >
                      Progress
                      </th>
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                      >
                      Status
                      </th>
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               "
                      >
                        Deadline
                      </th>
                      <th
                        className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-white
                               py-4
                               lg:py-7
                               px-3
                               lg:px-4
                               border-r border-transparent
                               "
                      >
                        Join
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        Panning
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                       Riya Chaudhari
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       100%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-lime-100 px-9 rounded-md py-2">
                        Completed
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     24/03/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                       Design(ux/ui)
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                      Rahul singh
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       70%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-orange-100 px-9 rounded-md py-2">
                      Working
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     24/03/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                              Development(Frontend)
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                     Anjali Thakur
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       50%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-yellow-100 px-9 rounded-md py-2">
                    Pending
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                       Development(Backend)
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                      Rohan mishra
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       60%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-yellow-100 px-9 rounded-md py-2">
                        Pending
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                            Development(Database)
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                       Soma Tiwari
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       50%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-red-100 px-9 rounded-md py-2">
                        Pending
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     24/03/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        Testing
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                       Madhaw Pandey
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       20%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-red-100 px-9 rounded-md py-2">
                        working
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        Production Deploy
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                       Shana mirza
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       30%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-lime-100 px-9 rounded-md py-2">
                        Deploy
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                        Cloud
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                     Aniket tyagi
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       20%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-orange-100 px-9 rounded-md py-2">
                       Working
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-[#F3F6FF]
                               border-b border-l border-[#E8E8E8]
                               "
                      >
                 Maintenance

                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                       Rehan dev
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                       100%
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-9
                               bg-white
                               border-b border-[#E8E8E8]
                               "
                      >
                        <span className="bg-orange-100 px-9 rounded-md py-2">
                  Working
                        </span>
                     
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-sm
                               py-5
                               px-2
                               bg-[#F3F6FF]
                               border-b border-[#E8E8E8]
                               "
                      >
                     01/04/2024
                      </td>
                      <td
                        className="
                               text-center text-dark
                               font-medium
                               text-base
                               py-5
                               px-2
                               bg-white
                               border-b border-r border-[#E8E8E8]
                               "
                      >
                        <a
                          href="/"
                          className="
                                  border border-black
                                  py-2
                                  px-6
                                  text-black
                                  inline-block
                                  rounded
                                  hover:bg-orange-500 hover:text-white
                                  "
                        >
                          Next task
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Prd;
