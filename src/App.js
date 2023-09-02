import './App.css';
import TopLayer from './components/TopLayer/TopLayer';
// import Navbar from './components/navbar/Navbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import BelowBar from './components/BelowBar/BelowBar';
import Notifications from './components/Notifications/Notifications';


function App() {
  return (
    <div>
    
      <TopLayer/>
    {/* <Navbar/> */}
    <BelowBar/>
    <Notifications/>
    {/* <ImageGallery/> */}
    </div>
    
  );
}

export default App;
