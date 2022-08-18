
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Phones from './Pages/Phones';
import PhoneDetails from './Pages/PhoneDetails';

function App() {
  return (
    <div>
      <Navbar/>
    <div>
      <h1>Phones.</h1>
    </div>
    <Routes>
      <Route path="/phones" element={<Phones/>}/>
      <Route path="/phones/:id" element={<PhoneDetails/>}/>
    </Routes>
    
    </div>
  )
}

export default App;
