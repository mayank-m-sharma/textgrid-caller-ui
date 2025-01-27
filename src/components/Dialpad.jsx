import React from 'react'
import { Link } from 'react-router-dom'
const Dialpad = () => {
  return (
    <div>
        <h1>this is Dialpad route</h1>
        <div className='router__container'>
            <Link to="/caller">Go to caller route</Link>
            <Link to="/">Go to Home</Link>
        </div>
    </div>
  )
}

export default Dialpad