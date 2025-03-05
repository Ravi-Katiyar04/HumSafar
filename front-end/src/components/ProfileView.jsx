import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";


const ProfileView = () => {
  const [name, setName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const token = localStorage.getItem('token');

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.user.fullName.firstName);
    } catch (err) {
      console.error(err);
    //   setError('Failed to fetch profile. Please try again.' + err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      {token ? (
        <div className=" flex items-center gap-2 bg-white p-2 rounded-lg shadow-lg relative ">
            
          <h2 onClick={toggleDropdown} className="font-semibold flex items-center gap-2 cursor-pointer"><CgProfile size={40} className="text-blue-500" /> Hello, {name}</h2>
          {showDropdown && (
            <div className="w-full p-2 bg-white rounded-lg shadow-lg absolute top-full mt-1">
              <button onClick={handleLogout} className="text-red-500  hover:text-red-700">Logout</button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-lg">
          <CgProfile size={30} className="text-blue-500" />
          <Link to="/login" className="font-semibold">Login/Signup</Link>
        </div>
      )}
    </>
  );
};

export default ProfileView;

