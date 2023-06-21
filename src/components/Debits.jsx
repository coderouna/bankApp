
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits(props) {

  // const [addDescription, setAddDescription] = useState(""); //storing description user puts in 


  // function handleDescription(event) { //event handler 
  //   setAddDescription(event.target.value); //setting user's input to addAmount
  //   //setAddDescription("");
  // }


  return (
    <div>
      <h1>Debits</h1>

      <h2>Current Balance</h2>
      <p> {props.balance} </p>

      <form>
      Debit Amount: <input type = "text" id = "addDebits" value={props.debitAmount}
                      onChange={props.handleDebit} 
                      placeholder="Enter Amount" /> 
      Description of Transaction: <input type = "text" id = "descrip" value={props.debitDesc}
                      onChange={props.handleDebitDesc} 
                      placeholder="Enter Description" />
    </form>
      
        <p></p>
        <button onClick={props.handleGivenDebit} id="submit">
            Submit
        </button>

        <button onClick={props.fetchHistory} id="history">
            See Transaction History
        </button>

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
