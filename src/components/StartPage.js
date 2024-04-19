import React from 'react'
import poker_icon from "../images/icon_poker.png"
import { Link } from 'react-router-dom'

export default function StartPage() {
  return (
    <>
        <section className="startpage-section">
            <h1>Poker Madness</h1>
            <img className="poker-logo" src={poker_icon} alt="Two cards logo"/>
            <div>
              <Link to ="/playpage">
                <button className='start-btn'>Start</button>
              </Link>
            </div>
        </section>
    </>
  )
}
