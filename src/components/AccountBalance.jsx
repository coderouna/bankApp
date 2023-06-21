// import React from "react";
// import {useState, useEffect} from "react";
// import Debits from "./Debits";
// import Credit from "./Credit";


// const AccountBalance = (props) => {

//     //console.log("props working " + props.AccountBalance);
//     return (
//        <div>
//             <h1>{props.AccountBalance}</h1>
//         </div> 
//     )
    

// }
// function AccountBalance(){
//     // console.log("LINE 17 ACCOUNT BALANCE" + props.yourDebit); //12500
//     // console.log("LINE 18 ACCOUNT BALANCE" +props.yourCredit); //undefined
//     const [debit, setDebit] = useState(0);
//     const [credit, setCredit] = useState(0);
//     const [balance, setBalance] = useState(0);


//     useEffect(() => {
//         async function loadCredit() {
//           try {
//             const response = await fetch(
//               `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
//             );
//             const data = await response.json();
//             setCredit(data);
//           } catch (error) {
//             console.log(error);
//           }
//         }
//         loadCredit();
//       }, []);

//     useEffect(() => {
//         async function loadDebit() {
//           try {
//             const response = await fetch(
//               `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
//             );
//             const data = await response.json();
//             setDebit(data);
//           } catch (error) {
//             console.log(error);
//           }
//         }
//         loadDebit();
//       }, []);

//     // console.log("credit:" + yourCredit);
//     // console.log("debit:" + yourDebit);
//     // console.log("DEBIT?" + yourDebit);
//     // console.log("CREDIT?" + yourCredit);


//     useEffect(() => {
//         setBalance(yourCredit - yourDebit);
//     }, [yourCredit, yourDebit]
//     );

//     return(
//         <div>
//             <Debits AccountBalance={balance} setBalance={setBalance} />
//             <Credit AccountBalance={balance} setBalance={setBalance} />
//         </div>
//     )
// }

// export default AccountBalance;

//account balance should be parent, 
//credit is child of account baance, and so is debit
//acc balance responsible for passing down handler functions and props to children 
//within children component: update account balance state

/*
Yup! I double-checked. Some parent, whether it be App.js or AccountBalance, whichever one you choose, 
has to hold the state of that account balance, and then pass down handler functions and props to the children 
components which are namely Debit and Credit. The operations conducted in Debit and Credit need to then update 
the state of AccountBalance. It was the organization of the family-tree of components that was causing the issue.
Everything you wrote in the comments // should be the guiding principles to get you to your goal.

*/
