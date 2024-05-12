import "../../css/LocationFull.css"
import nike from "../../assets/images/nike.png"
import email from "../../assets/icons/email.svg"
import call from "../../assets/icons/call.svg"
import instagram from "../../assets/icons/instagram.png"
import fb from "../../assets/icons/fb.png"
import locationMarker from "../../assets/icons/location_blue.svg"
import car from "../../assets/icons/car.svg"
import star from "../../assets/icons/star.svg"
import Reviews from "../../components/sections/Reviews"
import ReviewsModal from "../../components/sections/ReviewsModal"
import RelatedLocations from "../../components/sections/RelatedLocations"
import ModalContext from "../../context/ModalContext"
import Footer from "../../components/sections/Footer"
import Header from "../../components/sections/Header"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useState, useContext } from "react"

function LocationFull({full_location}) {
    const [rating, setRating] = useState(0)
    const [ review, setReview ] = useState('')
    const { showReviews } = useContext(ModalContext)
    const mapsAPIKey = process.env.REACT_APP_MAPS_API_KEY

    const handleSubmit = (e) => {
        e.preventDefault()

        if(rating === 0){
            toast.error("Please give a rating")
        }

        if(review === ''){
            toast.error("Please enter your review")
        }
            
        if(review !== '' & rating > 0){
            toast.success("We got your review")
            console.log({
                rating,
                review
            })
            setReview('')
            setRating(0)
        }
        
    }

    const handleChange = (e) => {
        setReview(e.target.value);
    }

    const updateRating = (val) => {
        setRating(val);
    }

  return (
        <motion.div 
            className={`full_location ${showReviews ? 'modal' : ''}`}
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
        >
            <Header/>
            <div className="img-container">
                <img src={nike} alt="Jabi lake mall" />
            </div>
            <main>
                <h2>{full_location?.locationName}</h2>
                <p className="full_address">{full_location?.address}</p>
                <div className="rating">{full_location.rating} / 5 <img src={star} alt="star"/> </div>
                <div className="budgetItems">
                    {full_location.budget ? full_location.budget.map((budgetItem, index) => 
                    <p key={index} className={`budget ${index % 2 === 0 ? "blue" : 'black'}`}>{budgetItem}</p>) : <p className="budget red">Budget unavailable</p>}
                </div>
                <h3>Description</h3>
                <p className="description">West Africa's largest art gallery, also in Abuja, Kogi & Osun. Open 10am-6pm Mon-Sat 1pm-6pm Sun (Free for individuals Fee for Groups).</p>
                <h3>Location</h3>
                <div className="map">
                    <iframe
                        width="auto"
                        title="Google Map"
                        height='900'
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${mapsAPIKey}
                        &q=${full_location.locationName}`}>
            </iframe>
                </div>
                <div className="contact_trip">
                    <div className="contact">
                        <div>
                            <img src={call} alt="call" />
                            <p>{full_location.phone}</p>
                        </div>
                        <div>
                            <img src={fb} alt="facebook" />
                            <p>{full_location.facebook}</p>
                        </div>
                        <div>
                            <img src={instagram} alt="instagram" />
                            <p>{full_location.instagram}</p>
                        </div>
                        <div>
                            <img src={email} alt="email" />
                            <p>@{full_location.email}</p>
                        </div>
                    </div>
                    <div className="trip">
                        <div className="maps">
                            <img src={locationMarker} alt="location" />
                            <Link to={`https://www.google.com/maps/search/?api=1&query=${full_location.locationName}`}>Open in Google Maps</Link>
                        </div>
                        <div className="bolt">
                            <img src={car} alt="car" />
                            <Link to="https://bolt.eu/en-ng/">Book a Bolt</Link>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Already visited here? <label htmlFor="review">Leave a Review</label></p>
                    <textarea name="review" id="review" cols="30" rows="10" placeholder="It was okay, I guess" value={review} onChange={handleChange}></textarea>
                    <div className="rating">
                        <p>Rating: {rating} / 5</p>
                        <div className="stars">
                            <div className="star" onClick={() => updateRating(1)}></div>
                            <div className="star" onClick={() => updateRating(2)}></div>
                            <div className="star" onClick={() => updateRating(3)}></div>
                            <div className="star" onClick={() => updateRating(4)}></div>
                            <div className="star" onClick={() => updateRating(5)}></div>
                        </div>
                    </div>
                    <button className="main">Submit</button>
                </form>
                <Reviews/>
                <RelatedLocations/>
            </main>
            {showReviews && <ReviewsModal reviews={[0, 0, 0, 0, 0]}/>}
            <Footer/>
        </motion.div>
  )
}

LocationFull.defaultProps = {
    full_location : {
        locationName: "Nike Art Gallery",
        address: "5 Usuma St, Three Arms Zone, Abuja 900103, Federal Capital Territory",
        rating: 4.5,
        budget: ["Free for Individual", "Fee for Groups"],
        about: "West Africa's largest art gallery, also in Abuja, Kogi & Osun.10am-6pm Mon-Sat 1pm-6pm Sun (Free for individuals Fee for Groups)",
        phone: "080-0000-0000",
        instagram: 'nike_arts',
        facebook: 'nike_arts',
        email: 'nikearts@gmail.com'
    }
}

export default LocationFull