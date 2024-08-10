import React from 'react'
import useLogOut from '../../hooks/useLogOut.js'
import { useAuthContext } from '../../context/AuthContext'
import useSetStatus from '../../hooks/useSetStatus.js'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
const LogoutButton = () => {
  const [newStatus, setNewStatus] = useState("");
  const {setStatus} = useSetStatus()
  const {loading, logOut} = useLogOut()
  const {authUser} = useAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!newStatus) return
    console.log(newStatus)
    authUser.status = newStatus
    await setStatus(newStatus, authUser._id)
    setNewStatus("")
  }
  


  return (
    <>
      <input type="checkbox" id="set_status_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold pb-3">Type your status below</h3>
          <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}/>
          <button className="btn ml-4 border-gray-400 hover:border-gray-300" onClick={newStatus.length < 13 ? handleSubmit : () => toast.error("Status must be less than 13 characters")}>Set Status</button>
        </div>
        <label className="modal-backdrop" htmlFor="set_status_modal">Close</label>
      </div>
      <div className='flex gap-2 items-center rounded-lg p-2 mt-auto bg-black bg-opacity-34' >
      
              <div className='avatar'>
                  <a className='w-12 rounded-full hover:blur-sm cursor-pointer'>
                      <img src={authUser.profilePic} />
                  </a>
              </div>
              <div className='flex flex-col flex-1 text-left'>

                  <div className='text-lg font-bold ml-2'>
                      <p>{authUser.username}</p>
                      <label className='font-sm font-light hover:text-gray-300 cursor-pointer ' htmlFor="set_status_modal">{authUser.status}</label> {/*{authUser.status}*/}
                  </div>
              </div>
              <button className='btn btn-primary bg-red-400 border-white text-white hover:bg-red-600 hover:border-red-600 btn-sm ml-6' onClick={logOut}>Logout</button>
              
      </div>
    </>

  )
}

export default LogoutButton