import star from "../../assets/icons/star.svg";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

function LocationHome({location}) {
    const navigator = useNavigate()

  return (
    <motion.div 
        className="locationItem"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 0.45}}}
        viewport={{once: true, amount: 0.5 }}
        onClick={() => {navigator('locations/6')}}
    >
        <div className="image-container">
            <img src={require(`../../assets/images/${location.pic}`)} alt="jabi_lake_mall" />
            <p>View Location</p>
        </div>
        <div className="text">
            <p className="name">{location.locationName}</p>
            <div>
                <p className="rating">{location.rating} / 5</p>
                <img src={star} alt="star"/>
            </div>
        </div>
    </motion.div>
  )
}

LocationHome.defaultProps = {
    location: {
        locationName: "Jabi Lake Mall",
        rating: 4.5,
        address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory",
        pic: "nike.png"
    }
}

export default LocationHome