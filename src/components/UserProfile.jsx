import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Debits from "./Debits";
import Credit from "./Credit";

function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile/debits">Debits</Link>
          </li>
          <li>
            <Link to="/userProfile/credit">Credit</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/debits" element={<Debits />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </div>
  );
}

export default UserProfile;