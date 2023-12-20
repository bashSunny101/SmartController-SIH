import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URI } from "../../env_variables";

function PatchManagement() {
  const [totalHardware, settotalHardware] = useState("");
  const [pendingUpdate, setPendingUpdate] = useState("");
  const [patchedDevices, setpatchedDevices] = useState("");
  const [hardwareData, setHardwareData] = useState([]);
  const [patchLogs, setPatchLogs] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URI}/hardware/get_hardware_details`
        );
        const { hardwareData } = response.data;

        console.log(response.data);

        const pendHardware = response.data.counts[0].pendingUpdate;
        const totallHardware = response.data.counts[0].totalHardware;
        const patchHardware = response.data.counts[0].patchedDevices;
        setHardwareData(hardwareData);
        setPendingUpdate(pendHardware);
        settotalHardware(totallHardware);
        setpatchedDevices(patchHardware);
        setPatchLogs(response.data.patchLogs);
      } catch (error) {}
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" border-gray-800 flex-col justify-center items-center h-screen  ">
        <div>
          <div className="flex-col container  bg-gray-800">
            <div className="flex justify-start  text-2xl ">
              <div className="border-2 p-2 rounded-md flex-col bg-slate-800  ">
                <div>Hardware Devices</div>
                <div className="text-center text-2xl text-blue-600">
                  {totalHardware}
                </div>
              </div>
              <div className="border-2 p-2 rounded-md flex-col bg-slate-800">
                <div>Patched Devices</div>
                <div className="text-center text-2xl text-blue-600">
                  {patchedDevices}
                </div>
              </div>
              <div className="border-2 p-2 rounded-md flex-col bg-slate-800">
                <div>Pending Patches</div>
                <div className="text-center text-2xl text-blue-600">
                  {pendingUpdate}
                </div>
              </div>
            </div>
            <table className=" divide-y divide-gray-600 mt-4 min-w-full  text-2xl">
              <thead>
                <tr>
                  <th className="border p-3">Device Type</th>
                  <th className="border p-3">Total Devices</th>
                  <th className="border p-3">Patched Devices</th>
                  <th className="border p-3">Pending Patches</th>
                </tr>
              </thead>
              <tbody>
                {hardwareData.map((hardware) => (
                  <tr key={hardware._id}>
                    <td className="border p-3">{hardware._id}</td>
                    <td className="border p-3">{hardware.totalHardware}</td>
                    <td className="border p-3">{hardware.patchedDevices}</td>
                    <td className="border p-3">
                      {hardware.totalHardware - hardware.patchedDevices}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="flex-col w-full bg-gray-800 ">
            <div className="flex justify-between border-2 rounded-lg">
              <div className=" p-2 rounded-md flex-col ">
                <div className="font-bold ">Patch Update Logs</div>
                <div className="text-center text-2xl text-gray-200 w-full">
                  <table className="mt-4 min-w-full">
                    <thead>
                      <tr>
                        <th className="border p-3">Device Type</th>
                        <th className="border p-3">Total Devices</th>
                        <th className="border p-3">Patched Devices</th>
                        <th className="border p-3">Pending Patches</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">Inverter</td>
                        <td className="border p-3">Control System</td>
                        <td className="border p-3">3</td>
                        <td className="border p-3">3</td>
                      </tr>
                      <tr>
                        <td className="border p-3">1</td>
                        <td className="border p-3">2</td>
                        <td className="border p-3">3</td>
                        <td className="border p-3">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=" p-2 rounded-md flex-col">
                <div className="font-bold">Pending Patch Updations</div>
                <div className="text-center text-2xl text-gray-200 ">
                  <table className="mt-4 min-w-full">
                    <thead>
                      <tr>
                        <th className="border p-3">Device Type</th>
                        <th className="border p-3">Total Devices</th>
                        <th className="border p-3">Patched Devices</th>
                        <th className="border p-3">Pending Patches</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3">Inverter</td>
                        <td className="border p-3">Control System</td>
                        <td className="border p-3">3</td>
                        <td className="border p-3">3</td>
                      </tr>
                      <tr>
                        <td className="border p-3">1</td>
                        <td className="border p-3">2</td>
                        <td className="border p-3">3</td>
                        <td className="border p-3">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* System Operator */}
        <div className=" text-gray-400  border-2 flex-col mx-auto my-8 p-6 rounded-lg flex justify-center">
          <h3 className="font-bold text-white">Add New Patch</h3>
          <div className="flex  gap-4">
            {/* <input
              className="bg-gray-800 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="ID"
            /> */}
            <input
              className="bg-gray-800 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Company Name"
            />
            <input
              className="bg-gray-800 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Model Name"
            />
            <input
              className="bg-gray-800 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="New Patch Version"
            />
          </div>
          <div>
            <button className="mt-4 bg-gray-700 p-2 px-4 rounded hover:bg-gray-600">
              Create
            </button>
          </div>
        </div>
        {/* Maintenance Technician */}
        <div className=" bg-black p-10">
          <div className="overflow-hidden overflow-x-auto border border-gray-700 rounded">
            <table className="min-w-full text-white ">
              <thead className="font-bold text-lg text-blue-600">
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-4">Hardware ID</th>
                  <th className="px-6 py-4">Hardware Name</th>
                  <th className="px-6 py-4">Patch Version</th>
                  <th className="px-6 py-4">Release Date</th>
                  <th className="px-6 py-4">Update Status</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                <tr className="border-b border-gray-700 text-center">
                  <td className="px-6 py-4">HVAC16</td>
                  <td className="px-6 py-4">HVAC Controller - 16</td>
                  <td className="px-6 py-4">v6.0</td>
                  <td className="px-6 py-4">11-12-2023</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">
                      Update
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-center">
                  <td className="px-6 py-4">HVAC16</td>
                  <td className="px-6 py-4">HVAC Controller - 16</td>
                  <td className="px-6 py-4">v6.0</td>
                  <td className="px-6 py-4">11-12-2023</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">
                      Update
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-center">
                  <td className="px-6 py-4">HVAC16</td>
                  <td className="px-6 py-4">HVAC Controller - 16</td>
                  <td className="px-6 py-4">v6.0</td>
                  <td className="px-6 py-4">11-12-2023</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">
                      Update
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 text-center">
                  <td className="px-6 py-4">HVAC16</td>
                  <td className="px-6 py-4">HVAC Controller - 16</td>
                  <td className="px-6 py-4">v6.0</td>
                  <td className="px-6 py-4">11-12-2023</td>
                  <td className="px-6 py-4">
                    {/*backend*/}
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded">
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatchManagement;
