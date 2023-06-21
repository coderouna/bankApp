import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

//credit adds 
function Credit(props) {

  return (
    <div>
      <h1>Credit</h1>

      <h4>Current Balance</h4>
      <p> {props.balance} </p>
      
    <form>
      Credit Amount: <input type = "text" id = "addCredits" value={props.addAmount}
                      onChange={props.handleCredit} 
                      placeholder="Enter Amount" /> 
      Description of Transaction: <input type = "text" id = "descrip" value={props.creditDesc}
                      onChange={props.handleCreditDesc} 
                      placeholder="Enter Description" />
    </form>

        <p></p>

    <button onClick={props.handleGivenCredit} id="submit">
        Submit
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

export default Credit;