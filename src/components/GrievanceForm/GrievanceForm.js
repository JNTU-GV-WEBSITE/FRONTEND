import React from "react";
import "./Grievance.css";

const Grievance = () => {
    return (
        <div class="container w-50 cont">
            <div class="form-control mb-3">
                <div class=""><center><h1>JNTUGV  Student Grievance Form</h1></center></div> 
                <hr/>
                <div style={{ color:"red"}}>* denotes a required field</div>
            </div>
            {/* <div class="form-control mb-3">
                <center><img src="./images/JNTUGV BAR.png" width="100%" height="100%"/></center>
            </div> */}
            <div>
            <form class="grievance-form">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Roll No Please..." name="sroll" required/>
                    <label for="floatingInput">Student Roll Number <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingPassword" placeholder="Your Email ID Please..." name="semail" required/>
                    <label for="floatingPassword">Email <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Your Full Name Please..." name="sname" required/>
                    <label for="floatingPassword">Full Name <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingPassword" placeholder="Your Aadhaar ID Please..." name="saadhaar" required/>
                    <label for="floatingPassword">Aadhar Number <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Your College Name Please..." name="scollege" required/>
                    <label for="floatingPassword">College Name <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingPassword" placeholder="Your Mobile Number Please..." name="smob" required/>
                    <label for="floatingPassword">Phone Number <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-control form-select" id="floatingPassword" name="sissue" required>
                        <option>Choose</option>
                        <option>Academic Issues</option>
                        <option>Facility Issues</option>
                        <option>Administrative Concerns</option>
                        <option>Personal Safety</option>
                        <option>Student Services</option>
                        <option>Campus Community & Inclusion</option>
                        <option>Technology & IT Services</option>
                        <option>Miscellaneous</option>
                    </select>
                    <label for="floatingPassword">Category of Grievance <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <textarea style={{ height:"22vh" }} class="form-control" id="floatingPassword" placeholder="Your Issues's Description Please..." name="sdesc" required></textarea>
                    <label for="floatingPassword">Detailed Description of the Grievance <span className="required">*</span></label>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingPassword" placeholder="Date of Incident" name="sdate" required/>
                    <label for="floatingPassword">Date of Incident <span className="required">*</span></label>
                </div>
                <div class="mb-3">
                    <label for="floatingPassword" children className="form-label">Any Supporting Documents(Attachment)<span className="required">*</span></label>
                    <input type="file" class="form-control" id="floatingPassword" placeholder="supporting_docs" name="sdoc" required/>
                </div>
                <div class="form-floating m-5">
                    <input class="btn btn-success w-100" type="submit" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Grievance;