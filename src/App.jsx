import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Verify from './Components/Verify';
import Dashboard from './Components/Dashboard';
import ComponentMonitoring from './Components/ComponentMonitoring';
import ComMonDetails from "./Components/ComMonDetails";


function App() {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoginSuccessful(true);
  };

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex-col p-8 text-center">
              <div className="flex flex-col items-center mb-11">
                <img src="src\assets\image (4).svg" alt="logo" width={250} height={79} />
                <div className="text-white  font-light">Secure Grids, Smarter Connections</div>
              </div>
              <div className="flex responsive">
                <div className=" p-4 stop flex-grow">
                  <img src="src\assets\My Video.gif" alt="microgrid animation" />
                </div>
                <div className="inline-block h-auto w-1 rounded-xl self-stretch bg-gray-500 opacity-100 dark:opacity-50 line"></div>
                <div className="ml-20">
                  {!isLoginSuccessful ? (
                    <Login onLoginSuccess={handleLoginSuccess} />
                  ) : !isVerified ? (
                    <Verify onVerificationSuccess={handleVerificationSuccess} />
                  ) : (
                    <Navigate to="/dashboard" />
                  )}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/ComponentMonitoring" element={<ComponentMonitoring />} /> */}
        <Route path="/ComMonDetails" element={<ComMonDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
