import star from "../../assets/icons/star.svg"
import { motion } from 'framer-motion'

function Review({review}) {

  return (
    <motion.div 
      className="reviewItem"
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition: {duration: 0.5}}}
      viewport={{once: true, amount: 0.5 }}
    >
      <div className="person">
        <img src={require(`../../assets/images/${review.pic}`)} alt="person-image" />
        <div className="name_rating">
          <div className="fname">{review.fname}</div>
          <div className="rating"><img src={star} alt="star" /><img src={star} alt="star" /> <img src={star} alt="star" /> <img src={star} alt="star" /> <img src={star} alt="star" />  <p>{review.rating}</p></div>
        </div>
      </div>
      <p>{review.review}</p>
      <div className="time">
        {review.time}
      </div>
    </motion.div>
  )
}

Review.defaultProps = {
    review: {
        pic: 'tomski.png',
        fname: 'Tomi',
        rating: '4.0',
        review: 'I love art and I enjoyed visiting Nike Art gallery and discovering new forms of art. I also love that you can buy some of the pieces on display',
        time: '1 week ago'
    }
}

export default Review