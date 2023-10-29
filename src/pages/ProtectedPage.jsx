import ProtectedNavbar from "../components/ProtectedNavbar.jsx"

import "../styles/ProtectedPage.css"

export default function ProtectedPage() {
  return (
    <div className="protected-page-container">
      <ProtectedNavbar />
      <div className="protectedpage">
        <h1>Hello</h1>
      </div>
    </div>
  )
}