import Dropdown from "./Dropdown";
import myImage from './jntugvcev.jpg'; 
import './Mainpage.css';
const Mainpage=()=>{
    return(
<div>
    <div className="container">
      <div className="logo-container">
        <img src={myImage} alt="JNTUV_LOGO" className="logo" />
        <h1 className="logo-text">Jawaharlal Nehru Technological University-Gurajada, Vizianagaram</h1>
      </div>
      
      <div className="item">

       <h3>
       Email : support@jntugv.edu.in</h3>
<h3>
  Email : enquiry@jntugv.edu.in
 </h3>
<h3>
Office Timings : Mon-Sat : 10:00 AM to 5:00 PM
</h3>


      </div>
   
      
    </div>
    <div>
      <Dropdown/>
    </div>   
    </div> )
}
export default Mainpage;