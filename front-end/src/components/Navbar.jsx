// import React from 'react'
import { FaTrainTram } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {MenuItemData} from "../MenuItemData";
import NavbarMenuItems from "./NavbarMenuItems";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="bg-red-500 h-20 w-4/5 m-auto flex items-center">
      <div className="bg-red-500 h-20 w-full flex gap-10 items-center">
        <a className="flex items-center gap-2" href=""><FaTrainTram size={40}/>
        <span className="block">HumSafar</span></a>

        <div>
          <nav>
            <ul className="flex gap-4">
              {MenuItemData.map((menu, index)=>{
                return(
                  <NavbarMenuItems items={menu} key={index}/>
                );
              })}
            </ul>
          </nav>
        </div>


      </div>
      <Link to='/login' className="flex my-10 items-center "><CgProfile size={28}/> Login/Signup</Link>     
    </div>
    </>
  )
}

export default Navbar
