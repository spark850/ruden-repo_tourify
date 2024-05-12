import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useState, useRef } from "react"

function ForgotPassword() {

  const [email, setEmail] = useState()
  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Email successfully sent")
  }

  return (
    <motion.div 
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Header/>
            <main>
                <form id="reset-pass" className="login-form resetPass" onSubmit={handleSubmit}>
                    <h1>Reset Password</h1>
                    <p onClick={focusInput}>Enter your email below. A password reset email will be sent to you</p>
                    <div>
                        <input ref={inputRef} type="email" id='email' name="email" placeholder="johndoe@email.com" required value={email || ''} onChange={handleChange}/>
                    </div>
                    <div className="account">
                      <button>Send Email</button>
                    </div>
                </form>
            </main>
            <Footer/>
        </motion.div>
  )
}

export default ForgotPassword