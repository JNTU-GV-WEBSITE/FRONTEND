import React from "react";
import  './Gallery.css';
import Carosel from 'react-elastic-carousel'

function Gallery(){
    const sliderdata=[
        {
            image:'https://www.vidyavision.com/CollegeUploads/Photos/2019-20-7-12-35-09_JNTUAK%20Vizayanagaram.jpg',
            name:'',
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/vcassumenewoffice/11.jpeg',
            name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/jntugviday/16.jpeg'
            ,name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/jntugviday/2.jpeg'
            ,name:''
        },
        {
            image:'https://jntugvcev.edu.in/wp-content/uploads/2020/07/banner-2.jpg'
            ,name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/jntugviday/18.jpeg'
            ,name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/jntugviday/23.jpeg'
            ,name:""
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/jntugviday/20.jpeg'
            ,name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/vcassumenewoffice/10.jpeg'
            ,name:''
        },
        {
            image:'https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/gallery/vcassumenewoffice/45.jpeg'
            ,name:''
        }
    
    ];
  return (
    < div style={{backgroundColor:"#6499E9"}}>
   
      <div className="galleryhead">
   <h3 class=" gallery"style={{color:"black"}}>Gallery</h3>
      </div>
      <div className="carousel-container" >
        <Carosel itemsToShow={4} enableAutoPlay={true} autoPlaySpeed={1000}>
          {sliderdata.map((item, index) => (
            <div key={index} className="imageslider">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </Carosel>
      </div>
    
    </div>
  );
}

export default Gallery;
