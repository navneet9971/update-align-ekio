import React from "react";
import "./Table.css";
import { FaPowerOff } from "react-icons/fa";

function View() {
  return (
    <div className="table">
      <div className="view">View Reports</div>
      <h2>Logout
        <FaPowerOff />
        </h2>

      <table class="Review">
        <thead>
          <tr>
            <th class="header">S.NO</th>
            <th class="header">Compliance Type</th>
            <th class="header">Application Name</th>
            <th class="header">Report</th>
            <th class="header">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>

          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>

          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>

          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>

          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>

          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default View;
