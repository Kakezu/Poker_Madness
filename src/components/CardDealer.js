import React, { useEffect, useState } from 'react'

export default function CardDealer() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=5");
            const data = await response.json();
            setCards(data.cards);
        };

        fetchCards();
    }, []);
    
  return (
    <>
        {cards.map((card, index) => (
            <img className="card" key={index} src={card.image} alt={`${card.value} of ${card.suit}`} />
        ))}
    </>
  )
}
