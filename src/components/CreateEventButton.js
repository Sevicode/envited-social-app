import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEventButton = () => {

  const navigate = useNavigate();
  const navigateToCreateEvent = () => {
    navigate('/create')
  }


  return (
    <button className='createButton' onClick={navigateToCreateEvent}>&#127881; Create My event</button>
  )
}

export default CreateEventButton