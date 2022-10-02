import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEventButton = () => {

  const navigate = useNavigate();
  const navigateToCreateEvent = () => {
    navigate('/event')
  }


  return (
    <button className='createButton' onClick={navigateToCreateEvent}>&#127881; Create My event</button>
  )
}

export default CreateEventButton