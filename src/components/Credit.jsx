import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

//credit adds 
function Credit(props) {
//console.log("TEST2" + props.yourCredit);
//   const [yourCredit , setYourCredit] = useState(0);
  
  const [addAmount, setAddAmount] = useState(0); //addAmount is what user types in: amount that will be added 
  const [addDescription, setAddDescription] = useState(""); //storing description user puts in 

//   useEffect(() => {
//     async function loadAccountBalance() {
//       try {
//         const response = await fetch(
//           `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
//         );
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//         setYourCredit(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     loadAccountBalance();
//   }, []);

  function handleCredit(event) { //event handler 
    setAddAmount(event.target.value); //setting user's input to addAmount
  }

//   function handleDescription(event) { //event handler 
//     setAddDescription(event.target.value); //setting user's input to addAmount
//     //setAddDescription("");
//   }

  //function to change the credit value 
//   function handleGivenCredit(event) {
//     setYourCredit(prevCredit => prevCredit + Number(addAmount)); //casts the string to a Number 
//     setAddAmount("");
//   }

//console.log("TEST4" + props.yourCredit);
  return (
    <div>
      <h1>Credit</h1>

      <h2>Current Balance</h2>
      {/* <AccountBalance yourCredit = {yourCredit}></AccountBalance> */}
      <AccountBalance balance={props.AccountBalance} />
    <h4>Credit Amount</h4>
    <input
        id= "addCredit"
        type="text"
        value={addAmount}
        onChange={handleCredit} 
        placeholder="Enter Amount"
    />
    
    

    <h4>Description</h4>
      <input
        id= "addDescription"
        type="text"
        // value={addDescription}
        // onChange={handleDescription} 
        placeholder="Enter Description"
      />


        <p></p>

    {/* <button onClick={handleGivenCredit} id="submit">
        Submit
        </button> */}

      <nav>
        <ul>
            <li>
            <Link to="/userProfile">Back to UserProfile</Link>
            </li>
        </ul>
      </nav>

      
      <AccountBalance balance={props.AccountBalance} />
    </div>
  );
}

export default Credit;