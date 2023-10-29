import "../styles/ProtectedNavbar.css"

import { Link } from "react-router-dom"
import { UserButton } from "@clerk/clerk-react";





export default function ProtectedNavbar() {
  return (
    <div className="protectednavbar">
      <Link to="/" className="logo-protected-page">Logo</Link>
      <nav>
        <Link to="credits">Credits</Link>
        <Link to="support">Support</Link>
        <UserButton />
      </nav>
    </div>

  )
}