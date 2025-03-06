
import { FaTrainTram } from "react-icons/fa6";
import { MenuItemData } from "../MenuItemData";
import NavbarMenuItems from "./NavbarMenuItems";
import ProfileView from "./ProfileView";

const Navbar = () => {
  
  return (
    <>
      <div className="bg-red-500 h-20 w-4/5 m-auto flex items-center">
        <div className="bg-red-500 h-20 w-full flex gap-10 items-center">
          <a className="flex items-center gap-2" href=""><FaTrainTram size={40} />
            <span className="block">HumSafar</span></a>

          <div>
            <nav>
              <ul className="flex gap-4">
                {MenuItemData.map((menu, index) => {
                  return (
                    <NavbarMenuItems items={menu} key={index} />
                  );
                })}
              </ul>
            </nav>
          </div>

        </div>
        <ProfileView />
      </div>
    </>
  )
}

export default Navbar
