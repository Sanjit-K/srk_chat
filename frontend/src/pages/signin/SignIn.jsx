import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogIn.js'
import { useState } from 'react'
const signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(username, password)
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Log In 
                <span className='text-gray-500'> SKchat</span>
            </h1>
            <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
                <label className="input input-bordered flex items-center gap-2 mt-4 mb-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                </label>

                <Link className="link link-primary justify-start font-light" to="/signup">Don't have an account?</Link>


                <div>
                    <button className="btn btn-wide mt-4 border-white text-white" disabled={loading}>
                        {loading ? <span className="loading loading-infinity loading-lg"></span> : "Sign In"}
                    </button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default signin