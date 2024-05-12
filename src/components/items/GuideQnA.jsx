function GuideQnA({guideQnA}) {
  return (
    <div className="qnaItem">
        <p className="question">{guideQnA.question}</p>
        <p className="answer">{guideQnA.answer}</p>
    </div>
  )
}

GuideQnA.defaultProps = {
    guideQnA: {
        question: "Personalized experience!",
        answer: "One of the greatest advantages of hiring a tour guide is the ability to tailor your experience to suit your interests, preferences, and pace."
    }
}

export default GuideQnA