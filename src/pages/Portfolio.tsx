import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../styles/portfolio.css';
import { Suspense, useState } from "react";

import Earth from '../components/Earth';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState<"works" | "illustrations">("works");

    return (
        <>
            <Navigation />
            <h2 id="folio">Qubefolio</h2>

            <nav id="foliotabs">
            <button 
                className={`modeltab ${activeSection === "works" ? "active-tab" : ""}`} 
                onClick={() => setActiveSection("works")}> 3D Models
            </button>
                <button className={`illustab ${activeSection === "illustrations" ? "active-tab" : ""}`} onClick={() => setActiveSection("illustrations")}>Illustrations</button>
            </nav>

            {/* SECTIONS */}
            <div className="foliosections">
                {activeSection === "works" && <div className="section works">
                    {/* 3D MODELS */}
                    <h2 id="threeD">ᯓ Character Design</h2>
                    <div id="modelObjects">
                    <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* Vehicles */}
                    <h2 id="threeD">ᯓ Vehicles</h2>
                    <div id="modelObjects">
                    <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <OrbitControls />
                                <ambientLight />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                        <Canvas className="canvas">
                            <Suspense fallback={null}>
                                <ambientLight />
                                <OrbitControls />
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>}

                {activeSection === "illustrations" && <div className="section illustrations">
                    {/* ILLUSTRATIONS */}
                    <h2 id="illustrations">ᯓ Illustrations</h2>
                    <div id="models">
                        <div className="model one"></div>
                        <div className="model two"></div>
                        <div className="model three"></div>
                        <div className="model four"></div>
                        <div className="model five"></div>
                        <div className="model six"></div>
                        <div className="model seven"></div>
                        <div className="model eight"></div>
                    </div>
                </div>}
            </div>
            <Footer />
        </>
    )
}