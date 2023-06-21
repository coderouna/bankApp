
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits(props) {


  // const data = props.savedDebits;
  // console.log(data);

  function newFunction(){
    let element = document.getElementById("form");
    element.reset()
  }

  return (
    <div>
      <h1>Debits</h1>

      <h2>Current Balance</h2>
      <p>${props.balance} </p>

      <form id="form">
      Debit Amount: <input type = "text" id = "addDebits" value={props.debitAmount}
                      onChange={props.handleDebit} 
                      placeholder="Enter Amount" /> 
      Description of Transaction: <input type = "text" id = "descrip" value={props.debitDesc}
                      onChange={props.handleDebitDesc} 
                      placeholder="Enter Description" />
      </form>
      
        <p></p>
        <button onClick={event => {
          			props.handleGivenDebit();
          			newFunction();
                //fetchHistory();
        		}} id="submit">
            Submit
        </button>

        <h2>Transaction History</h2>
        {props.savedDebits.length > 0 ? (
        <ul>
          {props.savedDebits.map((debit, index) => (
            <li key={index}>
              <p>Debit Amount: {debit.formDebit}</p>
              <p>Description: {debit.debitDesc}</p>
              <p>Date: {debit.today}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transaction history available.</p>
      )}

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to UserProfile</Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Debits;
