import "../styles/Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>Logo</h1> 
      </Link>
      <nav className="navbar">
        <div className="extra-links-container">
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>
        <div className="auth-links">
          <Link className="sign-in-link" to="/sign-in">Sign In</Link>
          <Link className="sign-up-link" to="/sign-up">Sign Up - It's Free!</Link>
        </div>
      </nav>
    </header>
  )
}