import React from 'react'
import useLogOut from '../../hooks/useLogOut.js'
import { useAuthContext } from '../../context/AuthContext'
const LogoutButton = () => {
  const {loading, logOut} = useLogOut()
  const {authUser} = useAuthContext()
  return (
    <div className='flex gap-2 items-center rounded-lg p-2 mt-auto bg-black bg-opacity-34' >
    
            <div className='avatar'>
                <a className='w-12 rounded-full hover:blur-sm cursor-pointer'>
                    <img src={authUser.profilePic} />
                </a>
            </div>
            <div className='flex flex-col flex-1 text-left'>

                <div className='text-lg font-bold ml-2'>
                    <p>{authUser.username}</p>
                    <span className='font-sm font-light hover:text-gray-300 cursor-pointer '>{authUser.status}</span> {/*{authUser.status}*/}
                </div>
            </div>
            <button className='btn btn-primary bg-red-400 border-white text-white hover:bg-red-600 hover:border-red-600 btn-sm ml-6' onClick={logOut}>Logout</button>
            
    </div>

  )
}

export default LogoutButton