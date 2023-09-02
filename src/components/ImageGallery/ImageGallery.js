import React, {useState} from 'react';
import './Image.css';
import top from '../../assets/top.png'
import logo from '../../assets/logo.jpg'


const ImageGallery = () => {
    const [imageSrc, SetSrc] = useState(top);
    const switchBrackground = () => {
        SetSrc(logo);
    }
    return (
        <>
            <div className="container-discover">
                <div className='container-logo-white'>
                    <img src={imageSrc} alt="logo ordinateur mathis blanc" onScroll={switchBrackground}/>
                </div>
            </div>
        </>
    );
};



export default ImageGallery;