import React from 'react'
import Navbar from "./components/Navbar"
import CockTails from './pages/cockTails';
import CockTailDetail from './pages/cockTailDetail';
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
     <div className="container max-w-[1200px] m-auto px-[20px]">
      <Routes>
        <Route path="/" element={<CockTails />} />
        <Route path="/cocktail/:id" element={<CockTailDetail />} />
        <Route path="/about" element={<About />} />
      </Routes> 
      </div>
      
      <Footer />
   </div>
  );
}

export default App;
