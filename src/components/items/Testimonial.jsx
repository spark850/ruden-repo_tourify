import quote from "../../assets/icons/quote.svg"
import location from "../../assets/icons/location.svg"
import { motion } from "framer-motion"

function Testimonial({data}) {
  return (
    <motion.div 
      className="reviewItem"
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0, transition: {duration: 0.45}}}
      viewport={{once: true, amount: 0.5 }}
    >
        <img className="person" src={require(`../../assets/images/${data.person}`)} alt="tomi" />
        <p className="fname">{data.fname}</p>
        <p className="location"><img src={location} alt="location marker" />{data.location}</p>
        <p className="review"> {data.review}
        <img className="q1" src={quote} alt="quote" />
        <img className="q2" src={quote} alt="quote" /></p>
    </motion.div>
  )
}

Testimonial.defaultProps = {
  data: {
    person: 'tomski.png',
    fname: "Tomi",
    location:  "Digital Nomad",
    review: "Tourify gave me a warm welcome to the city of Abuja and let me know the best places to go to."
  }
}

export default Testimonial