import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  // const [userData, setUserData] = useState({})

  const {setUser} = useContext(UserDataContext)
  const Navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      if (response.status === 200) {
        const data= response.data
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setMessage("User login successfully!");
        setTimeout(() => {
          setMessage('');
          setEmail('');
          setPassword('');
          Navigate('/');
        }, 1000);
      }
    } catch (error) {
      if (error.response) {

        if (error.response.status === 404) {
          setMessage(error.response.data.message);
        } else {
          setMessage(error.response.data?.errors?.[0]?.msg || "An error occurred. Please try again.");
        }
      } else {
        console.error("Network error or server is unreachable:", error);
        setMessage("Something went wrong. Please check your internet connection.");
      }
    }
  };

  

  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center">
      <div className="p-4 shadow-xl shadow-slate-100 w-fit h-fit bg-white border-2 border-gray-300 text-gray-800 rounded-lg flex flex-col justify-center gap-8">
        <h2 className="text-center text-3xl font-serif font-bold" >User Login</h2>
        <form className="flex flex-col justify-center gap-2" action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="font-semibold" htmlFor="username">Username</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="p-2 border-2 rounded-lg"
            required
            type="email"
            name="username" id="username"
            placeholder="Enter your email"
          />
          <label className="font-semibold" htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="p-2 border-2 rounded-lg"
            required
            type="password"
            name="password" id="password"
            placeholder="Enter your password"
          />
          <div className=" flex justify-between my-2 gap-10">
            <button>Forget password ?</button>
            <Link to='/signup' className="text-blue-600">Create new Account</Link>
          </div>
          <button className="bg-blue-700 p-2 m-4 text-gray-200 rounded-2xl" type="submit">LogIn</button>
        </form>
        {message && (
          <div className="flex justify-center items-center text-red-700 m-2">{message}</div>
        )}
        <Link to='/captain-login' className='bg-green-950 flex justify-center items-center text-slate-50 p-1 rounded-2xl'>LogIn as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
