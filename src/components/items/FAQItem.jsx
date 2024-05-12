import angleDown from "../../assets/icons/angle_down.svg"
import angleUp from "../../assets/icons/angle_up.svg"
import { useState } from "react"

function FAQItem({faq}) {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="faqItem">
            <div onClick={toggle} className={`question ${isOpen ? "open" : ''}`} >
                <p>{faq.question}</p>
                <div>
                    <img src={isOpen ? angleUp : angleDown} alt="toggle button" />
                </div>
            </div>
            {isOpen && <p className="answer">{faq.answer}</p>}
        </div>
    )
}

FAQItem.defaultProps = {
    faq: {
        question: "How do i get my business featured on Tourify?",
        answer: "Fill out the contact form with the purpose as “Request For Feature” and enter the name of your organisation and contact information."
    }
}

export default FAQItem