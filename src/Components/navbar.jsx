import "../Styles/Sections/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="nav_wrapper">
      <div className="navbar">
        <Link to="/" className="name">
          <h3>Michelle VEL</h3>
        </Link>

        <div className="link_wrapper">
          <a href="https://github.com/Enebye91">GitHub /</a>
          <a href="https://www.linkedin.com/in/michelle-v-johansen">Linkedin</a>
        </div>
      </div>
    </section>
  );
}
