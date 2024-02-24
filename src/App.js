import Navbar from './Components/Navbar';
import Planets from './Components/Planets';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Residents from './Components/Residents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Planets />} />
          <Route path="/residents/:residentUrls" element={<Residents/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
