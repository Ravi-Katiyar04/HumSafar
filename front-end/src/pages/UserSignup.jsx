import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: Email,
      password: Password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 200) {
        setMessage("User created successfully!");
        setTimeout(() => {
          setMessage('');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          navigate('/');
        }, 1000);
      } 
      // else {
      //   console.log(response.data.message)
      //   setMessage(response.data.message || "Registration failed");
      // }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage(error.response.data.message);
      } else {
        console.log(error.response.data.errors[0].msg)
        setMessage(error.response.data.errors[0].msg);
      }      
    }
  }


  return (
    <div className="bg-blue-300 w-full h-full min-h-screen flex items-center justify-center">
      <div className="p-4 m-6 shadow-xl shadow-slate-100 w-fit h-fit bg-white border-2 border-gray-300 text-gray-800 rounded-lg flex flex-col justify-center gap-8">
        <h2 className="text-center text-3xl font-serif font-bold">User SignUp</h2>
        <form className="flex flex-col justify-center gap-2" action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label className="font-semibold" htmlFor="userName">What&#39;s your name</label>
          <div className='flex gap-4'>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className="p-1 border-2 rounded-lg" type="text" placeholder='First Name' />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className="p-1 border-2 rounded-lg" type="text" placeholder='Last Name' />
          </div>
          <label className="font-semibold" htmlFor="email">Enter Email</label>
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="p-1 border-2 rounded-lg"
            required
            type="email"
            name="email" id="email"
            placeholder="Enter your email"
          />
          <label className="font-semibold" htmlFor="Password">Password</label>
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="p-1 border-2 rounded-lg"
            required
            type="Password"
            name="Password" id="Password"
            placeholder="Enter your Password"
          />
          <button className="bg-blue-700 p-2 m-4 text-gray-200 rounded-2xl" type="submit">SignUp</button>
          {message && (
            <div className="flex justify-center items-center text-red-700 m-2">{message}</div>
          )}
        </form>
        <div className='flex justify-center'>
          <p>Already have an account? <Link to='/login' className='text-blue-800'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
