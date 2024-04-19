import React from 'react'
import CardDealer from './CardDealer'

export default function PlayPage() {
  return (
    <>
        <h2>Poker Madness</h2>
        <div className='opponent-flex'>
            <CardDealer/>
        </div>

        <div className='play-btn-flex'>
            <button className='play-btn'>Change</button>
            <button className='play-btn'>Fold</button>
        </div>

        <div className='opponent-flex'>
            <CardDealer/>
        </div>
    </>
  )
}
