import React, { useEffect, useState } from 'react';

export default function CardDealer({ deckId, isSelecting }) {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isDoneButtonVisible, setIsDoneButtonVisible] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            if (cards.length === 0) { // Only fetch cards if the array is empty
                const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
                const data = await response.json();
                setCards(data.cards);
            }
        };

        if (deckId) { // Only attempt to fetch cards if deckId is not null
            fetchCards();
        }
    }, [deckId, cards]); // Include cards in the dependency array

    const selectCard = (card) => {
        setSelectedCards([...selectedCards, card]);
    };

    const changeCards = async () => {
        // Determine the number of new cards to draw based on the number of selected cards
        const count = selectedCards.length;
    
        // Remove the selected cards from the current hand
        const updatedCards = cards.filter(card => !selectedCards.includes(card));
        setCards(updatedCards);
    
        try {
            // Draw new cards to replace the selected ones
            const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
            if (!response.ok) {
                throw new Error(`Failed to draw new cards: ${response.statusText}`);
            }
            const data = await response.json();
    
            if (data.success) {
                // Add the new cards to the updated cards array
                setCards(prevCards => [...prevCards, ...data.cards]);
            } else {
                console.error("Failed to draw new cards:", data);
            }
        } catch (error) {
            console.error("Error changing cards:", error);
        }
    
        // Clear the selectedCards array
        setSelectedCards([]);
        setIsDoneButtonVisible(false);
    };
    
    
    
    
    
    
    
    return (
        <div className="card-dealer">
            <div className="cards-container">
                {cards.map((card, index) => (
                    <img
                        className="card" 
                        key={index} 
                        src={card.image} 
                        alt={`${card.value} of ${card.suit}`} 
                        onClick={() => isSelecting && selectCard(card)}
                        style={{ cursor: isSelecting ? "pointer" : "default" }}
                    />
                ))}
            </div>
            {isSelecting && isDoneButtonVisible && (
                <div className="done-btn-container">
                    <button className='done-btn' onClick={changeCards}>DONE</button>
                </div>
            )}
        </div>
    );
}    
