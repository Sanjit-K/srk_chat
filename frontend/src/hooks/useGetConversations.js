import { useEffect } from "react"
import toast from "react-hot-toast"
import { useState } from "react"

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch("/api/users")
                console.log(res)
                const data = await res.json()
                if(data.error) {
                    throw new Error(data.error)
                }
                setConversations(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }   
        getConversations()   
    } ,[])

    return {loading, conversations}
}

export default useGetConversations