import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Play from './pages/Play';
import Options from './pages/Options';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Play' element={<Play/>}></Route>
        <Route path='/Options' element={<Options/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
