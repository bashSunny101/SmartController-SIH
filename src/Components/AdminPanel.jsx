import React, { useState, useEffect } from "react";
import { BACKEND_URI } from "../../env_variables";
import axios from "axios";
import QRCode from "qrcode.react";

function AdminPanel() {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    empID: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });
  const [qr, setQr] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URI}/admin/get_roles`);
        if (response.data && Array.isArray(response.data.data)) {
          setRoles(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URI}/admin/signup`,
        formData
      );
      setQr(response.data);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <>
      <div className=" flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className=" p-6 border-2 bg-gray-300 shadow-md rounded  "
        >
          <h2 className="text-xl font-bold text-blue-700 mb-5">
            Employee Registration
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="empID"
            >
              Employee ID:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="empID"
              type="text"
              name="empID"
              value={formData.empID}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role:
            </label>
            <div className="relative">
              <select
                className="bg-gray-700 text-white appearance-none py-2 px-6 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500 text-sm"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select a role</option>
                {roles.map((role, index) => (
                  <option key={role._id} value={role.name}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          {qr && <img src={qr.data.toString()} alt="QR Code" />}
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
