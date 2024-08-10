import { useState } from "react";
import toast from "react-hot-toast";

const useSetStatus = () => {
    const [loadingStatus, setLoadingStatus] = useState(false);

    const setStatus = async (status, userToSet) => {
        setLoadingStatus(true);
        try {
            
            const res = await fetch("/api/users/setstatus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({status, userToSet}),
            });
            
            console.log(status, userToSet);
            const data = await res.json();
            console.log(data)
            if (data.error) {
                throw new Error(data.error);
            }
            
            toast.success("Status updated successfully");
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingStatus(false);
        }
    };

    return {setStatus };
};

export default useSetStatus;
