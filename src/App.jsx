import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Feedback from './Pages/Feedback';
import Login from './Pages/Login';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
       <Route path='/feedback' element={<Feedback/>}/>
       <Route path="/login" element={<Login/>} /> 
      </Routes>
       <Footer/>
    </>
  );
}

export default App;
