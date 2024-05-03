import React, { useEffect, useState } from 'react'
import CardDealer from './CardDealer'

export default function PlayPage() {
    const [playerDeckId, setPlayerDeckId] = useState(null)
    const [isSelecting, setIsSelecting] = useState(false)

    useEffect(() => {
        const startGame = async () => {
          const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
          const data = await response.json();
          setPlayerDeckId(data.deck_id);
        };
    
        startGame();
     }, []); // Empty dependency array ensures this runs once on mount
    
     const handleChangeClick = () => {
        setIsSelecting(true);
     };
    
     return (
        <>
          <h2>Poker Madness</h2>
            <>
              <div className='deck-flex'>
                <CardDealer deckId={playerDeckId} setDeckId={setPlayerDeckId} />
              </div>
              {isSelecting ? (
                <h2 className='changecards-text'>Which cards do you want to change?</h2>
              ) : (
                <div className='play-btn-flex'>
                  <button className='play-btn' onClick={handleChangeClick}>Change</button>
                  <button className='play-btn'>Fold</button>
                </div>
              )}
              <div className='deck-flex'>
                <CardDealer deckId={playerDeckId} setDeckId={setPlayerDeckId} isSelecting={isSelecting} />
              </div>
            </>
        </>
     );
    }