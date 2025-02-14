import { FaTrainTram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="h-fit w-full bg-gray-200 py-6">
      <div className="w-4/5 m-auto grid grid-cols-4 text-gray-700">
        <div className=".....">
            <div className="my-4 text-xl text-slate-950">Features</div>
            <div><a href="">Live Train Status</a></div>
            <div><a href="">PNR Status</a></div>
            <div><a href="">Train Time Table</a></div>
            <div><a href="">Seat Availability</a></div>
            <div><a href="">Train between Stations</a></div>
            <div><a href="">Arrival Departure</a></div>
            <div><a href="">Travel Advisory</a></div>
        </div>
        <div className=".....">
            <div className="my-4 text-xl text-slate-950">Book With Us</div>
            <div><a href="">Train Ticket</a></div>
            <div><a href="">Food In Train</a></div>
        </div>
        <div className=".....">
            <div className="my-4 text-xl text-slate-950">Info</div>
            <div><a href="">About Us</a></div>
            <div><a href="">Contact Us</a></div>
            <div><a href="">F&Q</a></div>
            <div><a href="">Partners</a></div>
            <div><a href="">Media</a></div>
        </div>
        <div className=".....">
            <div className="flex my-4 items-center"><FaTrainTram size={40}/>
              <div className="text-slate-950 mx-4 text-xl">HumSafar</div>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia nihil sed nisi exercitationem nemo unde atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <div className="my-4 flex gap-4">
              <div><SlSocialFacebook size={30} color="gray"/></div>
              <div><RiTwitterXFill size={30} color="gray"/></div>
              <div><TbBrandYoutube size={30} color="gray"/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
