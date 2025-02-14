import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Booking = () => {
  return (
    <div className="h-80 bg-sky-900 w-full flex flex-col text-gray-50 justify-center items-center gap-10">
      <div className="text-3xl">Train Ticket Booking</div>
      <div className="flex h-14 rounded-sm">
        <input className="text-neutral-800 h-14 p-4" type="text" name="" id="from" placeholder="From Station" />
        <div className=" bg-white cursor-pointer h-14 flex items-center">
            <FaArrowRightArrowLeft color="black" size={26}/>
        </div>
        <input className="text-neutral-800 p-4" type="text" name="" id="to" placeholder="To Station" />
        <div className="bg-white text-black py-1 px-4">
            <div className="text-sm">Departure Date</div>
            <div className="flex gap-6 text-lg items-center">
                <span>26 jan 2025</span>
                <span className="cursor-pointer"><SlCalender/></span>
            </div>
        </div>
        <button className="bg-blue-800 p-4">Search Trains</button>
      </div>
    </div>
  )
}

export default Booking
