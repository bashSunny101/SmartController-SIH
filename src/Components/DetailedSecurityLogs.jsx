import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URI } from '../../env_variables'; // Ensure this path is correct

const AlertTable = ({ alerts }) => {
  return (
    <div className="m-5">
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-gray-400">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Alert ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Timestamp
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Vulnerability Type
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Severity
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Attacker IP
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Response Action
              </th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr className="border-b" key={alert._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.alert_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(alert.createdAt).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.severity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.attacker_ip}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function App() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URI}/alert/get_security_logs`);
        setAlerts(response.data.data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div className="App">
      <AlertTable alerts={alerts} />
    </div>
  );
}
