import './Dropdown.css';
import { Link } from 'react-router-dom';
const Dropdown=()=>{
return(


<div class="topnav" id="myTopnav">
    <div class="dropdown">
    <button class="dropbtn">Home
      <i class="fa fa-caret-down"></i>
    </button>
   
  </div>
  <div class="dropdown">
    <button class="dropbtn">ABOUTUS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a> <Link to='/Main'>Link 1</Link></a>
      <a> <Link to='/Main'>Link 2</Link></a>
      <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">ACADEMICS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">ADIMINSTARATION
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">DIRECTORATES
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">EXAMINATIONS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">JNTUGV UNITS 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">LOGIN
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <a> <Link to='/Main'>Link 1</Link></a>
    <a> <Link to='/Main'>Link 2</Link></a>
    <a> <Link to='/Main'>Link 3</Link></a>
    </div>
  </div>
</div>

)

}

export default Dropdown;
