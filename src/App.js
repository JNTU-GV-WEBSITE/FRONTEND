import './App.css';
import BelowBar from './components/BelowBar/BelowBar';
import Footer from './components/MainPage/Footer/Footer';
import Header from './components/MainPage/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Policies from './components/MainPage/PoliciesSection/Policies';
import Notifications from './components/Notifications/Notifications';
import ReadMore from './components/MainPage/NoticeBoard/ReadMore';
import Noticeboard from './components/MainPage/NoticeBoard/Noticeboard';
import Map from './components/MainPage/Map/Map'
import  { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
        <Route path="/readmore" element={<ReadMore />}/>
      </Routes>
      <BelowBar />
      <Header />
      <br/>
      <div className="horizontal-container">
      <Notifications />
      <ImageGallery />
        <Policies />
        
      </div>
      <Noticeboard/>
      <br/>
      
      <Map />
      <Footer />
    </div>
  );
}

export default App;
