import { Link } from "react-router-dom"
import "../styles/HomePage.css"

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Random line of text goes here.</h1>
      <p></p>
      <Link to="/records">Get Started - It's Free!</Link>
    </div>    
  )
}  
