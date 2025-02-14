import {Link} from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('')
  const [captaindata, setCaptaindata] = useState({})
  
  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptaindata({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:Email,
      password:Password
    })
    console.log(captaindata)
    setFirstName('')
    setLastName('')
    setEmail('');
    setPassword('');
  }


  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center">
      <div className="p-4 shadow-xl shadow-slate-100 w-fit h-fit bg-white border-2 border-gray-300 text-gray-800 rounded-lg flex flex-col justify-center gap-8">
        <h2 className="text-center text-3xl font-serif font-bold" >Captain SignUp</h2>
        <form className="flex flex-col justify-center gap-2" action=""
          onSubmit={(e)=>{
            submitHandler(e);
          }}
          >
          <label className="font-semibold" htmlFor="userName">What&#39;s your name</label>
          <div className='flex gap-4'>
            <input 
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              className="p-1 border-2 rounded-lg"  type="text" placeholder='First Name' />
            <input 
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              className="p-1 border-2 rounded-lg"  type="text" placeholder='Last Name' />
          </div>
          <label className="font-semibold" htmlFor="email">Enter Email</label>
          <input 
            value={Email} 
            onChange={(e)=>{
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="p-1 border-2 rounded-lg" 
            required 
            type="Password" 
            name="Password" id="Password" 
            placeholder="Enter your Password" 
          />
          <button className="bg-blue-700 p-2 m-4 text-gray-200 rounded-2xl" type="submit">SignUp</button>
        </form>
        <div className='flex justify-center'>
          <p>Already have an account? <Link to='/captain-login' className='text-blue-800'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
