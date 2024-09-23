import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificDeck = () => {
    const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default SpecificDeck
