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
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ACADEMICS</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">ADIMINSTARATION</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">DIRECTORATES</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">EXAMINATIONS</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">JNTUGV UNITS</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">LOGIN</button>
        <div class="dropdown-content">
          <a>
            {" "}
            <Link to="/Main">Link 1</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 2</Link>
          </a>
          <a>
            {" "}
            <Link to="/Main">Link 3</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
