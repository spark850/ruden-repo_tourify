import tourGuides from "../assets/images/tour_guides.png"
import TourGuide from "../components/items/TourGuide"
import GuideQnA from "../components/items/GuideQnA"
import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import { motion } from "framer-motion"

function TourGuides() {
  return (
    <motion.div 
        id="tour_guides"
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <Header/>
        <section className="start">
            <img src={tourGuides} alt="tour guides" />
            <h1>Tour Guides</h1>
        </section>
        <main>
            <p>Embark on a journey of discovery with our team of dedicated tour guides, ready to unveil the secrets and wonders of our captivating region. Whether you're want a city guide or museum guide or want to learn more about the culture, our guides are here to ensure an unforgettable experience tailored to your interests.</p>
            <section className="tour_guides">
                <h1>Our Tour Guides</h1>
                <div className="guides">
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Chinaza',
                            specialty: 'Domestic tours',
                            statement: "I'm Chinaza, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "08129606423"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Maryam',
                            specialty: 'Domestic tours',
                            statement: "Hey! I'm Maryam, your friendly and knowledgeable tour guide with a deep passion for showcasing the vibrant culture and natural beauty of our beloved destinations. ",
                            phone: "08095985405"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Gabriel',
                            specialty: 'Domestic tours',
                            statement: "I'm Gabriel, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "09094784251"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Kamar',
                            specialty: 'Domestic tours',
                            statement: "I'm Kamar, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "08143104084"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Tomisin',
                            specialty: 'Domestic tours',
                            statement: "I'm Tomisin, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "07068293037"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Prince',
                            specialty: 'Domestic tours',
                            statement: "I'm Prince, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "09157662986"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Japhet',
                            specialty: 'Domestic tours',
                            statement: "I'm Japhet, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "08068852166"
                        }}/>
                   <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Fadila',
                            specialty: 'Domestic tours',
                            statement: "I'm Fadila, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "09135315332"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Waweru',
                            specialty: 'Domestic tours',
                            statement: "I'm Waweru, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "08121723376"
                        }}/>
                    <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Ruden',
                            specialty: 'Domestic tours',
                            statement: "I'm Ruden, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "07064191837"
                        }}/>
                   <TourGuide data={{
                            person: "tomski.png",
                            fname: 'Micheal',
                            specialty: 'Domestic tours',
                            statement: "I'm Micheal, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer",
                            phone: "09018800387"
                        }}/>
                </div>
            </section>
            <section className="qna">
                <h1>Why get a tour guide?</h1>
                <div className="questions">
                    <GuideQnA guideQnA={{
                            question: "Personalized experience!",
                            answer: "One of the greatest advantages of hiring a tour guide is the ability to tailor your experience to suit your interests, preferences, and pace."
                        }}
                        />
                    <GuideQnA guideQnA={{
                            question: "Insider Knowledge and Expertise",
                            answer: "Tour guides are more than just local experts – they're passionate storytellers with an intimate understanding of the destinations they showcase."
                        }}
                        />
                    <GuideQnA guideQnA={{
                            question: "Access to Exclusive Opportunities",
                            answer: "Tour guides often have access to exclusive attractions, behind-the-scenes experiences, and off-the-beaten-path destinations that aren't accessible to the general public."
                        }}
                        />
                    
                </div>
            </section>
            <section className="how-to">
                <h1>How to do I get a tour guide?</h1>
                <p>Call the number for the tour guide you like and you’ll get a prompt response.</p>
            </section>
        </main>
        <Footer/>
    </motion.div>
  )
}

export default TourGuides