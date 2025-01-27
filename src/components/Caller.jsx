import React from 'react'
import { Link } from 'react-router-dom'

const Caller = () => {
  return (
    <div>
        This is caller component
        <div className='router__container'>
            <Link to="/">Go to Home</Link>
            <Link to="/dialpad">Go to dialpad</Link>
        </div>
    </div>
  )
}

export default Caller