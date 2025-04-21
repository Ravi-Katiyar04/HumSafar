import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useState } from "react";

const Booking = () => {
  const [selectdate, setSelectdate] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);
  console.log(selectdate);
  return (
    <div className="h-80 bg-sky-900 w-full flex flex-col text-gray-50 justify-center items-center gap-10">
      <div className="text-3xl font-bold">Train Ticket Booking</div>
      <div className="flex items-center h-14 rounded-sm ">
        <ul className="flex justify-center bg-white" action="" >
          <li className="flex flex-col">
            <label className=" text-black font-semibold" htmlFor="from">From Station</label>
            <input className="text-neutral-800 h-10 p-4 style-none" type="text" id="from" placeholder="From Station" />
          </li>
          <div className="bg-white cursor-pointer h-10 flex items-center">
            <FaArrowRightArrowLeft color="black" size={26} />
          </div>
          {/* <label className="font-semibold" htmlFor="password">password</label> */}
          <input className="text-neutral-800 h-10 p-4" type="text" id="to" placeholder="To Station" />
          <div className="selectdata flex">
            {/* <input onChange={(e) => setSelectdate(e.target.value)} className="text-neutral-800 h-14 p-4" type="date" id="date" /> */}
            <input onChange={(e) => setSelectdate(e.target.value)} className="text-neutral-800 h-10 p-4" type="date" id="date" value={selectdate} />
          </div>
        </ul>
        <button className="bg-blue-800 h-16 px-6 text-white">Search Trains</button>
      </div>
    </div>
  )
}

export default Booking
