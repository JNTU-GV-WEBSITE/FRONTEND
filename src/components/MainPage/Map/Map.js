import "./Map.css";

const Map = () => {
  return (
    <div className="videoTab">
      <div
        className="videoTabCon1">
          <p className="videoText"> JNTU-GV CAMPUS</p>
        <iframe
 
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/fOEDkvZzftM?si=Zr8zXVVNRL-AarGh"
          title="YouTube video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div
        className="videoTabCon2">
          <p className="videoText"> HOW TO REACH</p>
        <iframe
          title="Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2780196649674!2d83.37348461468248!3d18.15110228762525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1677429966801!5m2!1sen!2sin"
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </div>
      <div
        className="videoTabCon3">
          <p className="videoText"> JNTU-GV CAMPUS</p>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/fOEDkvZzftM?si=Zr8zXVVNRL-AarGh"
          title="YouTube video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
