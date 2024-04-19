import React from 'react'

export default function PlayPage() {
  return (
    <>
        <h2>Poker Madness</h2>
        <div className='opponent-flex'>
            <p className='card'>5</p>
            <p className='card'>7</p>
            <p className='card'>2</p>
            <p className='card'>1</p>
            <p className='card'>11</p>
        </div>
        
        <div className='play-btn-flex'>
            <button className='play-btn'>Change</button>
            <button className='play-btn'>Fold</button>
        </div>

        <div className='opponent-flex'>
            <p className='card'>5</p>
            <p className='card'>7</p>
            <p className='card'>2</p>
            <p className='card'>1</p>
            <p className='card'>11</p>
        </div>
    </>
  )
}
