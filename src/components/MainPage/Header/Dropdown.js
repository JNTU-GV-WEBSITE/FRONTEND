import "./Dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <div class="topnav" id="myTopnav">
      <div class="dropdown">
        <button class="dropbtn">Home</button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ABOUTUS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ACADEMICS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ADIMINSTARATION</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">DIRECTORATES</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">EXAMINATIONS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">JNTUGV UNITS</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">LOGIN</button>
        <div class="dropdown-content">
          <button>
            {" "}
            <Link style={{}} className="link-btn" to="/Main">Link 1</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 2</Link>
          </button>
          <button>
            {" "}
            <Link className="link-btn" to="/Main">Link 3</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
