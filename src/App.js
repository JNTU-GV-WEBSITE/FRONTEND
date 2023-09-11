import './App.css';
// import TopLayer from './components/TopLayer/TopLayer';
// import Navbar from './components/navbar/Navbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import BelowBar from './components/BelowBar/BelowBar';
import Notifications from './components/Notifications/Notifications';
import Footer from './components/MainPage/Footer/Footer';
import Header from './components/MainPage/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';

// import Dropdown from './components/MainPage/Header/Dropdown';


function App() {
  return (
    <div>
    <BelowBar/>
    {/* <TopLayer/> */}
    <Header/>
    {/* <Navbar/> */}
    <ImageGallery/>
 
      
 
    
    <Notifications/>
    {/* <ImageGallery/> */}
    {/* <Dropdown/> */}
    <Footer/>
    </div>
  );
}

export default App;
