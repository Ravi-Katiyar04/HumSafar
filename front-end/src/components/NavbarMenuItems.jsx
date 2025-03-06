/* eslint-disable react/prop-types */
import Dropdown from "./Dropdown"
import { useState,useRef,useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
const NavbarMenuItems = ({items}) => {
  const [dropdown, setDropdown]= useState(false);
  const formRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
          setDropdown(false);
        }
      };
  
      if (dropdown) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdown]);
  return (
    
      <li className="relative">
        {items.submenu ?(
            <>
            <button ref={formRef} className="flex items-center" type="button" aria-haspopup="menu"
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
  )
}

export default NavbarMenuItems
