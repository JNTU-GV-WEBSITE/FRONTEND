import './App.css';
import TopLayer from './components/TopLayer/TopLayer';
// import Navbar from './components/navbar/Navbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
import BelowBar from './components/BelowBar/BelowBar';
import Dropdown from './components/Navbars/Dropdown';
import {Routes,Route} from 'react-router-dom';

import Notifications from './components/Notifications/Notifications';



function App() {
  return (
    <div>
      {/* <Navbar/> */}
    <BelowBar/>
    <Dropdown/>
    <Routes>
      <Route path='/' element={<BelowBar/>}/>
    <Route path='/Main' element={<BelowBar/>}/>
  </Routes>
    </div>
    
  );
}

export default App;
