import eyeSlash from '../assets/icons/visibility_off.svg'
import eye from '../assets/icons/eye.svg'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { db } from "../firebase.config"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const mover = useNavigate()

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        dOB: '',
        password: '',
        confirmPass: ''
    })

    const { fullName, email, dOB, password, confirmPass } = form;

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(form.password !== form.confirmPass){
            toast.error(`Passwords do not match`)
            return
        }

        try{
            const auth = getAuth()

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            
            const user = userCredentials.user
            updateProfile(user, {
                displayName: fullName,
            })

            const formDataCopy = {...form}
            delete formDataCopy.password
            delete formDataCopy.confirmPass
            formDataCopy.dOB = new Date(dOB) 
            formDataCopy.timeStamp = serverTimestamp()

            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            toast.success("Welcome to Tourify! " + fullName.split(" ")[0])
            mover("/popular")
        }catch(err){
            toast.error("Sign Up Failed")
            console.log(err.message, err.code)
        }

        // check the error codes to generate accurate toasts
    }

    return(
        <motion.div 
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Header/>
            <main className="sign-up">
                <form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
                    <h1>SIGN UP</h1>
                    <div>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" value={fullName || ''} id="fullName" name="fullName" placeholder="John Doe" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email || ''} name="email" placeholder="johndoe@email.com" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='dOB'>Date of Birth</label>
                        <input type="date" id="dOB" name="dOB" onChange={handleChange} value={dOB || ''} required/>
                    </div>
                    <div className='passwordInput'>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={showPassword ? 'text' : 'password'} name="password" id='password' required value={password || ''} onChange={handleChange}/>
                            <img src={showPassword ? eyeSlash : eye} type="button" onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                    </div>
                    <div className='passwordInput'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div>
                            <input type={showConfirmPass ? 'text' : 'password'} name="confirmPass" id='confirmPass' required value={confirmPass || ''} onChange={handleChange}/>
                            <img src={showConfirmPass ? eyeSlash : eye} type="button" onClick={() => setShowConfirmPass(!showConfirmPass)}/>
                        </div>
                    </div>
                    <div className="account">
                        <button className="main" type="submit">Sign Up</button>
                        <p>Already have an account? <Link to="/log_in">Log In</Link></p>
                    </div>
                </form>
            </main>
            <Footer/>
        </motion.div>
    );
}