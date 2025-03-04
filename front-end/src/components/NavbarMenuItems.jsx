/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const NavbarMenuItems = ({items}) => {
  const [dropdown, setDropdown]= useState(false);
  return (
    
      <li className="relative">
        {items.submenu ?(
            <>
            <button className="flex items-center" type="button" aria-haspopup="menu"
            aria-expanded={dropdown ?"true":"false"}
            onClick={()=>setDropdown((prev)=> !prev)}
            >
              {items.title} {<IoIosArrowDown/>}
            </button>
            <Dropdown submenus={items.submenu} dropdown={dropdown}/>
            </>           
        ):(
            <a href="">{items.title}</a>
          )
        }
      </li>
    // </div>
  )
}

export default NavbarMenuItems
