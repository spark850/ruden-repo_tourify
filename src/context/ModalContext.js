import { createContext, useState } from "react";

const ModalContext = createContext()

export default ModalContext

export const ModalProvider = ({children}) => {
    const [ showReviews, setShowReviews ] = useState()

    const closeReviews = () => {
        setShowReviews(false)
    }

    const openReviews = () => {
        setShowReviews(true)
    }

    const contextData = {
        showReviews,
        openReviews,
        closeReviews,
    }

    return(
        <ModalContext.Provider value={contextData}>
            {children}
        </ModalContext.Provider>
    )
}