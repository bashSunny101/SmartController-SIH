import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoginSuccessful, isVerified, children }) => {
  if (!isLoginSuccessful || !isVerified) {
    return <Navigate to="/" />;
  }

  return children; 
};

export default ProtectedRoute;
