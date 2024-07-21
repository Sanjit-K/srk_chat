import React from 'react'

const Conversation = () => {
  return (<>
        <div className='flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-2 cursor-pointer border mb-3 w-[300px]'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://avatar.iran.liara.run/username?username=User+" />
                </div>
            </div>
            <div className='flex flex-col flex-1 text-left'>

                <div className='text-lg font-bold ml-2'>
                    <p>Username</p>
                    <span className='font-sm font-light'>Status</span>
                </div>
                
            </div>
        </div>
        

    </>
    )
  
}

export default Conversation