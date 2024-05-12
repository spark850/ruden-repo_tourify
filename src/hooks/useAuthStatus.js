import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthStatus() {
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    const auth = getAuth()

    useEffect(() => {
        if(isMounted){
            onAuthStateChanged(auth, (user) => {
                if(user){
                    setLoggedIn(true)
                }else{
                    setLoggedIn(false)
                }
                setCheckingStatus(false)
            })
        }

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

  return {loggedIn, checkingStatus}
}
