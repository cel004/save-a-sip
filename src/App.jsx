import React from 'react';
import Home from './Home/Home.jsx'
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 



function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
  );
}

export default App
