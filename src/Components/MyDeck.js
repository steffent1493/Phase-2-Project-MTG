import React from "react";

function MyDeck({ myDeckCard }) {

    return <div>
        <div className="myDeckCard"> 
            <img className="img" src={myDeckCard} alt="empty" />
        </div>
    </div>
}

export default MyDeck;