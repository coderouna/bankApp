import React from "react";
//ignore this file!
const Hello = (props) => {
    console.log(props);
    return(
        <div>
            Hello i am a component
            <div>
                <p>
                {props.name};
                </p>
                <p>
                {props.credit}; 
                </p>
                <p>
                {props.debit}; 
                </p>
                <p>
                {props.name2}; 
                </p>
            </div>
        </div>
    )
}

export default Hello;