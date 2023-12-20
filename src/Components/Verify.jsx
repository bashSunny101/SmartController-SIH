import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URI } from '../../env_variables';

function Verify({ onVerificationSuccess }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store OTP digits
  const [loginError, setLoginError] = useState("");
  const userEmail = localStorage.getItem("email") || ""; // Retrieve email from local storage

  useEffect(() => {
    // Check if the user is already logged in (for demonstration purposes)
    if (!userEmail) {
      navigate("/login"); // Redirect to login if email is not present
    }
  }, [navigate, userEmail]);

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      console.log(otp);
      const otpString = otp.join(""); // Convert OTP array to a string
      const employeeId = localStorage.getItem("empID") || "";
      console.log("here");
      const response = await axios.post(
        `${BACKEND_URI}/user/verify_otp`, // Use BACKEND_URI from env_variables
        {
          empID: employeeId,
          otp: parseInt(otpString)
        }
      );
      console.log("here2");
      console.log(response);
      if (response.status === 200) {
        // Successful verification
        onVerificationSuccess();
        console.log("here");
        navigate("/dashboard");
      } else {
        setLoginError("Invalid OTP");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      setLoginError("Error during verification. Please try again.");
    }
  };

  const handleChangeOtp = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <>
      <div className="border-gray-700 bg-card text-card-foreground shadow w-[90vw] max-w-xl">
        <div className="relative px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl text-gray-300">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {userEmail}</p>
              </div>
            </div>

            <div>
              <form>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    {otp.map((digit, index) => (
                      <div key={index} className="w-16 h-16 ">
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-gray-400 focus:bg-gray-900 focus:ring-1 ring-blue-700"
                          type="text"
                          name={`otp-${index}`}
                          value={digit}
                          onChange={(e) =>
                            handleChangeOtp(index, e.target.value)
                          }
                          maxLength="1"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none p-5 bg-gray-600 border-none text-gray-400 text-sm shadow-sm"
                        onClick={handleVerification}
                      >
                        Verify Account
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't receive the code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
