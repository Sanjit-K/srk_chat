import toast from "react-hot-toast";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";
import { useEffect } from "react";

const useListenMessages = () => {
    const {socket} = useSocketContext()
    const {messages, setMessages} = useConversation()

    useEffect(() => {
        
            socket?.on("newMessage", (data) => {
                setMessages([...messages, data])
            })

        return () => socket?.off("newMessage")
        
    }, [socket, messages, setMessages])

}

export default useListenMessages