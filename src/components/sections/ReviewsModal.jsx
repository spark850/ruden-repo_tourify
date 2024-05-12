import Review from "../items/Review"
import ModalContext from "../../context/ModalContext"
import { useContext } from "react"

function ReviewsModal({reviews}) {
    const { closeReviews } = useContext(ModalContext)

  return (
    <section className="all_reviews reviewsGroup">
        <h1>Reviews</h1>
        <div className="reviews">
            {reviews && reviews.map((review, index) => <Review key={index}/> )}
        </div>
        <button onClick={closeReviews} className="main">Close</button>
    </section>
  )
}

export default ReviewsModal