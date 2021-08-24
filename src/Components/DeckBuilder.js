import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MtgCard from "./MtgCard";

function DeckBuilder({ input, onChange, mtgCardsList, parentCallback }) {

    const [deckCardNumber, setDeckCardNumber] = useState(0)
    const cardsWithImages = mtgCardsList.filter(card => card.imageUrl)
    const cardSet = new Set(cardsWithImages.map(card => card.name))
    const filteredCards = [];
    cardsWithImages.forEach(card => {
        if (cardSet.has(card.name)) {
            cardSet.delete(card.name)
            filteredCards.push(card)
        }
    })

    const handleOnClick = async (card) => {
        setDeckCardNumber((deckCardNumber) + 1)
        parentCallback((mtgMyDeck) => mtgMyDeck.concat(card.imageUrl))
    }

    return (< div className="deckbuilder" >
        <SearchBar input={input} onChange={onChange} cardsInDeck={deckCardNumber} />
        <div className="cardcontainer"> {
            filteredCards.map((card) => (<MtgCard key={card.id} card={card} handleOnClick={handleOnClick} />))}
        </div>
    </div>
    )
}

export default DeckBuilder;