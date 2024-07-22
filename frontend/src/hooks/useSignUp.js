import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
const useSignUp = () => {
  const [loading, setLoading] = useState(false)
  const {authUser ,setAuthUser} = useAuthContext()
  const signUp = async ({username, password, confirmPassword}) => {
      const success = handleInputErrors({username, password, confirmPassword})
      if(!success) return;
      setLoading(true)
      try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password, confirmPassword})
        })

        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }
        toast.success("Account created successfully")
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
        
      } catch (error) {
        toast.error(error.message)
      } finally{
        setLoading(false)
      }
  }
  return {loading, signUp}
}

const handleInputErrors = ({username, password, confirmPassword}) => {
    if(!username || !password || !confirmPassword){
        toast.error("Please fill in all fields")
        return false
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length < 6){
        toast.error("Password must be at least 6 characters")
        return false
    }
    if(username.includes(' ')){
        toast.error("Username can not contain spaces")
        return false
    }
    if(username.length < 3){
        toast.error("Username must be at least 3 characters")
        return false
    }
    if(username.length > 15){
        toast.error("Username must be less than 15 characters")
        return false
    }
    if(!username.match(/^[a-zA-Z0-9]+$/)){
        toast.error("Username can only contain letters and numbers")
        return false
    }

    return true
}

export default useSignUp