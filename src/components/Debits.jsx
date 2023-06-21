// import React, {useEffect, useState} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AccountBalance from "./AccountBalance";


// //debit subtracts
// function Debits() {
//   //const navigate = useNavigate();
//   const [yourDebit , setYourDebit] = useState("");
//   const [debitAmount, setDebitAmount] = useState("");


//   useEffect(() => {
//     async function loadAccountBalance() {
//       try {
//         const response = await fetch(
//           `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
//         );
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//         setYourDebit(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     loadAccountBalance();
//   }, []);

//   function handleDebit(event) { //event handler 
//     setMinusAmount(event.target.value); //setting user's input to addAmount
//   }

//   //function to change the balance 
//   function handleGivenDebit(event) {
//     setYourDebit(prevDebit => prevDebit - Number(minusAmount)); //casts the string to a Number 
//     minusAmount("");
//   }

//   return (
//     <div>
//       <h1>Debits</h1>

    
//       <h2>Current Balance</h2>
//       <AccountBalance AccountBalance = {yourDebit}></AccountBalance>

//     <h2>Debit Amount</h2>
//     <input
//         id= "subtractDebit"
//         type="text"
//         value={debitAmount}
//         onChange={handleDebit} 
//         placeholder="Enter Amount"
//       />
//     <button onClick={handleGivenDebit} id="submit">
//         Submit
//         </button>


//     <h2>Description</h2>
//       <input
//         id= "addDescription"
//         type="text"
//         // value={minusAmount}
//         // onChange={handleDebit} 
//         placeholder="Enter Description"
//       />

//     <button onClick={handleGivenDebit} id="submit">
//         Submit
//         </button>

//       <nav>
//         <ul>
//             <li>
//             <Link to="/userProfile">Back to UserProfile</Link>
//             </li>
//         </ul>
//       </nav>

      
//     </div>
//   );
// }


// export default Debits;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Debits(props) {
  const [yourDebit, setYourDebit] = useState(0); //your debit from the API LINK 
  //i named it the same thing as this bc im passing this down
  const [debitAmount, setDebitAmount] = useState(""); //what the user puts in 

  useEffect(() => {
    async function loadAccountBalance() {
      try {
        const response = await fetch(
          `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
        );
        const data = await response.json();
        setYourDebit(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadAccountBalance();
  }, []);


  //set our debitAmount (what the user types in) to whatever is inputted 
  function handleDebit(event) {
    setDebitAmount(event.target.value);
  }

  //actually update the debit amount 12500 
  function handleGivenDebit(event) {
    setYourDebit(prevDebit => prevDebit - Number(debitAmount));
    setDebitAmount("");
  }

  console.log("testing" + yourDebit);
  return (
    <div>
      <h1>Debits</h1>

      <h2>Current Balance</h2>
      <AccountBalance yourDebit={yourDebit} />

      <h4>Debit Amount</h4>
      <input
        id="subtractDebit"
        type="text"
        value={debitAmount} //what user entered in 
        onChange={handleDebit}
        placeholder="Enter Amount"
      />
      

      <h4>Description</h4>
      <input 
            id="addDescription" 
            type="text" 
            placeholder="Enter Description" 
        />

        <p></p>
        <button onClick={handleGivenDebit} id="submit">
            Submit
        </button>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to UserProfile</Link>
          </li>
        </ul>
      </nav>

        {console.log("TEST"+ yourDebit)}
      <AccountBalance yourBalance={props.AccountBalance} />
    </div>
  );
}

export default Debits;
