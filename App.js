import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Home/>
         <Routes> 
         
        
            <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
           
         </Routes>
        <Footer />
      </Router> 
    </div>
  );
} 

export default App; 