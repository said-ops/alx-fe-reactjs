
import About from './About';
import './App.css';
import Contact from './contact';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'


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
