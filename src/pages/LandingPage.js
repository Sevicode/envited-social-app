import React from 'react'
import CreateEventButton from '../components/CreateEventButton'


const LandingPage = () => {
  return (
    <div className='LandingPageContainer'>
        <div>
            <h1>Imagine if<span id='heading-span'> Snapchat </span>had events.</h1>
            <p>Easily host and share events with your friends across any social media.</p>
        </div>
        <div>
            <img src='./images/demo-card.png' alt='Event Demo Card' />
        </div>
        <div>
            <CreateEventButton />
        </div>
        
    </div>
  )
}

export default LandingPage