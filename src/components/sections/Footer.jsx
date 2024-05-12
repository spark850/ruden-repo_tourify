import tourifyLogo from "../../assets/icons/logo_footer.png"
import instaLogo from "../../assets/icons/ig_white.png"
import fbLogo from "../../assets/icons/fb_white.svg"
import linkedInLogo from "../../assets/icons/linkedin_white.svg"
import xLogo from "../../assets/icons/twitter_white.png"
import phoneIcon from "../../assets/icons/phone_white.svg"
import emailIcon from "../../assets/icons/email_white.svg"
import locationWhiteIcon from "../../assets/icons/location_white.svg"
import { Link } from "react-router-dom";


export default function() {
    return(
        <div className="footer">
            <div className="footer-flex">
                <div className="footer-start">
                    <img src={tourifyLogo} alt="tourify" className="footer-logo"/>
                </div>
                <div className="links footer-column">
                    <h3>LINKS</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tour_guides">Tour Guides</Link></li>
                        <li><Link to="/contact_us">Contact Us</Link></li>
                        <li><Link to="/sign_up">Sign Up</Link></li>
                        <li><Link to="/log_in">Log In</Link></li>
                        <li><Link to="#coming_soon">Coming Soon</Link></li>
                        <li><Link to="#privacy">Privacy Policy</Link></li>
                        <li><Link to="#terms">Terms of Use</Link></li>
                    </ul>
                </div>
                <div className="categories footer-column">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li><Link to="/popular">Popular Places</Link></li>
                        <li><Link to="/food">Restaurants</Link></li>
                        <li><Link to="/health">Healthcare</Link></li>
                        <li><Link to="/commerce">Commercial</Link></li>
                    </ul>
                </div>
                <div className="footer-contact footer-column" style={{marginTop: 0}}>
                    <div className="contact-info">
                        <h3>CONTACT INFO</h3>
                        <ul>
                            <li><a href="tel:08000000000"><img src={phoneIcon} alt=""/>080-0000-0000</a></li>
                            <li><a href="mailto:tourify@gmail.com"><img src={emailIcon} alt=""/>tourify@gmail.com</a></li>
                            <li><Link target="_blank" to={`https://www.google.com/maps/search/?api=1&query=29 Boulevard, Garki, Abuja`}><img src={locationWhiteIcon} alt=""/>29 Boulevard, Garki, Abuja</Link></li>
                        </ul>
                    </div>
                    <div className="socials">
                        <h3 style={{marginTop: "25px"}}>SOCIALS</h3>
                        <Link target="_blank" to="https://www.instagram.com" className="footer-social"><img src={instaLogo} alt="IG"/></Link>
                        <Link target="_blank" to="https://twitter.com" className="footer-social"><img src={xLogo} alt="X"/></Link>
                        <Link target="_blank" to="https://www.linkedin.com" className="footer-social"><img src={linkedInLogo} alt="IN"/></Link>
                        <Link target="_blank" to="https://www.facebook.com" className="footer-social"><img src={fbLogo} alt="FB"/></Link>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", marginTop: "35px"}}>
                <a href="#top" className="back" style={{fontSize: "0.85rem", color:"#FF9C54", textShadow:"1px 1px 3px darkblue"}}>
                ↑ Back to Top
                </a>
                <p className="copyright" style={{fontSize: "0.65rem", marginTop:"0.5rem"}}>
                    Copyright © Tourify 2024
                </p>
            </div>
            
        </div>
            
    );
}