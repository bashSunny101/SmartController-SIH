import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URI } from "../../env_variables";

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
  const [privilegeRole, setPrivilegeRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URI}/admin/get_roles`);
        if (response.data && Array.isArray(response.data.data)) {
          setRoles(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddPrivilege = async () => {
    const privilegeData = { name: "add_user", role: privilegeRole };
    try {
      const response = await axios.post(
        `${BACKEND_URI}/admin/add_privilege`,
        privilegeData
      );
      alert("Privilege added successfully!");
    } catch (error) {
      alert("Failed to add the privilege.");
    }
  };

  const handlePrivilegeRoleChange = (e) => {
    setPrivilegeRole(e.target.value);
  };

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
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit the form.");
    }
  };

  return (
  <>
    <div className="flex">
      {qr ? (
        <div className="border-2 ml-56 flex justify-center ">
          {qr && (
            <>
              <img
                className="m-2  w-72 h-72"
                src={qr.data.toString()}
                alt="QR Code"
              />
              <div className="mt-4 font-sans mr-3">
                <h3 className="text-2xl font-bold  text-red-500 mb-3 ml-4">
                  Employee Details
                </h3>
                <ul className=" pl-4 ">
                  <li>
                    <strong>Employee ID:</strong> {formData.empID}
                  </li>
                  <li>
                    <strong>Username:</strong> {formData.username}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Role:</strong> {formData.role}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div className=" h-screen w-scree">
            {/* <div className="border-2 flex justify-center ">
              <div className="max-w-lg m-4 bg-white rounded shadow-lg p-6 ">
                <div className="mt-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Add Privilege
                  </h3>
                  <div className="flex">
                    <input
                      className="flex-grow shadow bg-gray-200 appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Add Privilege"
                      value={privilegeRole}
                      onChange={handlePrivilegeRoleChange}
                    />
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                      onClick={handleAddPrivilege}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="border-2  flex justify-center ">
              <div className="max-w-lg m-4 bg-white rounded shadow-lg p-6 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Employee Registration
                </h2>

                <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="empID"
                >
                  Employee ID:
                </label>
                <input
                  className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="empID"
                  type="text"
                  name="empID"
                  value={formData.empID}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="role"
                >
                  Role:
                </label>
                <div className="relative">
                  <select
                    className="bg-gray-200 w-full text-gray-700 appearance-none py-2 px-6 rounded leading-tight focus:outline-none focus:shadow-outline"
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
                  className="block text-gray-700 text-lg font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="shadow bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </>
);

}

export default AdminPanel;
