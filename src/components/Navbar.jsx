import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="">Sign Up</Link>
      </nav>
    </header>
  )
}