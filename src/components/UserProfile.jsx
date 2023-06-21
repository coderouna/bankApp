import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Debits from "./Debits";
import Credit from "./Credit";

function UserProfile(props) {
  return (
    <div>
      <h2>Your Profile:</h2>

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
        <Route path="/debits" element={<Debits debit = {props.debit} balance ={props.balance}
                                                        handleDebit = {props.handleDebit}
                                                        handleGivenDebit = {props.handleGivenDebit}
                                                        handleDebitDesc = {props.handleDebitDesc}
                                                        savedDebits={props.savedDebits}/> } />

        <Route path="/credit" element={<Credit credit = {props.credit} balance ={props.balance} 
                                                handleCredit = {props.handleCredit}
                                                handleGivenCredit = {props.handleGivenCredit}
                                                handleCreditDesc = {props.handleCreditDesc}
                                                savedCredits={props.savedCredits}/>} />
      </Routes>
    </div>
  );
}

export default UserProfile;