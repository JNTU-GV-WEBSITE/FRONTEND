import './App.css';
import Navbar from './components/navbar/Navbar';
import BelowBar from './components/BelowBar/BelowBar';
import Dropdown from './components/Navbars/Dropdown';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
    <BelowBar/><Dropdown/>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    <Route path='/Main' element={<BelowBar/>}/>
  </Routes>
    </div>
    
  );
}

export default App;
