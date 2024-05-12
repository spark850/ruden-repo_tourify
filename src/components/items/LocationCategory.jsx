import star from "../../assets/icons/star.svg";
import locationMarker from "../../assets/icons/location.svg"
import { motion } from "framer-motion";

function LocationCategory({location}) {
  return (
    <motion.div 
        className="locationItem"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 0.45}}}
        viewport={{once: true, amount: 0.5 }}
    >
        <div className="image-container">
            <img src={require(`../../assets/images/${location.pic}`)} alt="jabi_lake_mall" />
            <p>View Location</p>
        </div>
        <div className="text">
            <p className="name">{location.locationName}</p>
            <div className="rating">
                <p className="rating">{location.rating} / 5</p>
                <img src={star} alt="star"/>
            </div>
            <div className="location">
                <img src={locationMarker} alt="location marker" />
                <p className="address">{location.address}</p>
            </div>
        </div>
    </motion.div>
  )
}

LocationCategory.defaultProps = {
    location: {
        pic: 'lake_mall.jpg',
        locationName: "Jabi Lake Mall",
        rating: 4.5,
        address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
    }
}

export default LocationCategory