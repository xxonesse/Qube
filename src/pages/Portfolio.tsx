
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// import Model from "../components/Model";
import '../styles/portfolio.css';
import { useState } from "react";

import illus1 from '../assets/img/illustrations/illus1.jpg';
import illus2 from '../assets/img/illustrations/illus2.jpg';
import illus3 from '../assets/img/illustrations/illus3.jpg';
import illus4 from '../assets/img/illustrations/illus4.jpg';

 
export default function Portfolio() {
    const [activeSection, setActiveSection] = useState<"works" | "illustrations" | "commissions">("works");    

    return (
        <>
            <Navigation />
            <h2 id="folio">Qubefolio</h2>

            <nav id="foliotabs">
            <button 
                className={`modeltab ${activeSection === "works" ? "active-tab" : ""}`} 
                onClick={() => setActiveSection("works")}> 3D Models
            </button>
            <button 
                className={`illustab ${activeSection === "illustrations" ? "active-tab" : ""}`} 
                onClick={() => setActiveSection("illustrations")}> Illustrations
            </button>
            <button 
                className={`comsnstab ${activeSection === "commissions" ? "active-tab" : ""}`} 
                onClick={() => setActiveSection("commissions")}> Commissions
            </button>
            </nav>

            {/* SECTIONS */}
            <div className="foliosections">
                {activeSection === "works" && <div className="section works">
                    {/* 3D MODELS */}
                    <h2 id="threeD">ᯓ Character Design</h2>
                    <h2 id="mooji">MOOJI Series</h2>
                    {/* import 3D Models component */}
                        {/* <Model /> */}
                    
                    {/* Vehicles */}
                    <h2 id="threeD">ᯓ Vehicles</h2>
                </div>}

                {activeSection === "illustrations" && <div className="section illustrations">
                    {/* ILLUSTRATIONS */}
                    <h2 id="illus-title">ᯓ Illustrations</h2>
                    <div id="illustrations">
                        <div className="illus one"><img id="illus" src={illus1} alt="" /></div>
                        <div className="illus two"><img id="illus"  src={illus2} alt="" /></div>
                        <div className="illus three"><img id="illus" src={illus3} alt="" /></div>
                        <div className="illus four"><img id="illus" src={illus4} alt="" /></div>
                        <div className="illus four"><img id="illus" src={illus4} alt="" /></div>
                        <div className="illus four"><img id="illus" src={illus4} alt="" /></div>
                        {/* <div className="illus five"></div>
                        <div className="illus six"></div> */}
                    </div>
                </div>}
            </div>
            <Footer />
        </>
    )
}
