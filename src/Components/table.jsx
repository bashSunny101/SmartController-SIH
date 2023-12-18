import React from "react";
import "./table.css";
import moment from 'moment';

const Table = ({ data, header }) => {
  if (!data || !data.length) return <p>No security alerts found.</p>;

  return (
    <>
      <table className="securityalert">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>{header}</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((alert) => (
            <tr key={alert.id}>
              <td>{moment(alert.timestamp).format('DD-MM-YYYY HH:mm')}</td>
              <td>{alert.ip}</td>
              <td>{alert.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
