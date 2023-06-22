import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Hello from "./components/Hello";
import UserProfile from "./components/UserProfile";

function App() {
    const [debit, setDebit] = useState(0);
    const [credit, setCredit] = useState(0);
    const [balance, setBalance] = useState(0);
    const [addAmount, setAddAmount] = useState(0); //addAmount is what user types in: amount that will be added 
    const [debitAmount, setDebitAmount] = useState(0); 
    const [savedDebits, setSavedDebits] = useState([]); //we want to store our previous debit transactions here 
    const [savedCredits, setSavedCredits] = useState([]);
    const [formCredit, setFormCredit] = useState(0); //keep track of number in form //amoutn of credi t
    const [creditDesc, setCreditDesc] = useState("");
    const [formDebit, setFormDebit] = useState(0); //keep track of number in form  
    const [debitDesc, setDebitDesc] = useState("");
    const date = new Date();
    const today = date.toLocaleDateString();
//pass down necessary props  to userprofile 

    useEffect(() => {
        async function loadCredit() {
          try {
            const response = await fetch(
              `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
            );
            const data = await response.json();
            setCredit(data);
          } catch (error) {
            console.log(error);
          }
        }
        loadCredit();
      }, []);

    useEffect(() => {
        async function loadDebit() {
          try {
            const response = await fetch(
              `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
            );
            const data = await response.json();
            setDebit(data);
          } catch (error) {
            console.log(error);
          }
        }
        loadDebit();
      }, []);

      useEffect(() => {
        setBalance(credit - debit);
      }, [credit, debit]
      );

      console.log(savedCredits);
      function handleCredit(event) { //event handler 
        setAddAmount(event.target.value); //setting user's input to addAmount (for credit)
        setFormCredit(event.target.value); 
      }

       // function to change the credit value 
      function handleGivenCredit(event) {
        setBalance(balance => balance + Number(addAmount)); //casts the string to a Number 
        setSavedCredits([...savedCredits, {formCredit, creditDesc, today}]); //shallow copy of state, dont want to mutate it directly, 
                                                        //spread current state in array and add value at end (formCredit)
                                                        //...savedCredits copying the array over and adds formCredit into copy
      }

      function handleCreditDesc(event) { //event handler 
        setCreditDesc(event.target.value); //setting user's input to addAmount
      }

      function handleDebit(event) {
        setDebitAmount(event.target.value);
        setFormDebit(event.target.value);
      }
    
      //actually update the debit amount 12500 
      console.log(savedDebits);
      function handleGivenDebit(event) {
        setBalance(balance => balance - Number(debitAmount));
        setSavedDebits([...savedDebits, {formDebit, debitDesc, today}]);
      }

      function handleDebitDesc(event) { //event handler 
        setDebitDesc(event.target.value); //setting user's input to addAmount
      }


  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Routes - this is whats loaded into the page: goes in highest point of application , or can be a separate file 
        any nested routes need to have wildcard at the end 
        three props in hello component, credit and debit = whatever its equal to inApp component, name is set to hello, 
        first we need to pass these values as props to the userprofile bc its linked to both debit and credit, we dont 
        have direct access to it but userProfile does*/}
        {/* <Hello name="hello" credit = {credit} debit = {debit} name2 = "aminata" /> */}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile debit = {debit} credit = {credit}  balance = {balance} 
                                        handleCredit = {handleCredit} handleGivenCredit = {handleGivenCredit}
                                        handleDebit = {handleDebit} handleGivenDebit = {handleGivenDebit}
                                        handleCreditDesc = {handleCreditDesc} handleDebitDesc = {handleDebitDesc} 
                                        savedDebits={savedDebits} savedCredits={savedCredits}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
