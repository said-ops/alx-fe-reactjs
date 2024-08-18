
import About from './components/About';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Contact from './components/Contact';


function App() {

  
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
  </Router>
  );
}

export default App;
