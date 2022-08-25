import React  from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Results from "./Components/Results";
import {Routes , Route , Navigate} from 'react-router-dom';



function App() {
  return (
    <div>
      <div className="min-h-screen">
        <Navbar />
          <div className='p-4'>
            <Routes>
                <Route exact path='/' element={<Navigate  to="/search" />} />
                <Route exact path='/search' element={<Results />} />
                <Route exact path='/images' element={<Results />} />
                <Route exact path='/videos' element={<Results />} />            
                <Route exact path='*' element={<Results />} />            
            </Routes>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
