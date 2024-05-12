import tourifyLogoBlue from "../../assets/icons/logo_blue.png";
import MenuIcon from "../../assets/icons/menu.svg"
import closeBtn from "../../assets/icons/close_x.svg"
import profileIcon from "../../assets/icons/no_pfp.svg"
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigator = useNavigate()
    const { pathname } = useLocation()

    const pathMatch = (link) => {
        if(link === pathname){
            return true
        }

        return false
    }

    const openMenu = () => {
        setMenuOpen(true)
    }
    
    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if(scrollPosition > 100){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <nav className={pathname !== '/' || isScrolled ? 'opaque' : 'transparent'}>
            <div onClick={() => {navigator('/')}} style={{ cursor: 'pointer' }} className="logo">
                <img src={tourifyLogoBlue} alt="tourify logo" />
            </div>
            <div>
                <Link to='/' className={pathMatch('/') ? 'active' : ''}>Home</Link>
                <Link to='/food' className={pathMatch('/food') ? 'active' : ''}>Restaurants</Link>
                <Link to='/commerce' className={pathMatch('/commerce') ? 'active' : ''}>Commercial</Link>
                <Link to='/health' className={pathMatch('/health') ? 'active' : ''}>Healthcare</Link>
            </div>
            <div>
                <Link to='/tour_guides' className={pathMatch('/tour_guides') ? 'active' : ''}>Tour Guides</Link>
                <Link to='/contact_us' className={pathMatch('/contact_us') ? 'active' : ''}>Contact Us</Link>
                <button onClick={() => {navigator('/sign_up')}} className="main">Sign Up</button>
                {/* <img onClick={() => {navigator("/profile")}} src={profileIcon} alt="profile" /> */}
            </div>
            <div className="openBtn">
                <img src={MenuIcon} onClick={openMenu} alt="menu bars" />
            </div>
            <div className={`responsiveMenu ${menuOpen ? '' : "close"}`}>
                <div>
                    <Link to='/' className={pathMatch('/') ? 'active' : ''}>Home</Link>
                    <Link to='/food' className={pathMatch('/food') ? 'active' : ''}>Restaurants</Link>
                    <Link to='/commerce' className={pathMatch('/commerce') ? 'active' : ''}>Commercial</Link>
                    <Link to='/health' className={pathMatch('/health') ? 'active' : ''}>Healthcare</Link>
                </div>
                <div>
                    <Link to='/tour_guides' className={pathMatch('/tour_guides') ? 'active' : ''}>Tour Guides</Link>
                    <Link to='/contact_us' className={pathMatch('/contact_us') ? 'active' : ''}>Contact Us</Link>
                </div>
                <div>
                    {/* <Link to='/profile' className={`profile ${pathMatch('/profile') ? 'active' : ''}`}>
                        <img src={profileIcon} alt="profile" /><p>Profile</p>
                    </Link> */}
                    <button onClick={() => {navigator('/sign_up')}} className="main">Sign Up</button>
                </div>
                <div className="close">
                    <img src={closeBtn} onClick={closeMenu} alt="close" />
                </div>
            </div>
        </nav>
    );
}

