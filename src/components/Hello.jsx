import React from "react";

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
            </div>
        </div>
    )
}

export default Hello;