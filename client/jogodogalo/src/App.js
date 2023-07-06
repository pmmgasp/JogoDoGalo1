import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Play from './pages/Play/Play';
import PlayPvP from './pages/Play/PlayPvP';
import PlayPvM from './pages/Play/PlayPvM';
import Options from './pages/Options';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/play' element={<Play/>}></Route>
        <Route path='/playpvp' element={<PlayPvP/>}></Route>
        <Route path='/playpvm' element={<PlayPvM/>}></Route>
        <Route path='/options' element={<Options/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
