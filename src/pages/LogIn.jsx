import eyeSlash from '../assets/icons/visibility_off.svg'
import eye from '../assets/icons/eye.svg'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function LogIn() {

    const mover = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const { email, password } = form;

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const auth = getAuth();
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)

            const user = userCredentials.user;
            toast.success("Welcome back " + user.displayName.split(" ")[0])
            // mover("/popular")
            mover("/profile")
        }catch(err){
            toast.error("Invalid Credentials");
            console.log(err)
        }
    }

    return(
        <motion.div 
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Header/>
            <main>
                <form id="login-form" className="login-form " onSubmit={handleSubmit}>
                    <h1>LOG IN</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder="johndoe@email.com" required value={email || ''} onChange={handleChange}/>
                    </div>
                    <div className='passwordInput'>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={showPassword ? 'text' : 'password'} name="password" id='password' required value={password || ''} onChange={handleChange}/>
                            <img src={showPassword ? eyeSlash : eye} type="button" onClick={() => setShowPassword(!showPassword)}/>
                            <Link to='/forgot_pass'>Forgot Password?</Link>
                        </div>
                        
                    </div>
                    <div className="account">
                    <button>Log In</button>
                    <p>Don't have an account? <Link to='/sign_up'>Sign Up</Link></p>
                </div>
                </form>
            </main>
            <Footer/>
        </motion.div>
    )
}