import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

//credit adds 
function Credit(props) {

  //clear form 
  function clear(){
    let element = document.getElementById("form");
    element.reset()
  }

  return (
    <div>
      <h1>Credit</h1>

      <h2>Current Balance</h2>
      <p>${props.balance} </p>
      
    <form id="form">
      Credit Amount: <input type = "text" id = "addCredits" value={props.addAmount}
                      onChange={props.handleCredit} 
                      placeholder="Enter Amount" /> 
      Description of Transaction: <input type = "text" id = "descrip" value={props.creditDesc}
                      onChange={props.handleCreditDesc} 
                      placeholder="Enter Description" />
    </form>

        <p></p>

        <button onClick={event => {
          			props.handleGivenCredit();
          			clear();
        		}} id="submit">
            Submit
        </button>


      <h2>Transaction History</h2>
        {props.savedCredits.length > 0 ? (
        <ul>
          {props.savedCredits.map((credit, index) => (
            <li key={index}>
              <p>Credit Amount: {credit.formCredit}</p>
              <p>Description: {credit.creditDesc}</p>
              <p>Date: {credit.today}</p>
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

export default Credit;