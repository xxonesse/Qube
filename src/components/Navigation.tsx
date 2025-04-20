import { NavLink } from "react-router-dom"
import "../styles/navigation.css"
import qlogo from "../assets/img/quboidlogo.png"

export default function Navigation() {
    return (
        <nav id="navbar">
        <img id="qlogo" src={qlogo} alt="quboid-logo" />
        <div className="tabs">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-btn active home" : "nav-btn home"}>Home</NavLink>
          <NavLink className="nav-btn portfolio" to="/portfolio">Portfolio</NavLink>
          <NavLink className="nav-btn about" to="/about">About</NavLink>
          <NavLink className="nav-btn resume" to="/resume">Resume</NavLink>
          <NavLink className="nav-btn connect" to="/connect">Connect</NavLink>
        </div>
      </nav>
    )
}