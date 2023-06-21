import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//browserrouter 


import Home from "./components/Home";
import Debits from "./components/Debits";
import Credit from "./components/Credit"
import UserProfile from "./components/UserProfile";

function App() {
    const [debit, setDebit] = useState(0);
    const [credit, setCredit] = useState(0);
    const [balance, setBalance] = useState(0);


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

      // useEffect(() => {
      //     setBalance(credit - debit);
      // }, [credit, debit]
      // );

      function calcBalance(credit, debit){
        return credit -  debit;
      }

      const updateBalance = calcBalance(credit, debit);

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
              <Link to="/userProfile">UserProfile</Link>
            </li>
          </ul>
        </nav>

        {/* Routes - this is whats loaded into the page: goes in highest point of application , or can be a separate file 
        any nested routes need to have wildcard at the end */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile balance={balance}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;