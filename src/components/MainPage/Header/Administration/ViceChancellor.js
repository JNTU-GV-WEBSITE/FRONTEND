import React from 'react';
import './AdminandDirectorates.css'; // Import your CSS file here
import { Link, useLocation } from 'react-router-dom';

function ViceChancellor() {
  const location = useLocation(); 
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
        <Link
          to="/Chancellor"
          className={`menuButton ${location.pathname === '/Chancellor' ? 'active' : ''}`}
        >
          Chancellor
        </Link>
        <Link
          to="/ViceChancellor"
          className={`menuButton ${location.pathname === '/ViceChancellor' ? 'active' : ''}`}
        >
          Vice Chancellor
        </Link>
        <Link
          to="/Registrar"
          className={`menuButton ${location.pathname === '/Registrar' ? 'active' : ''}`}
        >
          Registrar
        </Link>
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Vice-Chancellor
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            <center>
            <img className='ADimg'src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/jntugvvc.png" alt="Profile" />
            </center>
          </div>
          <div className="profileName">
            <h3 className='ADh3'>Prof.Dr.K.Venkatasubbaiah</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">Hon’ble Vice-Chancellor</h4>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p className='ADp'>Dr. Venkata Subbaiah Kambagowni is the founder Vice-Chancellor of Jawaharlal Nehru Technological University, Gurajada, Vizianagaram. He is an academician par excellence, a beloved teacher, and a focused leader with the vision to improve Indian education to internationally approved standards.</p>
<p className='ADp'>Sr. Prof. Venkata Subbaiah Kambagowni comes with ~37 years of experience in academia, during which he has a proven track record of taking up various leadership positions. He served as the Chairman, Faculty of Engineering, Dean (Research & Development), Dean (Transport) and Honorary Director, AU Development Centre, Andhra University. At the Department level, he served as the Head of the Department and Chairman, Board of Studies in Mechanical Engineering, AU College of Engineering, Andhra University. He also served as the Academic Senate Member for Andhra University and Adikavi Nannaya University. He served as Member of Bureau of Indian Standards Committee and Governing Body Member as A. P. State Government Nominee for 5 Engineering Colleges.</p>
<p className='ADp'>Prof. Kambagowni has an impressive track record of quality teaching, innovation and research in the area of Mechanical Engineering, with a 'h' index of 25, citation index of 2242. He guided 29 Ph.Ds and 132 students for their M.E/M.Tech degrees. He published 235 research papers in various national and international journals of repute and presented his work at International Conferences in USA and UK. He also has 3 patents published and a copyright granted. He served as the Chief Editor, Journal of Manufacturing Technology and Management and the Consulting Editor for Journal of Mechanical Engineering, The Institution of Engineers (India). His areas of interests are Fuzzy Systems, Supply Chain Management, Inventory Management, Quality management, Composite materials and Optimization.</p>
<p className='ADp'>In recognition of his academic brilliance and innovative research, he received State Best Teacher Award, Govt. of Andhra Pradesh in 2014, Dr. Sarvepalli Radhakrishnan Award for Best Academician in 2008 and Best Researcher Award in 2014 by the Andhra University. In addition to this, he is a recipient of Best Paper Award in Marine Engineering Division from The Institution of Engineers (India), 2017 & 2019 and two national awards from the Indian Institute of Industrial Engineering in 1992 and 1995. He received Technology Excellence Award in recognition of his contributions and achievement in the field of Engineering Education. He also received Col G N Bajpai Institution Prize, The Institution of Engineers (India), Kolkata in 2022, Corps of Engineers Prize, The Institution of Engineers (India), Kolkata in 2021, Engineer of the year Award in 2013 and Bharat Ratna Sir Mokshagundam Visvesvaraya Award in 2014 from Government of Andhra Pradesh and The Institution of Engineers (India), Andhra Pradesh State Centre.</p>
<p className='ADp'>He is a part of various professional bodies like Institution of Engineers (India), AP Academy of Sciences, Indian Institution of Production Engineers at the Fellow level. He is also a member of International Association of Engineers, ISHRAE, ISTE, ISTD, ISME, ORSI, ISPS and CMSI. At the Institution of Engineers (India), he is a Council Member and served as the Vice-President (2020-22). He also held positions of office as Chairman, CATE, Chairman, Board of Examinations of IEI, Chairman IEI, Andhra Pradesh State Centre, Chairman and Honorary Secretary IEI, Visakhapatnam Local Centre, National Board of Governors, ISHRAE, Delhi and President, ISHRAE Visakhapatnam. He served as Chairman and Honorary Secretary from 2003 to 2007 of The Institution of Engineers (India), Visakhapatnam Local Centre. Presently he is a council member of ISTE & AP Academic Sciences and Member in Advisory Board, ISTD Vizag Chapter.</p>
        </div>
      </div>
    </div>
  );
}

export default ViceChancellor;