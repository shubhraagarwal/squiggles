import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div className="icon">
          <img src="images/Squiggles-logo.png" alt="" srcset="" />
          <span className="icon-txt">
            <svg
              width="48"
              height="15"
              viewBox="0 0 48 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.56826 14C11.9883 14 14.7883 11.54 14.7883 7.3C14.7883 3.06 11.9883 0.6 7.56826 0.6H0.788262V14H7.56826ZM7.56826 3.98C9.94826 3.98 10.7683 4.28 10.7683 7.3C10.7683 10.32 9.94826 10.62 7.56826 10.62H4.54826V3.98H7.56826ZM19.2031 14L20.2431 11.52H26.6031L27.6231 14H31.9431L26.1431 0.6H20.7631L14.9831 14H19.2031ZM22.4431 6.26L23.3031 4H23.5631L24.4431 6.26L25.2231 8.14H21.6631L22.4431 6.26ZM39.5656 14.2C44.3456 14.2 47.0656 11.48 47.0656 7.3C47.0656 3.12 44.3456 0.4 39.5656 0.4C34.9056 0.4 32.1456 3.12 32.1456 7.3C32.1456 11.48 34.9056 14.2 39.5656 14.2ZM39.5656 10.6C36.8456 10.6 36.1456 9.96 36.1456 7.3C36.1456 4.64 36.8456 4 39.5656 4C42.2856 4 43.0656 4.64 43.0656 7.3C43.0656 9.96 42.2856 10.6 39.5656 10.6Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </Link>

      <div className="nav-txt">
        <Link className="link" to="/">
          <p>Proposals</p>
        </Link>
        <Link className="link" to="/new-proposal">
          <p>New Proposal</p>
        </Link>
        <Link className="link" to="/about">
          <p>What is Squiggles DAO?</p>
        </Link>
      </div>

      <div className="nav-btn">
        <button>Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
