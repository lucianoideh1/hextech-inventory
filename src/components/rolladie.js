import React from "react";

export default function Rolladie(){
    return(
        <div>
            <h1>Rolladie</h1>
            <div className="dice-container">
            <span>0</span>
            </div>
            <div className="bottom-container">
                <p>Roll a die </p>
                <button>Roll</button>
            </div>
        </div>
    )
}