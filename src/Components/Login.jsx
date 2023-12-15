import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
import { BACKEND_URI } from '../../env_variables';

function Login({ onLoginSuccess }) {
  const [empID, setEmpID] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URI}/user/signin`, {
        empID: empID,
        password: password,
      });
      if (response.status === 200) {
        // Successful login
        const userEmail = response.data.email;
        localStorage.setItem('empID', empID);
        localStorage.setItem('email', userEmail);
        onLoginSuccess();
      } else {
        setLoginError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Error during login. Please try again.');
    }
  };


  return (
    <>
      <div className="border-gray-700 bg-card text-card-foreground shadow w-[90vw] max-w-xl">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <h3 className="font-semibold text-3xl leading-none tracking-tight text-gray-300">Login</h3>
          <p className="text-sm text-muted-foreground text-gray-300">
            Get all energy solutions at one place...
          </p>
        </div>
        <div className=" pt-0 flex justify-center">
          <form className="space-y-8 w-96">
            <div className="space-y-2 text-left">
              <label
                className="text-sm text-gray-300 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="employeeId"
              >
                Employee ID
              </label>
              <input
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
                placeholder="employee ID"
                id="employeeId"
                aria-describedby="employeeId-description"
                aria-invalid="false"
                name="empID"
                value={empID}
                onChange={(e) => setEmpID(e.target.value)}
              />
            </div>
            <div className="space-y-2 text-left">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-gray-700"
                placeholder="password"
                id="password"
                aria-describedby="password-description"
                aria-invalid="false"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary bg-gray-50 text-primary-foreground shadow hover:border-2 hover:text-white  hover:bg-gray-700 h-9 px-4 py-2 text-black"
              type="button"
              onClick={handleLogin}  
            >
              Login
            </button>
            {loginError && (
            <p className="text-red-500 mt-2">{loginError}</p>
          )}
          </form>
          <p
            id="undefined-form-item-description"
            className="text-[0.8rem] text-muted-foreground"
          ></p>
        </div>
      </div>
    </>
  );
}

export default Login;
