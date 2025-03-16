import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../styles/home.css'
import wlogo from '../assets/img/wlogo.png';
import profpic from '../assets/img/profilepicturejpg.jpg';
import github from '../assets/img/GithubIcon.png';
import linkedin from '../assets/img/linkedinIcon.png';
import facebook from '../assets/img/facebookIcon.png';
import whatsapp from '../assets/img/whatsappIcon.png';
import tiktok from '../assets/img/tiktokIcon.png';
import star from '../assets/img/star.png';
import download from '../assets/img/download.png';


export default function Home() {
    return (
        <>
            <Navigation />
            <div className="container main">
                {/* profile */}
                <div className="container profile">
                    <div className="myName">
                        <img id='wlogo' src={wlogo} alt="logo" />
                        <h2>wanda</h2>
                    </div>
                    <img id="profpic" src={profpic} alt="profile picture" />
                    <p className="skill first">Specialization: <br /><span className="skill second"> Designer and Frontend Developer </span></p>
                    <p id="location">Located in: <br />Pangasinan, Philippines</p>

                    <div id="socials">
                        <div className="scl-btn github"><img src={github} alt="github" /></div>
                        <div className="scl-btn linkedin"><img src={linkedin} alt="linkedin" /></div>
                        <div className="scl-btn facebook"><img src={facebook} alt="facebook" /></div>
                        <div className="scl-btn whatsapp"><img src={whatsapp} alt="whatsapp" /></div>
                        <a href="https://www.tiktok.com/@qubebywanda" target="_blank"><div className="scl-btn tiktok"><img className="tiktok" src={tiktok} alt="tiktok" /></div></a>
                    </div>

                    <div id="email">Let's Work Together!</div>
                </div>

                {/* description */}
                <div className="container desc">
                    <div id="meet"><img className="staricon" src={star} alt="star" />Let's meet!</div>
                    <p className="description">I'm <i id="wanda">Jara Wanda</i> <br /> 3D Artist, Illustrator, and <br /> Frontend Developer</p>
                    <div id="download"><img className="downloadicon" src={download} alt="download" />Download CV</div>
                </div>
            </div>
            <Footer />
        </>
    )
}