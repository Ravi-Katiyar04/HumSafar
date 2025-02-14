/* eslint-disable react/prop-types */

const Dropdown = ({submenus, dropdown}) => {
  if(!dropdown){
    return "";
  }
  return (
    <div className="absolute w-36 p-2 left-0  bg-white border rounded shadow-lg">
      <ul>
      {submenus.map((submenu, index)=>(
            <li key={index}>
                <a href="https://www.railyatri.in/train-ticket">{submenu.title}</a>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown
