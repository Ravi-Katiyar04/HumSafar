import {Link} from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [captaindata, setCaptaindata] = useState({})
  
  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptaindata({
      email:email,
      password:password
    })
    console.log(captaindata)
    setEmail('');
    setPassword('');
  }


  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center">
      <div className="p-4 shadow-xl shadow-slate-100 w-fit h-fit bg-white border-2 border-gray-300 text-gray-800 rounded-lg flex flex-col justify-center gap-8">
        <h2 className="text-center text-3xl font-serif font-bold" >Captain Login</h2>
        <form className="flex flex-col justify-center gap-2" action=""
          onSubmit={(e)=>{
            submitHandler(e);
          }}
        >
          <label className="font-semibold" htmlFor="username">Username</label>
          <input 
            value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="p-2 border-2 rounded-lg" 
            required 
            type="email" 
            name="username" id="username" 
            placeholder="Enter your email" 
          />
          <label className="font-semibold" htmlFor="Password">Password</label>
          <input 
            value={password} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="p-2 border-2 rounded-lg" 
            required 
            type="Password" 
            name="Password" id="Password" 
            placeholder="Enter your Password" 
          />
          <div className=" flex justify-between my-2 gap-10">
            <button>Forget Password ?</button>
            <Link to='/captain-signup' className="text-blue-600">Register as Captain</Link>
          </div>
          <button className="bg-blue-700 p-2 m-4 text-gray-200 rounded-2xl" type="submit">LogIn</button>
        </form>
        <Link to='/login' className='bg-orange-800 flex justify-center items-center text-slate-50 p-1 rounded-2xl'>LogIn as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
