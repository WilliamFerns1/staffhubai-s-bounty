import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <Link to="/">Name</Link>
      <nav>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="">More</Link>
      </nav>
    </header>
  )
}