import contactTelephone from "../assets/images/telephone.png";
import phoneHand from "../assets/images/phone_hand.png";
import call from "../assets/icons/call.svg";
import email from "../assets/icons/email.svg";
import home from "../assets/icons/home.svg";
import eggSauce from "../assets/images/egg-sauce.jpeg";
import calebb from "../assets/images/caleb.png"
import aqua from "../assets/images/aqualandia.png"
import art from "../assets/images/art.png"
import guys from "../assets/images/art.png"
import chopsticks from "../assets/images/chopsticks.png"
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";

function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        institution: '',
        email: '',
        purpose: 0,
        message: ''
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: form.name,
            institution: form.institution,
            email: form.email,
            purpose: parseInt(form.purpose),
            message: form.message
        });
        toast.success(`Thank you for reaching out 👍🏾`)
    }

  return (
    <motion.div 
        id='contact'
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <Header/>
        <section className="start">
            <img src={contactTelephone} alt="telephone" />
            <h1>Contact Us</h1>
        </section>
        <main>
            <p>Plan your stay in Abuja. We would love to help you find the best spots for absolutely anything. Please use the contact information  or form below to let us know what you think and we will get back to you as soon as possible.</p>
            <section className="contact_form">
                <div className="contact">
                    <img src={phoneHand} alt="phone_hand" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Leave a Message</h1>
                    <p>Kindly fill out the form with your details or questions and we will get back to you shortly.</p>
                    <div className="inputItem">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" onChange={handleChange} type="text" placeholder="John Doe" value={form.name || ''} required/>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="institution">Institution (Optional)</label>
                        <input id="name" name="institution" onChange={handleChange} value={form.institution || ''} type="institution" placeholder="John Doe’s Doors and Furniture"/>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="email">Email (Optional)</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={form.email || ''} placeholder="johndoe@email.com"/>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="purpose">Purpose</label>
                        <select name="purpose" id="purpose" value={form.purpose}  onChange={handleChange} required>
                            <option value="0">Please select an option</option>
                            <option value="1">Question</option>
                            <option value="2">Feedback</option>
                            <option value="3">Complaint</option>
                            <option value="4">Suggestion</option>
                            <option value="5">Request for Feature</option>
                            <option value="6">Other</option>
                        </select>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="10" name="message" placeholder="Message" value={form.message || ''} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <section className="contact_info">
                <h1>CONTACT INFO</h1>
                <div className="contacts">
                    <div>
                        <img src={call} alt="call"/>
                        <p>0800-0000-0000</p>
                    </div>
                    <div>
                        <img src={home} alt="home" />
                        <p>Nile University, Abuja</p>
                    </div>
                    <div>
                        <img src={email} alt="email"/>
                        <p>tourify@contactus.com</p>
                    </div>
                </div>
            </section>
            <section className="instagram">
                <h1>Follow our instagram</h1>
                <p>Check us out on Instagram @tourify. Here are some of our recent posts.</p>
                <div className="posts">
                    <div>
                        <img src={calebb} alt="egg_sauce" />
                    </div>
                    <div>
                        <img src={eggSauce} alt="egg_sauce" />
                    </div>
                    <div>
                        <img src={guys} alt="4guys" />
                    </div>
                    <div>
                        <img src={aqua} alt="cafe" />
                    </div>
                    <div>
                        <img src={art} alt="burger" />
                    </div>
                    <div>
                        <img src={chopsticks} alt="bakan" />
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </motion.div>
  )
}

export default ContactUs