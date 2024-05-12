import tomski from "../../assets/images/tomski.png"
import quote from "../../assets/icons/quote.svg"
import { motion } from "framer-motion";

function TourGuide({data}) {
  return (
    <motion.div 
      className="tourGuideItem"
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0, transition: {duration: 0.45}}}
      viewport={{once: true, amount: 0.5 }}
    >
        <img className="person" src={require(`../../assets/images/${data.person}`)} alt="tomi" />
        <p className="fname">{data.fname}</p>
        <p className="specialty">{data.specialty}</p>
        <p className="statement">
          {data.statement}
        <img className="q1" src={quote} alt="quote" />
        <img className="q2" src={quote} alt="quote" />
        </p>
        <p className="phone">{data.phone}</p>
    </motion.div>
  )
}

TourGuide.defaultProps = {
  data: {
    person: "tomski.png",
    fname: 'Tomi',
    specialty: 'Domestic tours',
    statement: "I'm Chinaza, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
    phone: "07068833047"
  }
}

export default TourGuide