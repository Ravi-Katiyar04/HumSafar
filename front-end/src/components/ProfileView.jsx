
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
const ProfileView = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && !name) {
      (async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const firstName = response.data.user.fullName.firstName;
          setName(firstName);
          localStorage.setItem('userName', firstName);
        } catch (err) {
          console.error(err);
          alert(err.response.data.message);
        }
      })();
    }
  }, [token, name]);

  const handleLogout = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      navigate('/');
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {token ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="font-semibold flex items-center cursor-pointer"
          >
            <CgProfile size={50} className="text-blue-500" /> Hello, {name}
          </button>
          {showDropdown && (
            <div
              className="w-full p-2 bg-white rounded-lg shadow-lg absolute top-full mt-1"
            >
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700"
              >
                Logout
              </button>
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




