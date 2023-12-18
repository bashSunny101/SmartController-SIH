import React from 'react';

// Sample data structure that you might pass to the component
const alerts = [
  { id: 545, timestamp: '2022-03-01 08:45:01 AM', type: 'SQL Injection Attempt', severity: 'High', attackerIP: '192.168.1.105', response: 'User Blocked' },
  { id: 546, timestamp: '2022-03-01 09:30:45 AM', type: 'Cross-Site Scripting (XSS)', severity: 'Medium', attackerIP: '192.168.1.106', response: 'User Under Surveillance' },
  { id: 547, timestamp: '2022-03-01 10:20:10 AM', type: 'Brute Force Attack', severity: 'Critical', attackerIP: '192.168.1.107', response: 'User Blocked' }
];

// The Table component
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
            <tr className="border-b" key={alert.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.severity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.attackerIP}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.response}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  );
};

export default function App() {
  return (
    <div className="App">
      <AlertTable alerts={alerts} />
    </div>
  );
}
