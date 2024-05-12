import cityVideo from "../assets/videos/city_gate.mp4"
import fAQ from "../assets/images/faq.png"
import tourBus from "../assets/images/tour_bus.jpeg"
import play from "../assets/icons/play_arrow.svg"
import pause from "../assets/icons/pause_white.svg"
import FAQItem from "../components/items/FAQItem"
import Testimonial from "../components/items/Testimonial"
import LocationsHome from "../components/sections/LocationsHome"
import NewsLetter from "../components/forms/NewsLetter"
import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"

function Home() {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef()
    const mover = useNavigate()
  
    let pauseVideo = () => {
        videoRef.current.pause()
        setIsPlaying(false)
    }
  
    let playVideo = () => {
        videoRef.current.play()
        setIsPlaying(true)
    }
  
  
    return (
      <motion.div
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
      >
        <Header/>
        <a href='top'></a>
        <div className="hero">
            <video ref={videoRef} muted autoPlay loop width="1000px" height="1000px" src={cityVideo}></video>
            <div>
            <h1 className="large_text">New to Abuja?</h1>
            <p>Don't worry, we would love to show you around</p>
            <button className="main">Explore Locations</button>
            </div>
            {isPlaying ?
            <button className="controls" onClick={pauseVideo}><img className="pause" src={pause} alt="pause"/>Pause Video</button> :
            <button className="controls" onClick={playVideo}><img className="play" src={play} alt="play"/>Play Video</button>
            }
        </div>
        <main>
            <p>Welcome to Abuja! Discover the best of Abuja with Tourify, the best guide for the Capital. Find things to do in Abuja, from iconic leisure spots and fun-filled days out to top restaurants and unmissable Abuja events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.</p>
            <LocationsHome data={{
                header: "Popular Locations",
                text: 'Tourists and residents seem to love these  spots. You should probably check some of them out during your stay here.',
                locations: [
                    {
                        locationName: "Jabi lake Mall",
                        rating: 4.5,
                        pic: 'lake_mall.jpg',
                        address: ""
                    },
                    {
                        locationName: "Transcorp Hilton",
                        rating: '4.85',
                        pic: 'transcorp.jpeg',
                        address: 'Nike Art Gallery, Elegushi Road, Lekki Phase 1, Lagos'
                    },
                    {
                        locationName: 'The Dark Room by The Yellow Plate',
                        rating: 4.45,
                        pic: 'darkroom.webp',
                        address: 'Km 7.5 Abuja International Airport Road Abuja Central'
                    }
                ]
            }}/>
            <LocationsHome data={{
                header: "Art and History",
                text: 'If you’re an art enthusiast or history lover, you would probably enjoy visiting any one of these locations during your stay.',
                locations: [
                    {
                        locationName: "Discovery Museum",
                        rating: 5,
                        pic: 'dm.webp',
                        address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
                    },
                    {
                        locationName: "Nike Art Gallery",
                        rating: '4.0',
                        pic: 'nike.png',
                        address: 'Nike Art Gallery, Elegushi Road, Lekki Phase 1, Lagos'
                    },
                    {
                        locationName: 'Retro Africa Gallery',
                        rating: 4.75,
                        pic: 'retro.jpeg',
                        address: 'Km 7.5 Abuja International Airport Road Abuja Central'
                    }
                ]
            }}/>
            <LocationsHome data={{
                header: "Ways to tour Abuja",
                text: 'Want to see more parts of Abuja? Whether alone or in groups? We gotchu',
                locations: [
                    {
                        locationName: "Almat Farm Tour",
                        rating: 5,
                        pic: 'almat.png',
                        
                    },
                    {
                        locationName: "Best of Abuja Tour",
                        rating: '4.0',
                        pic: 'bestof.png',
                       
                    },
                    {
                        locationName: 'Romantic Walking Tour',
                        rating: 4.75,
                        pic: 'romantic.png',
                        
                    }
                ]
            }}/>
            <section className="about">
                <div className="text">
                    <h1>About Us</h1>
                    <p>Tourify is the go-to platform for discovering new locations in any city. Whether you’re new to the city, a tourist, or a long-time resident, we have something for you.</p>
                    <ul>
                        <li>As a long-time resident Tourify can help you discover new locations you didn’t know about.</li>
                        <li>As a tourist or new comer to a city, we know it can be overwhelming. So we provide a list  popular places to visit. </li>
                        <li>We also provide a tour guides to show you around so you don’t get lost.</li>
                    </ul>
                </div>
                <div className="image-container">
                    <img src={tourBus} alt="tour_bus" />
                </div>
            </section>
            <section className="faq">
                <div className="image-container">
                    <img src={fAQ} alt="faq" />
                </div>
                <div className="text">
                    <h1>FAQs</h1>
                    <p>Here are some freqently asked questions about Tourify</p>
                    <div className="faqs">
                        <FAQItem faq={{
                            question: "How do i get my business featured on Tourify?",
                            answer: "Fill out the contact form with the purpose as “Request For Feature” and enter the name of your organisation and contact information."
                         } } />
                        <FAQItem faq={{
                            question: "How do i get a tour guide? ",
                            answer: "You can easily get a tour guide by heading to the tour guide section and picking a tour guide to contact"
                         } } />
                        <FAQItem faq={{
                            question: "Does Tourify only operate in Abuja? ",
                            answer: "Tourify operates in Abuja only, for now but it aims at global reach"
                         } } />
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <p>Don’t just take our word for it. Here are some reviews from satisfied our customers. We’d love to see a review from you too 🥹</p>
                <div className="reviews">
                    <Testimonial data={{
                            person: 'amaka.png',
                            fname: "Amaka",
                            location:  "Texas, USA",
                            review: "It was my first time in Nigeria. My tour guide gave me a good introduction and we toured very memorable places. "
                          }
                    }/>
                    <Testimonial data={{
                            person: 'ope.png',
                            fname: "Ope",
                            location:  "Ilorin, Nigeria",
                            review: "I visited Abuja for a conference and tourify helped me to find good places to relax."
                    }}/>
                   <Testimonial data={{
                            person: 'dave.png',
                            fname: "Dave",
                            location:  "Digital Nomad",
                            review: "Tourify gave me a warm welcome to the city of Abuja and let me know the best places to go to."
                    }}/>
                   <Testimonial data={{
                            person: 'fatima.png',
                            fname: "Fatima",
                            location:  "Abuja, Nigeria",
                            review: "Tourify is my go to app when looking for new places to have fun on the weekend. "
                    }}/>
                </div>
                <button className="main" onClick={() => mover('/tour_guides')}>Get a Tour Guide</button>
            </section>
            <NewsLetter/>
        </main>
        <Footer/>
      </motion.div>
    )
}

export default Home