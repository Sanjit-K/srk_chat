import { createContext } from "react"
import { useState, useEffect } from "react"
import { useContext } from "react"
import { useAuthContext } from "./AuthContext"
import io from "socket.io-client"
export const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])

    const {authUser} = useAuthContext()

    useEffect(() => {
        if(authUser) {
            const socket = io("https://skchat.onrender.com",{
                query: {
                    userId: authUser._id
                }
            })
            setSocket(socket)
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        }else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])
    return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
}